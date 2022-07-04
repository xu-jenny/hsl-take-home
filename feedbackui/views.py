from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .serializers import ExperimentUserSerializer, UserUpdateSerialier
from .models import ExperimentUser

def index(request):
    return HttpResponse("Hello!!!. You're at the polls index.")


class UserList(generics.ListAPIView):
    queryset = ExperimentUser.objects.all()
    serializer_class = ExperimentUserSerializer


class MultipleFieldLookupMixin:
    """
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a `lookup_fields` attribute, instead of the default single field filtering.
    """
    def get_object(self):
        queryset = self.get_queryset()             # Get the base queryset
        queryset = self.filter_queryset(queryset)  # Apply any filter backends
        filter = {}
        for field in self.lookup_fields:
            if self.kwargs[field]: # Ignore empty fields.
                filter[field] = self.kwargs[field]
        obj = get_object_or_404(queryset, **filter)  # Lookup the object
        self.check_object_permissions(self.request, obj)
        return obj

class UserDetail(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = ExperimentUser.objects.all()
    serializer_class = ExperimentUserSerializer
    lookup_fields = ['uid']


class UserUpdate(MultipleFieldLookupMixin, generics.RetrieveUpdateAPIView):
    queryset = ExperimentUser.objects.all()
    serializer_class = UserUpdateSerialier
    lookup_fields = ['uid']

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)




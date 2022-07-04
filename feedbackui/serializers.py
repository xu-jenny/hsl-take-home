from rest_framework import serializers
from .models import ExperimentUser

class ExperimentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperimentUser 
        fields = ['uid', 'username', 'has_admin_access', 'employment_status', 'birth_year', 'ui_feedback']


class UserUpdateSerialier(serializers.ModelSerializer):
    class Meta:
        model = ExperimentUser
        fields = ['employment_status', 'birth_year', 'ui_feedback']

    def update(self, instance, validated_data):
        instance.employment_status = validated_data.get('employment_status', instance.employment_status)
        instance.birth_year = validated_data.get('birth_year', instance.birth_year)
        instance.ui_feedback = validated_data.get('ui_feedback', instance.ui_feedback)
        instance.save()
        return instance
from django.db import models
from django.core.validators import MinLengthValidator

class ExperimentUser(models.Model):
    uid = models.CharField(max_length=10, primary_key=True, validators=[MinLengthValidator(10)])
    # uid = models.AutoField(primary_key=True, default=1000000000)
    username = models.TextField(default="")
    has_admin_access = models.BooleanField(default=False)
    birth_year = models.PositiveSmallIntegerField()
    employment_status_types = (
        (1, "Employed"),
        (2, "Unemployed"),
        (3, "Self-employed"),
    )
    employment_status = models.IntegerField(choices=employment_status_types, default=1)
    ui_feedback = models.TextField()

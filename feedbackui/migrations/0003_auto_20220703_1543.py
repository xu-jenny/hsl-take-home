# Generated by Django 3.2.13 on 2022-07-03 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedbackui', '0002_auto_20220701_2119'),
    ]

    operations = [
        migrations.AddField(
            model_name='experimentuser',
            name='has_admin_access',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experimentuser',
            name='username',
            field=models.TextField(default=''),
        ),
    ]

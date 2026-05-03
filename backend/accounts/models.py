from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    GENDER_CHOICES = [
        ('male',   'Male'),
        ('female', 'Female'),
        ('other',  'Other'),
    ]

    age                = models.PositiveIntegerField(null=True, blank=True)
    gender             = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, blank=True)
    medical_conditions = models.TextField(null=True, blank=True)

    # first_name, last_name, email already exist on AbstractUser

    def __str__(self):
        return self.username
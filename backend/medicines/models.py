from django.db import models
from django.conf import settings


class Medicine(models.Model):
    patient      = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='medicines')
    name         = models.CharField(max_length=255)
    dosage       = models.CharField(max_length=100)
    start_date   = models.DateField()
    end_date     = models.DateField()
    instructions = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} — {self.patient.username}"


class MedicineSchedule(models.Model):
    medicine       = models.ForeignKey(Medicine, on_delete=models.CASCADE, related_name='schedules')
    scheduled_time = models.TimeField()

    def __str__(self):
        return f"{self.medicine.name} at {self.scheduled_time}"
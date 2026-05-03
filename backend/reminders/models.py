from django.db import models
from django.conf import settings
from medicines.models import MedicineSchedule


class DoseLog(models.Model):
    STATUS_CHOICES = [
        ('taken',  'Taken'),
        ('missed', 'Missed'),
    ]

    patient   = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='dose_logs')
    schedule  = models.ForeignKey(MedicineSchedule, on_delete=models.CASCADE, related_name='dose_logs')
    date      = models.DateField()
    status    = models.CharField(max_length=10, choices=STATUS_CHOICES)
    marked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('patient', 'schedule', 'date')

    def __str__(self):
        return f"{self.patient.username} | {self.schedule} | {self.date} | {self.status}"


class Notification(models.Model):
    patient    = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='notifications')
    message    = models.CharField(max_length=255)
    is_read    = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient.username} | {self.message[:50]}"
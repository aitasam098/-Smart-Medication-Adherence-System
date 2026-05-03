from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/medicines/', include('medicines.urls')),
    path('api/reminders/', include('reminders.urls')),
    path('api/tracking/', include('tracking.urls')),
    path('api/ai/', include('ai_assistant.urls')),
]
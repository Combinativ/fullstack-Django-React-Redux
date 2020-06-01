from django.db import models
#from django.contrib.auth.models import User
from accounts.models import CustomUser
# Create your models here.


class DemoUserContent(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        CustomUser, related_name="contents", on_delete=models.CASCADE, null=True)
    message = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

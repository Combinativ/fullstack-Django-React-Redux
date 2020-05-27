from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class DemoUserContent(models.Model):
	name= models.CharField(max_length=100)
	owner= models.ForeignKey(User,related_name="contents",on_delete=models.CASCADE,null=True)
	email=models.EmailField(max_length=100,unique=True)
	message=models.CharField(max_length=200,blank=True)
	created_at=models.DateTimeField(auto_now_add=True)

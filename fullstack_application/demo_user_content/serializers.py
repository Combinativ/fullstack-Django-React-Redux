from rest_framework import serializers
from demo_user_content.models import DemoUserContent

#Demo User Content seralizer

class DemoUserContentSerializer(serializers.ModelSerializer):
 class Meta:
  model=DemoUserContent
  fields='__all__'
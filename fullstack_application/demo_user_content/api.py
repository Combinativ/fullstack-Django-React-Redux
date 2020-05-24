from demo_user_content.models import DemoUserContent
from rest_framework import viewsets,permissions
from .serializers import DemoUserContentSerializer

#demo user content viewset
class DemoUserContentViewset(viewsets.ModelViewSet):
 queryset=DemoUserContent.objects.all()
 permission_classes=[
  permissions.AllowAny
 ]
 serializer_class=DemoUserContentSerializer
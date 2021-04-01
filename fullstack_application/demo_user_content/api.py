from demo_user_content.models import DemoUserContent
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .serializers import DemoUserContentSerializer
from django.http import JsonResponse

# demo user content viewset


class DemoUserContentViewset(viewsets.ModelViewSet):
    queryset = DemoUserContent.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DemoUserContentSerializer

    def get_queryset(self):
        # returns all the content owned by user
        return self.request.user.contents.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

class ApiTestView(generics.RetrieveAPIView):
    def get(self, request):
        return Response({"API app says Nyahello.. !!"})
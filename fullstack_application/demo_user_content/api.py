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
        return DemoUserContent.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class FetchAllContentViewset(generics.RetrieveAPIView):
    def get(self, request):
        return Response(DemoUserContentSerializer(DemoUserContent))

class ApiTestView(generics.RetrieveAPIView):
    def get(self, request):
        response = {}
        response["msg"]= "API app says Nyahello.. !!"
        # response["Access-Control-Allow-Origin"] = "*"
        return Response(response)
        
class ApiTestView2(generics.CreateAPIView):
    def post(self,request):
        response = "Post works fine !!"
        return Response(response)
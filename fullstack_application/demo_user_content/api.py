from demo_user_content.models import DemoUserContent
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .serializers import DemoUserContentSerializer

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

class ApiTesterView(generics.RetrieveAPIView):
    # queryset=None
    def post(self,request):
        return Response({
            "hello"
        })

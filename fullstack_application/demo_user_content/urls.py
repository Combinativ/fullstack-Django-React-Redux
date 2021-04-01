from rest_framework import routers
from .api import DemoUserContentViewset, ApiTestView
from django.urls import path
router = routers.DefaultRouter()
router.register('api/contents', DemoUserContentViewset,'contents')

urlpatterns=router.urls
urlpatterns+=[
    path('api/test', ApiTestView.as_view())
]
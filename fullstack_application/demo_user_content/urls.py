from rest_framework import routers
from django.urls import path
from .api import DemoUserContentViewset,ApiTesterView

router = routers.DefaultRouter()
router.register('api/contents',DemoUserContentViewset,'contents')
urlpatterns=router.urls
urlpatterns+=[
    path('api/test',ApiTesterView.as_view(),name='help')
]
from rest_framework import routers
from .api import DemoUserContentViewset, ApiTestView, ApiTestView2, FetchAllContentViewset
from django.urls import path
router = routers.DefaultRouter()
router.register('api/contents', DemoUserContentViewset,'contents')

urlpatterns=router.urls
urlpatterns+=[
    # path('api/contents', FetchAllContentViewset.as_view()),
    path('api/test', ApiTestView.as_view()),
    path('api/test2', ApiTestView2.as_view())
]
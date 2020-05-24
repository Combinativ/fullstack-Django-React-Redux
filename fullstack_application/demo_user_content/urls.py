from rest_framework import routers
from .api import DemoUserContentViewset

router = routers.DefaultRouter()
router.register('api/contents',DemoUserContentViewset,'contents')

urlpatterns=router.urls
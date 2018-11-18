from django.urls import include, path

from rest_framework import routers

from eqi import views


router = routers.DefaultRouter()
router.register(r'counties', views.CountyViewSet, base_name='counties')


urlpatterns = [
    path('api/v1/', include(router.urls)),
]

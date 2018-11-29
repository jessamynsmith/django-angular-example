from django.urls import include, path

from rest_framework import routers

from eqi import views


router = routers.DefaultRouter()
# Must register sub-route before higher-level route
router.register(r'counties/admin', views.CountyAdminViewSet, base_name='counties-admin')
router.register(r'counties', views.CountyViewSet, base_name='counties')


urlpatterns = [
    path('api/v1/', include(router.urls)),
]

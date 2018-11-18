"""django_angular_example URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.urls import include, path, re_path
from django.views.generic import RedirectView

from rest_framework_jwt.views import obtain_jwt_token

from eqi import urls as eqi_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-token-auth/', obtain_jwt_token),

    path('', include(eqi_urls)),

    # Angular URLs
    re_path(r'^$', serve, kwargs={'path': 'index.html'}),
    re_path(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
            RedirectView.as_view(url='/static/%(path)s', permanent=False))
]

from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from eqi import models as eqi_models
from eqi import serializers as eqi_serializers


class CountyViewSet(ModelViewSet):
    queryset = eqi_models.County.objects.all()
    serializer_class = eqi_serializers.CountySerializer


class CountyAdminViewSet(ModelViewSet):
    queryset = eqi_models.County.objects.all()
    serializer_class = eqi_serializers.CountySerializer

    def list(self, request, *args, **kwargs):
        user_has_admin = request.user.groups.filter(name='admin')
        if not user_has_admin:
            return Response({'invalid': 'Invalid User'}, status=status.HTTP_409_CONFLICT)

        return super().list(request, *args, **kwargs)

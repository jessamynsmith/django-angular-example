from rest_framework.viewsets import ModelViewSet

from eqi import models as eqi_models
from eqi import serializers as eqi_serializers


class CountyViewSet(ModelViewSet):
    queryset = eqi_models.County.objects.all()
    serializer_class = eqi_serializers.CountySerializer

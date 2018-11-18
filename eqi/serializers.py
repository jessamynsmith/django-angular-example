from rest_framework.serializers import ModelSerializer

from eqi import models as eqi_models


class CountySerializer(ModelSerializer):
    class Meta:
        model = eqi_models.County
        fields = '__all__'

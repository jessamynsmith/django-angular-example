from django.contrib.auth import get_user_model

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    groups = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ['username', 'groups']

    def get_groups(self, obj):
        return obj.groups.all().values_list('name', flat=True)

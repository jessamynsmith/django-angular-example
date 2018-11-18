from django.contrib.auth import get_user_model

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    group = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ['username', 'group']

    def get_group(self, obj):
        # Only assign users to a single group
        group =  obj.groups.first()
        if group:
            return group.name
        return ''

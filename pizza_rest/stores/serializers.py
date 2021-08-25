from rest_framework import serializers
from rest_framework.reverse import reverse

from .models import Pizzeria


class PizzeriaListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()

    class Meta:
        model = Pizzeria
        fields = (
            'id',
            'name',
            'city',
            'absolute_url'
        )

    def get_absolute_url(self, obj):
        return reverse('stores:pizzeria_detail', args=[obj.pk]) 


class PizzeriaDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()

    class Meta:
        model = Pizzeria
        fields = (
            'id',
            'name',
            'city',
            'zip_code',
            'website',
            'phone', 
            'email',
            'update',
        )

    def get_update(self, obj):
        return reverse('stores:pizzeria_update', args=[obj.pk])
   
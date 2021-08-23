from django.shortcuts import render
from rest_framework import generics

from .serializers import PizzeriaListSerializer, PizzeriaDetailSerializer
from .models import Pizzeria


class PizzeriaMixin:
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaListAPIView(PizzeriaMixin, generics.ListAPIView):
    serializer_class = PizzeriaListSerializer


class PizzeriaRetrieveAPIView(PizzeriaMixin, generics.RetrieveAPIView):
    pass


class PizzeriaCreateAPIView(PizzeriaMixin, generics.CreateAPIView):
    pass


class PizzeriaRetrieveUpdateAPIView(PizzeriaMixin, generics.RetrieveUpdateAPIView):
    pass


class PizzeriaDestroyAPIView(PizzeriaMixin, generics.DestroyAPIView):
    pass

from django.contrib import admin

from .models import Pizzeria


@admin.register(Pizzeria)
class PizzeriaAdmin(admin.ModelAdmin):
    pass

from django.urls import path

from stores import views


app_name = 'stores'


urlpatterns = [
    path('', views.PizzeriaListAPIView.as_view(), name='pizzeria_list'),
    path('<int:pk>/', views.PizzeriaRetrieveAPIView.as_view(), name='pizzeria_detail'),
    path('create/', views.PizzeriaCreateAPIView.as_view(), name='pizzeria_create'),
    path('update/<int:pk>/', views.PizzeriaRetrieveUpdateAPIView.as_view(), name='pizzeria_update'),
    path('delete/<int:pk>/', views.PizzeriaDestroyAPIView.as_view(), name='pizzeria_delete'),
]

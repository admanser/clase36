from django.urls import path, include
from rest_framework.routers import DefaultRouter # Existen various routers pero por ahora utilizar Defaultrouters que es el mas facil de utilizar
from .views import ExpenseViewSet

router=DefaultRouter()
router.register('expense', ExpenseViewSet, basename="expense")

urlpatterns = [
    path('', include(router.urls)) # rutas generadas automaticamente
]
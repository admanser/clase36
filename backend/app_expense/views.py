from django.shortcuts import render

# Create your views here.

from django.shortcuts import render

# Create your views here.

from .models import Expense
from .serializer import ExpenseSerializer
from rest_framework import viewsets
#from rest_framework.permissions import IsAuthenticated

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset=Expense.objects.all()
    serializer_class=ExpenseSerializer 
   #permission_classes=[IsAuthenticated]
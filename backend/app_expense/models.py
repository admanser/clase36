from django.db import models

# Create your models here.

class Expense(models.Model):
    
    class Meta:
        db_table = 'expense_mysql'

    CATEGORY_CHOICES = [
        ('FOOD', 'Food'),
        ('TRANSPORT', 'Transport'),
        ('HEALTH', 'Health'),
        ('ENTERTAINMENT', 'Entertainment'),
        ('EDUCATION', 'Education'),
        ('SERVICES', 'Services'),
        ('GENERAL', 'General'),
        ('OTHER', 'Other'),
        # Agrega otras categorias que se necesiten
    ]

    CURRENCY_CHOICES = [
        ('USD', 'US Dollar'),
        ('EUR', 'Euro'),
        ('ARS', 'Argentine Peso'),
        # Agrega otras monedas que se necesiten
    ]

    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    expense_detail = models.CharField(max_length=100)
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    
    def __str__(self) -> str: # Magic Method
        return f"{self.expense_detail} - {self.amount} {self.currency}"
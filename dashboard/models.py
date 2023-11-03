from django.db import models
import datetime

class Produto(models.Model):
    nome = models. CharField(max_length=50)

    def __str__(self):
        return self.nome
    

class Vendedor(models.Model):
    nome = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nome
    

class Vendas(models.Model):
    nome_produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    vendedor = models.ForeignKey(Vendedor, on_delete=models.CASCADE)
    total = models.FloatField()
    data = models.DateTimeField(default=datetime.datetime.now())

    class Meta:
        verbose_name_plural = "Vendas"
        verbose_name = 'Venda'

    def __str__(self) -> str:
        return self.nome_produto.nome
        
    
    

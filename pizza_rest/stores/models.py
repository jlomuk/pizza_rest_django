from django.db import models
from django.core.validators import RegexValidator


class Pizzeria(models.Model):

    name = models.CharField(max_length=200, verbose_name='Название')
    street = models.CharField(max_length=400, verbose_name='Улица', blank=True)
    city = models.CharField(max_length=200, verbose_name='Город', blank=True)
    state = models.CharField(max_length=2, verbose_name='Штат', blank=True)
    zip_code = models.PositiveIntegerField(verbose_name='Индекс', blank=True, default=0)
    website = models.URLField(verbose_name='Сайт', blank=True)
    phone = models.CharField(
        verbose_name='Телефон',
        max_length=10,
        validators=[RegexValidator(regex=r'^\d{10}$')],
        blank=True 
    )
    description = models.TextField(verbose_name='Описание', blank=True)
    logo_image = models.ImageField(
        verbose_name='Логотип',
        upload_to='pizzariaImages',
        blank=True,
        default='pizzariaImages/pizzalogo.png'
    )
    email = models.EmailField(max_length=245, verbose_name='Почта', blank=True)
    active = models.BooleanField(verbose_name='Актуальность', default=True)

    class Meta:
        verbose_name = 'Пиццерия'
        verbose_name_plural = 'Пиццерии'

    def __str__(self):
        return f'{self.name} - {self.city}'

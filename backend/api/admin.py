from django.contrib import admin
from .models import ngo
# Register your models here.

@admin.register(ngo)
class ArticleModel(admin.ModelAdmin):
    list_display = ('title', 'description', 'owner', 'email', 'aim', 'coverimg', 'img1', 'img2', 'img3', 'username')
    list_filter = ('title', 'description')
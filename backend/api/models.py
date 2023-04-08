from django.contrib.auth.models import User
from django.db import models

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class ngo(models.Model):
    title = models.CharField(max_length=100)
    username = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, related_name="user")
    coverimg = models.ImageField(upload_to=upload_to, blank=True, null=True)
    img1 = models.CharField(max_length=1000, blank=True, null=True)
    img2 = models.CharField(max_length=1000, blank=True, null=True)
    img3 = models.CharField(max_length=1000, blank=True, null=True)
    description = models.TextField()
    aim = models.CharField(max_length=1000)
    email = models.EmailField(max_length=200)

    def __str__(self) :
        return self.title
	
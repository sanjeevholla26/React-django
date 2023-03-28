from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from api.views import CustomObtainAuthToken
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("api.urls")),
    path('auth/', CustomObtainAuthToken.as_view())
]


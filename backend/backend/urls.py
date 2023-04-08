from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from api.views import CustomObtainAuthToken
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("api.urls")),
    path('auth/', CustomObtainAuthToken.as_view())
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


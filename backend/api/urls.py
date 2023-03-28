from django.urls import include, path
from .views import ngoList, UserViewset 
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('ngo-list', ngoList, basename='ngo')
router.register('user', UserViewset)

urlpatterns = [
	path('', include(router.urls)),
]
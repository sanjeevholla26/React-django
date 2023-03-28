from django.shortcuts import render
from .models import ngo
from .serializer import ngoSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class ngoList(viewsets.ModelViewSet) :
	queryset = ngo.objects.all()
	serializer_class = ngoSerializer
	permission_classes = [IsAuthenticatedOrReadOnly]
	authentication_classes = (TokenAuthentication,)

class UserViewset (viewsets.ModelViewSet) :
	queryset = User.objects.all()
	serializer_class = UserSerializer

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})
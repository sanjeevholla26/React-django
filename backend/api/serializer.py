from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ngo
from rest_framework.authtoken.views import Token

class ngoSerializer (serializers.ModelSerializer) :
	class Meta :
		model = ngo
		fields = ['id', 'title', 'description', 'owner', 'email', 'aim', 'coverimg', 'img1', 'img2', 'img3', 'username']

class UserSerializer (serializers.ModelSerializer) :
    class Meta :
        model = User 
        fields = ['id' , 'username', 'password', 'email', 'first_name', 'last_name']

        extra_kwargs = {'password' : {
            'write_only' : True,
            'required' : True
        }}

    def create(self, validated_data) :
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user= user)
        return user
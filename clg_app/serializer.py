from rest_framework import serializers
from .models import *
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields ='__all__'
        
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields ='__all__'
        
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentEnroll
        fields ='__all__'
        

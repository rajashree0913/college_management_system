from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response
from .models import *
from .serializer import * 


# Create a generic view for Register model to handle both GET and POST
class RegisterView(generics.ListCreateAPIView):
    queryset = Register.objects.all()  
    serializer_class = RegisterSerializer

class LoginView(generics.ListCreateAPIView):
    queryset = Login.objects.all()  
    serializer_class = LoginSerializer
    
class StudentView(generics.ListCreateAPIView):
    queryset = StudentEnroll.objects.all() 
    serializer_class = StudentSerializer
    
class StudentDetailView(generics.RetrieveUpdateAPIView):
    queryset = StudentEnroll.objects.all()  # Query for all student objects
    serializer_class = StudentSerializer  # Use the student serializer
    lookup_field = 'id'
    
class StudentDeleteView(generics.DestroyAPIView):
    queryset = StudentEnroll.objects.all()  # Query for all student objects
    serializer_class = StudentSerializer  # Use the student serializer
    lookup_field = 'id'  # Specify that 'id' is used as the lookup field (instead of 'pk')

    def delete(self, request, *args, **kwargs):
            # First, get the student object
            student = self.get_object()  # This uses the 'id' field to look up the student
            student.delete()  # Delete the student from the database
            return Response(status=status.HTTP_204_NO_CONTENT)  # Return 204 No Content if deletion is successful


   
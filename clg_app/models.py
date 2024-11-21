from django.db import models

# Create your models here.
class Register(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    password=models.CharField(max_length=10)
    
class Login(models.Model):
    email=models.EmailField()
    password=models.CharField(max_length=10)
    
class StudentEnroll(models.Model):
    profile_pic = models.ImageField(upload_to='student_profiles/', null=True, blank=True)  # Profile picture
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()  # Date of birth
    gender = models.CharField(max_length=10)  # Gender
    blood_group = models.CharField(max_length=5)  # Blood group
    contact_number = models.CharField(max_length=15)  # Contact number
    address = models.TextField()  # Address
    subject = models.CharField(max_length=100)# Subjects the student is enrolled in
    faculty= models.CharField(max_length=100)
    
# Model for Faculty
class Faculty(models.Model):
    name = models.CharField(max_length=100) 
    email = models.EmailField()
    department = models.CharField(max_length=100)  
    subject = models.CharField(max_length=100)  

   
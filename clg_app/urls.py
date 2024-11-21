from django.urls import path
from .views import *

urlpatterns = [
    path('', RegisterView.as_view(),name="regview"),
    path('login/', LoginView.as_view(),name="Logview"),
    path('student/', StudentView.as_view(),name="stuview"),
    path('student/<int:id>/', StudentDetailView.as_view(), name='student_detail'), 
    path('student/delete/<int:id>/', StudentDeleteView.as_view(), name='student-delete'),
]


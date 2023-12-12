from django.shortcuts import render
from django.shortcuts import render, redirect
from django.conf import settings
from django.shortcuts import redirect, render,HttpResponse,HttpResponseRedirect
from django.views import View
from django.urls import reverse
from django.conf import settings
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
import base64
import string
from django.contrib.auth.hashers import check_password


class BusinessPermitApplication(View):

    def get(self,request):
        context = {}
        return render(request, 'business_permit_application.html', context)
    
    def post(self,request):
        return HttpResponseRedirect("/success")

class Success(View):

    def get(self,request):
        context = {}
        return render(request, 'Success.html', context)
      
        return HttpResponseRedirect("/#success_set")

def LandingPage(request):
    context = {}
    return render(request, 'landing-page.html', context)

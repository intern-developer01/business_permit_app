from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.LandingPage),
    path('business-permit', views.BusinessPermitApplication.as_view()),
    path('success', views.Success.as_view()),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
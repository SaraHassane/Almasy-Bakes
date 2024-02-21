from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("home", views.home, name="home"),
    path("recipes", views.recipes, name="recipes"),
    path("contactUs", views.contactUs, name="contactUs"),
    path("sharePhotos", views.sharePhotos, name="sharePhotos"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("profile/<int:user_id>", views.profile, name="profile"),
    path("sharePost", views.sharePost, name="sharePost"),
]
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages

from .models import User, Share


# Create your views here.
def index(request):
    return render(request, 'almasy/index.html')

def home(request):
    return render(request, 'almasy/home.html')

def profile(request, user_id):
    user = User.objects.get(pk=user_id)

    return render(request, "almasy/home.html", {
        "user_profile": user
    })

def recipes(request):
    return render(request, 'almasy/recipes.html')

def contactUs(request):
    return render(request, 'almasy/contactUs.html')

def sharePhotos(request):
    sharedPosts = Share.objects.all().order_by("id").reverse()
    return render(request, 'almasy/sharePhotos.html',{
        "sharedPosts": sharedPosts,
    })

def sharePost(request):
    if request.method == "POST":
        content = request.POST['content']
        user = User.objects.get(pk=request.user.id)
        post = Share(content=content, user=user)
        post.save()
        
        return HttpResponseRedirect(reverse(sharePhotos))

    return render(request, "sharePosts.html")

def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("home"))
        else:
           messages.error(request, 'Invalid username or password.')
    return render(request, "almasy/index.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            messages.error(request, 'Username is already taken.')
            return render(request, "almasy/index.html", {})
        
        login(request, user)
        return HttpResponseRedirect(reverse("home"))
    else:
        return render(request, "almasy/index.html")
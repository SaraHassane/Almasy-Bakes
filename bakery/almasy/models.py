from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class User(User):
    pass


class Share(models.Model):
    content = models.CharField(max_length=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="author")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Share {self.id} made by {self.user} on {self.date.strftime('%d %b %Y %H:%M:%S')}"



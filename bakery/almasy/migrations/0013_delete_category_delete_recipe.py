# Generated by Django 4.2.5 on 2023-12-19 18:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('almasy', '0012_recipe_category'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Recipe',
        ),
    ]

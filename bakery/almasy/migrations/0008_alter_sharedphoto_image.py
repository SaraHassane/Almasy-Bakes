# Generated by Django 4.2.5 on 2023-12-13 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('almasy', '0007_rename_sharedphotos_sharedphoto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sharedphoto',
            name='image',
            field=models.ImageField(upload_to='almasy/images'),
        ),
    ]
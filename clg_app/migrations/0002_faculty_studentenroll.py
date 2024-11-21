# Generated by Django 5.0.1 on 2024-11-19 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clg_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('department', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='StudentEnroll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='student_profiles/')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('gender', models.CharField(max_length=10)),
                ('blood_group', models.CharField(max_length=5)),
                ('contact_number', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('subject', models.CharField(max_length=100)),
                ('faculty', models.CharField(max_length=100)),
            ],
        ),
    ]

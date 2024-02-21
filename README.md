# Almasy-Bakes 
This website is a bakery recipes website where users can find some recipes, navigate to the social media platform of the website, contact the creator, and Login/Register to share their feedback and opinions with others. 

## Website files Explained in Details
My project is built using two Django modules, and my app is called almasy. JavaScript is used all over my website to give users an easy time navigating. My web application is also built to be fully mobile responsive and adapt to different devices.

#### Files and Directories
- CAPSTONE: is the folder that my project is in.
- bakery: is my main project directory and it contains my application along with other folders such as bakery (Django's version) and static.
- almsay: my application name.
    - templates/almasy: contains all the app HTMLs:
        - contactUs.html: is the page that has the information about us as well as the contact information.
        - home.html: is the page where the user is directed to when they log in to the website, and it has all the nav-bar pages linked in it for easy access.
        - index.html: is the main localhost page and it contains the login/register form at the very beginning and then has the same content as the home page.
        - recipes.html: is the page that contains all the recipes.
        - sharePhotos.html: is the page where, if users are logged in, they can share their posts. Although it is called sharePhotos, users can only post written content.
        - admin.py: registers Django models to be used in the application.
        - apps.py: has my AppConfig done by Django for my app.
        - models.py: contains the Models database.
        - urls.py: contains the application's URLs.
        - views.py: contains all the views of the application.

- bakery: is the default created by Django which contains asgi.py, settings.py, urls.py, and wsgi.py.

- static: has the files for CSS, images, and JS.
    - css: has the main CSS and other CSS for pages to be mobile responsive.
        - contactus.css (mobile responsive CSS for the contactus page)
        - home.css (mobile responsive CSS for the home page)
        - index.css (mobile responsive CSS for the index page)
        - main.css (has all the CSS for the whole website)
        - recipes.css (mobile responsive CSS for the recipes page)
        - sharephotos.css (mobile responsive CSS for the sharePhotos page)
    - images: has the logo images only. Any other image on my website is extracted from the URL that is specifically given.
        - logo.png
        - nobackgroundlogo.png
        - recipe.png
    - js: contains the JavaScript for all the functions needed around the website.
        - script.js

- manage.py: is the "Django's command-line utility for administrative tasks".

- db.sqlite3: Django's default database.

## Models

There are two models used for this application:
   - User - an extension of Django's AbstractUser class model.
   - Share - handles the feedback post of users section in the sharePhotos page and allows content, user, and date to be visible.

## How to run this project
- Install Python if not already done so.
- Install Django.
- Change directory to the location of the project then move to the step under:
    - Run command:
    python3 manage.py runserver

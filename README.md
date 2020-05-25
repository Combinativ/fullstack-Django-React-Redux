# Fullstack Django React Redux
 A full stack application framework built with Django as backend and React as a frontend(django app) with REST api callbacks that are managed with Redux.

---
##### Project framework built with:
   * Django 
   * Django Rest Framework
   * Django Rest Knox
   * Babel: core, loader, preset-env, preset-react
   * Webpack
   * React
   * Redux
   * Semantic-UI-React
  
#### Project root:
  Root will be refered to as the directory containing package.json,webpack.config.js,Pipfile,README

---

## Installation:
 0. Run *pipenv shell* from project root to start the python virtual environment.
 1. Run *npm install* from root of project directory.
 2. Run *npm run dev* to start **watchdog** and auto transpiling of the Javascript frontend.
 3. *cd ./fullstack_application/*
 4. Run *python manage.py migrate* to migrate models.
 5. Run *python manage.py runserver* to start python wsgi server.
---
## Project framework structure:
 * The main django app for the application is named as *fullstack_application* contained in the root of the project directory.
 * The django project fullstack_application directory has the following applications:
     * demo_user_content:
       The demo model for storing user content for basic REST api features.
     * frontend:
         React frontend framework core
     * fullstack_application:
         The main application of the project containing wsgi.py and settings.py.

 * fullstack_application/**demo_user_content**:
   * api.py: Contains the DRF viewset to implement REST features of the model demo_user_content.
   * serializers.py: Self explainatory basic serializer class for the model.
   * urls.py: contains the router register for the api endpoint **api/contents**.
 * fullstack_application/**frontend**:
   * /src: Contains the source(App.js) for frontend React component structure of the project.
  
   * /static: Instructions from webpack.config.js from root of the project framework will store compiled frontend project here. **Do not modify this if you donno wat u doin.**
   * /templates: Contains the index.html view template for the React project.Put additional CSS or JS(like *semantic-ui*,Bootstrap) here to take effect in the frontend.
 * fullstack_application/**fullstack_application**:
   * Django default main application of the project.This holds the wsgi.py, settings.py necessary for a complete Django project.


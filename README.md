# Fullstack Django React Redux

A full stack application framework built with Django as backend and React as a frontend(django app) with REST api callbacks that are managed with Redux.

---

##### Project framework built with:

- Django
- Django Rest Framework
- Django Rest Knox
- Babel: core, loader, preset-env, preset-react
- Webpack
- React
- Redux(fetch api)
- Semantic-UI-React

#### Project root:-

Root will be refered to as the directory containing package.json,webpack.config.js,Pipfile,README

---

## Installation:-

0. Run _pipenv shell_ from project root to start the python virtual environment.
1. Run _pip install -r requirements.txt_ to install python dependencies.
2. Run _npm install_ from root of project directory.
3. Run _npm run dev_ to start **watchdog** and auto transpiling of the Javascript frontend.
4. cd ./fullstack*application/*
5. Run _python manage.py migrate_ to migrate models.
6. Run _python manage.py runserver_ to start python wsgi server.

---

## Project framework structure:-

- The main django app for the application is named as _fullstack_application_ contained in the root of the project directory.
- The django project fullstack_application directory has the following applications:

  - demo_user_content:
    The demo model for storing user content for basic REST api features.
  - frontend:
    React frontend framework core
  - fullstack_application:
    The main application of the project containing wsgi.py and settings.py.

- fullstack_application/**demo_user_content**:
  - api.py: Contains the DRF viewset to implement REST features of the model demo_user_content.
  - serializers.py: Self explainatory basic serializer class for the model.
  - urls.py: contains the router register for the api endpoint **api/contents**.
- fullstack_application/**frontend**:

  - /src: Contains the source(App.js) for frontend React component structure of the project.

  - /static: Instructions from webpack.config.js from root of the project framework will store compiled frontend project here. **Do not modify this if you donno wat u doin.**
  - /templates: Contains the index.html view template for the React project.Put additional CSS or JS(like _semantic-ui_,Bootstrap) here to take effect in the frontend.

- fullstack_application/**fullstack_application**:
  - Django default main application of the project.This holds the wsgi.py, settings.py necessary for a complete Django project.

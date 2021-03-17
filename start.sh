#!/bin/bash
echo begin
python fullstack_application/manage.py create_db
python fullstack_application/manage.py migrate
python fullstack_application/manage.py create_admin_user
python fullstack_application/manage.py runserver 0.0.0.0:8800
exec "echo yolo"
exec "$@"
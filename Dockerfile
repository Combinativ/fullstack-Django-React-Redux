FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

COPY ./start.sh /code/           #  to copy the script
ENTRYPOINT ["/code/start.sh"]    #  add the script file as entrypoint

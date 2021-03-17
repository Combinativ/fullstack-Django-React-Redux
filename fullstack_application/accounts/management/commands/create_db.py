import sys
import logging
import pymysql as MySQLdb

from django.core.management.base import BaseCommand, CommandError
from django.conf import settings

rds_host = 'database-1.cluster-cak9okpx2umn.ap-south-1.rds.amazonaws.com'
db_name = 'testdb'
user_name = 'mqrvqtdjexndlj'
password = 'ZVt1op37FmP98uWdmnnK'
port = 3306

logger = logging.getLogger()
logger.setLevel(logging.INFO)


class Command(BaseCommand):
    help = 'Creates the initial database'

    def handle(self, *args, **options):
        print('Starting db creation')
        try:
            db = MySQLdb.connect(host=rds_host, user=user_name,
                                 password=password, db="mysql", connect_timeout=5)
            c = db.cursor()
            print("connected to db server")
            c.execute("""CREATE DATABASE pollsdb;""")
            c.execute(
                """GRANT ALL PRIVILEGES ON db_name.* TO 'polls_admin' IDENTIFIED BY 'pollsadmin';""")
            c.close()
            print("closed db connection")
        except:
            logger.error(
                "ERROR: Unexpected error: Could not connect to MySql instance.")
            sys.exit()
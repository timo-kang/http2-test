from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl
import sys
import datetime
from time import sleep


# context = ssl._create_unverified_context()
# result = urlopen("https://52.231.67.30:3000/f100", context=context)
data = 0


print(datetime.datetime.now(), '---------------------exp start-----------------------')
for i in range(10000):
        # context = ssl._create_unverified_context()
        # result = urlopen("http://52.231.67.30:3000/f100", context=context)
        result = urlopen("http://52.231.67.30:3000/f100")
        print(datetime.datetime.now(), '//', result, sys.getsizeof(result),result.read(), sys.getsizeof(result.read()))
        data += sys.getsizeof(result)
        print(datetime.datetime.now(), 'data_total', data)
        sleep(0.1)

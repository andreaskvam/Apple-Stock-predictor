import re
import json 
import csv
from io import StringIO
from bs4 import BeautifulSoup
import requests

url_financials = 'https://finance.yahoo.com/quote/{}/financials?p={}'

##Change Ticker Symbol to view diffrent stock bajs
stock = 'AAPL'

response = requests.get(url_financials.format(stock, stock))

soup = BeautifulSoup(response.text, 'html.parser')

pattern = re.compile(r'\s--\sData\s--\s')

script_data = soup.find('script', text=pattern).contents[0]

start = script_data.find('context')-2

json_data = json.loads(script_data[start:-12])

json_data['context']['dispatcher']['stores']['QuoteSummaryStore'].keys()

##print(json_data['context']['dispatcher']['stores']['QuoteSummaryStore'].keys())

annual_is = json_data['context']['dispatcher']['stores']['QuoteSummaryStore']['price']['regularMarketPreviousClose']

print("Regular Market Previous Close: " + str(annual_is['raw']))
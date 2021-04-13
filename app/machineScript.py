import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sys

dataset = pd.read_csv('AAPL.csv')

cols = ['Date', 'Close', 'Adj Close']
X = dataset.drop(cols, axis=1)
y = dataset.iloc[:,-3].values

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size= 0.2, random_state= 0)

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()

regressor.fit(X_train, y_train)

y_pred = regressor.predict(X_test)

np.set_printoptions(precision=2)
##print(np.concatenate((y_pred.reshape(len(y_pred),1),y_test.reshape(len(y_test),1)),1))


def scriptFeed(open_price, high_price, low_price, vol):
    est_value = (regressor.predict([[open_price, high_price, low_price, vol]]))
    return est_value

from sklearn.metrics import r2_score

print(scriptFeed(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4]))

sys.stdout.flush()


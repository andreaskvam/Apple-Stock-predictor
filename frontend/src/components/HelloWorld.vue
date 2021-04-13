<template>
<div>
  <div>
    <h1>Stock predictor powered by Machine Learning</h1>
  </div>

  <header>Our Regression Models:</header>
    
<div class="container">
  <div class="row">
    <div class="col-sm" id="column">
        <h3>Linear Regression</h3>
      <p>
      In statistics, linear regression is a linear approach to modelling the 
      relationship between a scalar response and one or more explanatory variables
      (also known as dependent and independent variables) Lorem ipsum dolor sit, amet 
      consectetur adipisicing elit. Esse incidunt accusamus impedit magnam quas nulla tenetur 
      numquam, deserunt natus et?
      </p>
      <img border="0" alt="LinReg" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Residuals_for_Linear_Regression_Fit.png" width="200" height="150">
    </div>


    <div class="col-sm" id="column">
       <h3>Multiple Linear Regression</h3>
      <p>
      Multiple linear regression (MLR), also known simply as multiple regression, 
      is a statistical technique that uses several explanatory variables to predict
      the outcome of a response variable. Multiple regression is an extension of linear
      (OLS) regression that uses just one explanatory variable. Lorem ipsum, dolor sit 
      amet consectetur adipisicing elit. 
      </p>
      <img border="0" alt="MLR" src="https://www.mathworks.com/help/examples/stats/win64/EstimateMultipleLinearRegressionCoefficientsExample_01.png" width="200" height="150">
    </div>

    <div class="col-sm" id="column">
      <h3>Support Vector Regression</h3>
      <p>
      In machine learning, support-vector machines (SVMs, also support-vector networks) 
      are supervised learning models with associated learning algorithms that analyze data
      for classification and regression analysis. Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Doloremque tenetur delectus ipsa nam odit amet doloribus. Nostrum, 
      eveniet cum. Consequuntur!
      </p>
      <img border="0" alt="SVR" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/SVM_margin.png/1024px-SVM_margin.png" width="200" height="150">
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h1{
  margin-top:30px;
  color:  #343a40;
}
header{
  margin-top: 50px;
  font-size: 30px;
  color:  #343a40;
}
p{
  size: 7px;
}

img{
  margin-top: 15px;
  background-color: rgb(255, 255, 255);
  transition: all .2s ease-in-out;
}
img:hover { 
  transform: scale(1.4); 
}

#column{
  margin-top: 15px;
  border-block-start-style: groove;
  border-block-end-style: groove;
}
#column:hover { 
  transform: scale(1.1);
  border-block-start-style: none;
  border-block-end-style: none; 
}

</style>
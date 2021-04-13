<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Apple Stock Predictor</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Mlr" class="nav-link">MLR</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Svr" class="nav-link">SVR</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Charts" class="nav-link">Statistics</router-link>
        </li>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8b8b8b;
  margin-top: 0px;
}

body {
  background-color: rgb(243, 243, 243)
}

.submit-form {
  max-width: 300px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
}
h3{
  font-size: 25px;
}

.btn-success, .btn-success:active, .btn-success:visited {
    background-color: darkblue !important;
}

.btn-success:hover {
  background-color: blue !important;
}


footer{
  text-align: center;
  background-color: #343a40;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: lightgray;
}
</style>

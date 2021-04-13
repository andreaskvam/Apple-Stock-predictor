<template>
<div>
  <br>
  <h3>Support Vector Regressor</h3>
  <div v-if="!submitted">

    <button v-if= "!showSpinner"  id="SvrPred" @click="getSvr" class="btn btn-success">Predict Stock</button>

     <button v-else class="btn btn-success" id="SvrPred" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
  </div>
  
  <div v-else>
    <h4>{{ predData2 }}</h4>
    <button class="btn btn-success" @click="resetSvr">Reset</button>
  </div>
</div>
</template>

<script>
import DataService from '../services/dataService'

export default {
  name: "Predict",
  data() {
    return {
      predData2: [],
      submitted: false,  
      showSpinner: false
    };
  },
  methods: {
    getSvr(){
      this.showSpinner = true
      DataService.getSvr().then(response => {
        console.log(response);
        this.predData2 = response.data;
        this.submitted = true;
      });
    },
    resetSvr(){
      this.showSpinner = false;
      this.submitted = false;
    }
  }
};

</script>

<style scoped>
h4{
  margin-top: 15px;
}
#SvrPred{
  margin-top:20px;
}

</style>
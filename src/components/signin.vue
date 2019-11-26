<template>
  <nav>
    <div class="jumbotron">
       <h1>Log in</h1>
        <p> </p>
        <input v-model = "data.username" placeholder="Userame">
        <p> </p>
        <input type="password" v-model = "data.password" placeholder="Password">
        <p> </p>
        <button class ="btn btn-primary btn-lg" @click.prevent="getSignals"> Sing Up</button>
        <p> </p>

      </div>

  </nav>
</template>


<script>
export default {
  name: "app",
  data() {
    return{
       data: {
          nombre:'',
          apaterno:'',
          email:''
      },
    };
  },
}
</script>
<style scoped>
 
   h1{
     color: #f3311a;
     font-size: 80 px;
     font-weight: bold;
   }
   h2{
     color: #02272c;
     font-size: 80 px;
     font-weight: bold;
   }
   nav{
     text-align: center;
     text-decoration-color: greenyellow;
   }
</style>
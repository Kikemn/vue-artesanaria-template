<template>
  <nav>
    <div class="jumbotron">
       <h1>Create New Account</h1>
        <h2> Please Enter your data info </h2>
        <p> </p>
        <input v-model = "data.username" placeholder="Usename">
        <p> </p>
        <input v-model = "data.nombre" placeholder="Name">
        <p> </p>
        <input  type="email" v-model = "data.email" placeholder="E-mail">
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
         username:'',
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
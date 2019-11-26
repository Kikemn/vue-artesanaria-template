<template>

  <nav>
    <div class="jumbotron">
        <img src="../components/123.jpg" width="200" height="200">
       <h1>Artesanaria</h1>
        <p> </p>
       
        <h2>¿Quienes somos?</h2>
            <input type="text" v-model = "data.password">
    <p></p>
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
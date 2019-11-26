<template>
  <div id="app">
    <nav class="main-nav">
      
      <div class="logo">artesanaria</div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
            <router-link tag="a" to="/main" class="scroll-suave">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/signup" class="scroll-suave">Sign up</router-link>
        </li>
        <li>
          <router-link tag="a" to="/signin" class="scroll-suave">Sign in</router-link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar
  }
};
</script>
<style>
html {
  height: 100%
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>

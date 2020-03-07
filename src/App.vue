<template>
  <div id="">
      <NavBar></NavBar>
    <div class="container my-2">
      <div class="row">
        <Inventory></Inventory>
        <Cart></Cart>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";

export default {
  name: 'App',
  components: {
      NavBar,
      Inventory,
      Cart
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

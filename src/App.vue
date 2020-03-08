<template>
  <div id="">
      <NavBar @search="search"></NavBar>
<!--    <div class="container my-2">-->
<!--      <div class="row">-->
        <Inventory @addNewItemToCart="addCartItem" :datas="products"></Inventory>
<!--        <Cart @removeFromCart="removeItemFromCart" :datas="cart"></Cart>-->
<!--        -->
<!--      </div>-->
<!--    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
// import Cart from "./components/Cart";
import data from './assets/data'

export default {
  name: 'App',
  components: {
      NavBar,
      Inventory,
      // Cart
  },
  data(){
    return{
      products:[],
      cart:[]
    }
  },
  mounted() {
    this.products = data

  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    removeItemFromCart(index){
      this.cart.splice(index, 1)
    },
    search(keyword){
      this.products = data.filter(item=>{
        return item.title.toLocaleLowerCase().indexOf(keyword.toLocaleString()) !== -1
      })
    }
  }

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

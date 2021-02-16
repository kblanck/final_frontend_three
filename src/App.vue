<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/glasses">Glasses</router-link>
      <router-link to="/locations">Store Locations</router-link>
      <span id="nav-command" v-on:click="showCart">
                    Cart ({{ cart.length }})
                </span>
    </div>
    <router-view />

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      cart: [],
    }
  },
  methods: {
    showCart() {
      let numberOfGlasses = this.cart.length
        if (numberOfGlasses === 0) {
                alert('Your cart is empty!')
        } else {
                alert(`You have ` + numberOfGlasses + ` pair(s) of glasses in your cart.`)
            }
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
}

#nav {
  width: 99%;
  height: 5px;
  text-align: right;
  background-color: rgb(236, 235, 235);
  margin: -1.5em -1em 1.5em -1em;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
  text-decoration: none;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

#nav a.router-link-exact-active {
  color: #ac3b3b;
}
</style>
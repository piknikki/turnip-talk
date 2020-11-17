<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="./assets/logo.png">
    </router-link>
    <h1 class="title is-1">Turnip Talk</h1>
    <p v-if="this.$route.name == 'Welcome'" class="subtitle is-4">Welcome! Lettuce talk veggies!</p>
    <span class="icon">
      <i class="fal fa-salad fa-2x"></i>
    </span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

p {
  font-family: 'Poppins', sans-serif;
}

.logo {
  width: 100px;
  border-radius: 15px;
}

.icon {
  color: #82C91D;
  margin: 0 0 20px;
}
</style>

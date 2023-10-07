<template>
  <header>
    <nav>
      <router-link to="/">EquipmentList</router-link> |
      <router-link to="/users">UserList</router-link> |
    </nav>
  </header>
  <router-view/>
  <footer>
    <h1>Здесь footer</h1>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>

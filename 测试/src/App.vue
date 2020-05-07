<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
body{
  background:#EEE;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    color: #2c3e50;
  }
}
.md {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}
</style>

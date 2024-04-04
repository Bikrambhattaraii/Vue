<template>
  <div>
    <nav>
      <ul>
        <li> <a href=""><router-link to="/">Home</router-link></a> </li>
        <li> <a href=""><router-link to="/about">About</router-link></a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style scoped>

nav ul{
  display: flex;
  justify-content: space-around;

}
li{
    list-style: none;
}
a{
    text-decoration: none;
}

</style>

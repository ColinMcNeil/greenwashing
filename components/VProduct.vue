<template>
<div class="container" :class="{hover: $store.state.hover}">
  <div class="containerI">
      <h1 class="title">{{title}}</h1>
      <img :src="img" :alt="title" @mouseover="$store.commit('hover', true)" @mouseleave="$store.commit('hover', false)"/>
      <div v-if="!$store.state.hover" class="beforeAfter before">
        <h3>Marketing</h3>
        {{before}}
      </div>
      <div v-else class="beforeAfter after">
        <h3>Truth</h3>
        {{after}}
      </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    before: {type: String, required: true},
    after: {type: String, required: true}
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_variables.scss';
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3em;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  * {
    transition: ease 0.2s all;
  }
}
.containerI {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: $green;
  flex-basis: 100%;
  padding-bottom: 1em;
  border-radius: 5px;
  max-height: 80vh;
  overflow: auto;
}
.title {
  flex-basis: 100%;
  height: 1em;
  text-align: center;
  text-transform: capitalize;
}
.beforeAfter {
  background-color: $yellow;
  flex-basis: 40%;
  min-width: 200px;
  padding: 1em;
  height: 300px;
}
img {
  height: 10%;
  max-height: 300px;
  max-width: 45%;
  margin-bottom: 1em;
}

.hover {
 * {
   color: yellow;
 }
  .beforeAfter{
    background-color: $brown;
    
  }
  .containerI {
    background-color: $dark-brown;
  }
}
</style>

<template>
  <div class="main" :class="{hover: $store.state.hover}">
    <button v-if="$store.state.pages.includes($route.name)" @click="previous" class="previous">[Previous]</button>
    <nuxt/>
    <button v-if="$store.state.pages.includes($route.name)" @click="next" class="next">[Next]</button>
  </div>
</template>
<script>
export default {
  methods: {
    next(){
      const pages = this.$store.state.pages
      const name = this.$route.name
      let index = pages.indexOf(name)
      if(index==pages.length-1) index = -1
      this.$router.replace('/'+pages[index+1])
    },
    previous(){
      const pages = this.$store.state.pages
      const name = this.$route.name
      let index = pages.indexOf(name)
      if(index==0) index = pages.length
      this.$router.replace('/'+pages[index-1])
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
@import '~/assets/sass/_variables.scss';
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  * {transition: ease 0.2s all}
}
.main {
  background-color: $light-green;
  position: fixed;
}
.main.hover {
  background-color: black;
}
button {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: $dark-green;
  color: white;
  padding: 10px;
  font-size: 2em;
  border-radius: 4px;
}
button:hover {
  background-color: $brown;
  cursor: pointer;
}
button.previous {
  top: 10px;
}
button.next {
  bottom: 10px;
}
.page-enter-active, .page-leave-active, .layout-enter-active .layout-leave-active {
  transition: all .2s;
}
.page-enter, .page-leave-active, .layout-enter, .layout-leave-active{
  transform: translateY(-150%);
}
</style>

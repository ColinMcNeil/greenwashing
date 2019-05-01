<template>
  <div class="container home">
    <div class='wave -one'></div>
    <div class='wave -two'></div>
    <div class='wave -three'></div>
    <h1>Greenwashing</h1>
    <h2>
      <nuxt-link to="data">Data</nuxt-link> 
      <a @click="next">Products</a>
      <nuxt-link to="terms">Terms</nuxt-link> 
    </h2>

  </div>
</template>
<script>
export default {
  methods:{
    next(){
      const pages = this.$store.state.pages
      const name = this.$route.name
      let index = pages.indexOf(name)
      if(index==pages.length-1) index = -1
      this.$router.replace('/'+pages[index+1])
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_variables.scss';

.wave {
  opacity: .4;
  position: absolute;
  z-index: 0;
  top: 3%;
  left: 50%;
  background: rgb(0, 117, 6);
  width: 100vh;
  height: 100vh;
  margin-left: -50vh;
  margin-top: -25vh;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
}
.wave.-three {
  animation: drift 5000ms infinite linear;
  background: rgb(55, 150, 60);
}
.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: .1;
  background: rgb(54, 211, 34);
}
@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}
.title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  line-height: 300px;
  text-align: center;
  transform: translate3d(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  letter-spacing: .4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, .1);
  text-indent: .3em;
}
.container.home {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  * {
    z-index: 5;
  }
  h1 {
    margin: 0;
    font-size: 5em;
    color: white;
  }
  h2 > * {
    transition: ease 0.2s all;
    padding: 0.5em;
    border-radius: 3px;
    text-decoration: none;
    color: rgb(253, 253, 253);
    margin: 0 1em;
    &:hover{
      background: $green;
      color: white;
      cursor: pointer;
    }
    &:first-child{
      
      &:hover {
        background: $brown;
        color: yellow;
      }
    }
  }
}
</style>

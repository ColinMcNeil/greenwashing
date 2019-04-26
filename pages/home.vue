<template>
  <div class="container home">
    <h1>Greenwashing</h1>
    <h2><nuxt-link to="data">View Data.</nuxt-link> <a @click="next">View Products.</a></h2>
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
$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 50px;
$bg-height: 50px;

/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}

@-webkit-keyframes bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
  .container.home {
    width: 100vw;
    height: 100vh;
    background: url($bg-url) repeat 0 0;
    -webkit-animation: bg-scrolling-reverse .92s infinite; /* Safari 4+ */
    -moz-animation:    bg-scrolling-reverse .92s infinite; /* Fx 5+ */
    -o-animation:      bg-scrolling-reverse .92s infinite; /* Opera 12+ */
    animation:         bg-scrolling-reverse .92s infinite; /* IE 10+ */
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function:    linear;
    -o-animation-timing-function:      linear;
    animation-timing-function:         linear;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 0;
      font-size: 5em;
      color: $dark-green;
    }
    h2 > * {
      transition: ease 0.2s all;
      padding: 0.5em;
      border-radius: 3px;
      text-decoration: none;
      color: black;
      &:hover{
        background: $green;
        color: white;
        cursor: pointer;
      }
      &:first-child{
        margin-right: 2em;
        &:hover {
          background: $brown;
          color: yellow;
        }
      }
    }
  }
  </style>

<template>
  <div class="term" :class="{hovered}">
    <div class="text" @mouseover="hovered = true" @mouseleave="hovered = false">
      <h2 v-show="!hovered">{{before}}</h2>
      <h3 v-show="hovered">{{after}}</h3>
      <h4 v-show="hovered">{{subtext}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    before: {required: true, type: String},
    after: {required: true, type: String},
    subtext: {required: false, type: String, default: ''}
  },
  data: ()=>({hovered:false})
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_variables.scss';
.term{
  padding: 1em;
  box-sizing: border-box;
}
.text {
  
  &:hover{
   h1, h2, h3, h4{
     color: yellow;
   }
 } 
}
.term.hovered {
  background-color: $dark-brown;
}

</style>

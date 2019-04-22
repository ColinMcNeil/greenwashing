<template>
  <div class="ice_melt">
    <v-product title="Organic Ice Melt" 
    before="Because rock-salt is so damaging to the environment, 
      an eco friendly solution must exist. Organic Melt Ice remover 
      is advertised as an environmentally safe and natural product 
      because it is derived from beet sugar." 
    after="Only 3% of this ice remover is sugar beet related. 
      The rest is rock salt similar to all non-organic alternatives. 
      Organic Melt claims that 3% is still 3% less rock salt being used." 
    :img="require('~/assets/ice_melt.jpg')"/>
  </div>
</template>
<script>
import VProduct from '~/components/VProduct'
export default {
  components: {
    VProduct
  }
}
</script>

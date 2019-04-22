<template>
  <div class="raid">
    <v-product title="Raid" 
    before="With an insecticide derived from the 
      chrysanthemum flower, Raid EarthBlends Multi-bug 
      Killer touts itself as an alternative insect control solution. 
      SC Johnson claims their products are safe and effective 
    when used properly." 
    after="The label of this product warns users to avoid 
      contact with skin and clothes. 
      Inhaling the mist of the product can be toxic. 
      The active ingredient is banned from use as a pesticide in 
      Canada due to harmful environmental impacts, but it is still being used as a pesticide." 
    :img="require('~/assets/raid.png')"/>
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

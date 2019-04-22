<template>
  <div class="natura">
    <v-product title="T-Fal Natura Cooking Pans" 
    before="T-Fal Natura is made of completely recycled material and 
      contains no Perfluorooctanoic acid (PFOA)." 
    after="Perfluorooctanoic acid (PFOA), also known as C8, 
      is a man-made chemical. It is used in the process of making Teflon 
      and similar chemicals. T-Fal admits to using it widely in the factories. 
      The label claims there is none in the product, 
      but is extremely misleading because it's main use is in manufacturing, 
      and the waste byproduct is what's causing problems." 
    :img="require('~/assets/natura.jpg')"/>
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

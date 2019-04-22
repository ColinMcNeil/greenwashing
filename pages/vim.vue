<template>
  <div class="vim">
    <v-product title="Vim PowerPro Naturals" 
    before="The green label claims 98% all-natural ingredients. This makes it appear
    very environmentally friendly." 
    after="Under laboratory testing, it was found that besides water, 
    1/4 of the product was petroleum-based chemicals.
    The word natural means nothing and is not regulated. Cleaning products are not
    required to post their ingredients in all countries." 
    :img="require('~/assets/vim_powerpro.jpg')"/>
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

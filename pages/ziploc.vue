<template>
  <div class="ziploc">
    <v-product title="Ziploc Evolve" 
    before="Ziploc evolve bags claim to be better for the 
      environment and made entirely from wind energy. " 
    after="While these bags do contain less plastic, 
      and SC Johnson does primarily use wind power, 
      their research indicates only 2% of these bags are actually 
      recycled. Curbside recycling pickup cannot process these. 
      They have to be delivered to local grocery stores or transfer stations, 
      which is infrequently used. The 2% that are recycled end up 
      being used in non-sustainable products like composite lumber." 
    :img="require('~/assets/ziploc.jpg')"/>
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

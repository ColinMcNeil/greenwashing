<template>
  <div class="dawn">
    <v-product title="dawn" 
    before="With pictures of adorable ducklings,
      Dawn heavily relies on oilspill cleanup to market these products.
      Dawn regularly donates soap and money to aid in rescue efforts for wildlife." 
    after="Triclosan, an antibacterial agent found in Dawn soap, 
      was recently declared officially toxic to aquatic life. 
      `As a result, widespread use of Triclosan and other antibacterial 
      compounds result in contamination of the nation’s waterways, with 
      Triclosan being the most prevalent contaminant not removed by 
      typical wastewater treatment plants.`" 
    :img="require('~/assets/dawn.png')"/>
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

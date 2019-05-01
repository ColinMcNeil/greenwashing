<template>
  <div class="container">
    <div class="terms">
      <h1>Terms</h1>
      <v-term-text 
      before="Greenwashing" 
      after="Is the way companies market eco-friendly 
      products that in practice affect the environment the same or worse."
      subtext="30% of our respondents believed it meant washing in an eco-friendly way"/>
      <v-term-text before="All Natural" 
      after="Is not regulated by the FDA. Anything can claim to be 
      'All Natural'"
      subtext="Only 20% of respondents knew there are no enforced definitions."/>
      <v-term-text before="Natural Products" 
      after="Are not necessarily better for the environment. 
      Check the labels before buying."
      subtext="60% of respondents believed all-natural products were better for the environment"/>
    </div>
    <div class="products">
      <h1>Examples of greenwashed products</h1>
    </div>
  </div>
</template>
<script>
import VTermText from '~/components/VTermText'
export default {
  components: {VTermText},
  data: ()=>({hovered:''}),
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_variables.scss';

.container{
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: 1.5em;
  * {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $light-green;
  }
  .products {
    top: 100vh;
    justify-content: flex-start;
  } 
}
</style>

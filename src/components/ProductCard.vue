<template>
  <div class="cardWrapper">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [ 'name', 'description' ]
}
</script>

<style lang="scss">
 .cardWrapper {
   color: unset;
   font-weight: normal;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 30px;
   background-color: white;
   width: 70vw;
   height: 45vh;
   border-radius: 7px;
   box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.3);
   margin: 15px;

   h3 {
     color: black;
   }

   p {
     text-align: justify;
   }
 }

  @media (min-width: 768px) {
    .cardWrapper {
      width: 50vw;
      height: unset;
      margin: 0 0 15px 0;
    }
  }
</style>
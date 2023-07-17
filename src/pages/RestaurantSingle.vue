<template>
  <div id="return">
    Retour à l'accueil
  </div>
  
  <p>{{ restaurant.name }}</p>
  <div>
    <img :src="restaurant.image" alt="">
  </div>
  <p> Temps de livraison : {{ restaurant.drive_time }}</p>
  <p> Note du restaurant : {{ restaurant.note }}</p>

</template>

<script>
import BDD from '../BDD'
import { useRoute } from 'vue-router';

export default {
    name: 'RestaurantSingle',
    setup(){
      const route = useRoute()
      const restaurant = BDD.find((restaurant)=>restaurant.name===route.params.name)
      return{
        restaurant
      }
  
    }
}
</script>

<style lang="scss" scoped>
#return{
  margin: 25px 45px;

  &:hover{
    font-weight: 600;
    font-size: 18px;
  }
}

</style>
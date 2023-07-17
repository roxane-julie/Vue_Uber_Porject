<template>
 <div class="restaurant--row">
    <h2 class="title">
        Nos Restaurants
    </h2>
    <div class="wrapper--card">
        <router-link class="restaurant--wrapper" v-for="(card, index) in three_restaurant" :key="index" :to="card.name">
    <RestaurantCard :info_restaurant="card"/>
        </router-link>
    </div>
 </div> 
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name:"RestaurantRow",
    components: {
        RestaurantCard,
    },
    props: {
        three_restaurant: Array
        
    }
}
</script>

<style lang="scss">
.restaurant--row{
    .title:{
        font-size: 2rem;
    }
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .restaurant--wrapper{
            width: 32%;
            text-decoration: none;
        }
    }
}
</style>
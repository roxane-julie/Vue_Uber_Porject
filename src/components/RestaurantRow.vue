<template>
 <div class="restaurant--row">
    <h2 class="title">
        Nos Restaurants
        <RestaurantCard/>
    </h2>
 </div> 
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name:"RestaurantRow",
    components: {
        RestaurantCard
    }
}
</script>

<style>

</style>
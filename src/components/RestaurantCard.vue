<template>
  <div class="restaurant--card">
    <div class="restaurant--image">

    </div>
    <div class="restaurant--information">
      <div class="top">
        <p class="name">
          Subway
        </p>
        <p class="note">
          <span>4.5</span>
        </p>
      </div>
      <p class="time">
        20-30mn
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:"RestaurantCard",
}
</script>

<style lang="scss">
.restaurant--card{
    width: 32%;
    height: 30vh;

    p{
        margin:0px;
    }
    .restaurant--image{
      background-image: url(https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==);
      height: 70%;
      background-size: cover;
      background-position: center;
    }
    .restaurant--information{
      margin: 10px 0px;
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
      }
      .note{
        background-color: #e2e2e2;        
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        border-radius: 50%;

      }
      .time{
        font-size: 0.9rem;
        margin-left: 10px;

      }
    }
}
</style>"
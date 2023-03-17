<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths">
      <section class="section title">
        <h1>{{ room?.title }}</h1>
      </section>

      <section class="section images">
        <div class="columns">
          <figure v-for="image in room?.images" class="column image room-image">
            <img :src="`../${image}`">
          </figure>
        </div>
      </section> 


      <section class="section description">
        <h3>Beschrijving</h3>
        <p>{{ room?.description }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()


defineProps({
  room: Object
})


</script>

<style scoped>

.room-image {
  max-width: 350px;
  height: auto;
}
</style>
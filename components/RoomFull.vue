<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths">
      <section class="section title">
        <h1>{{ room?.title }}</h1>
      </section>
      <section class="section description">
        <h3>Beschrijving</h3>
        <p>{{ room?.description }}</p>
      </section>

      <div class="carousel">
        <div>
          elem 1
        </div>
        <div>
          elem 1
        </div>
        <div>
          elem 1
        </div>
        <div>
          elem 1
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()


defineProps({
  room: Object
})


</script>
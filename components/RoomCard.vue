<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ room?.title }}
      </p>
    </div>
    <div class="card-image ">
      <figure class="image is-4by3">
        <img :src="room?.thumbnail">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        {{ room?.description }}
      </div>
    </div>
  </div>
</template>


<script setup="true" lang="ts">

const props = defineProps({
  room: Object,
});

</script>
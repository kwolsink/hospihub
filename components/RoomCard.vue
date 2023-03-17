<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ room?.title }}
      </p>
    </div>
    <div class="card-image ">
      <figure class="image is-4by3">
        <img :src="room?.images?.at(0)">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        {{ room?.description }}
      </div>
    </div>
    <footer class="card-footer">
      <NuxtLink class="card-footer-item" :to="`${route.fullPath}/${room?.id}`">Meer informatie</NuxtLink>
    </footer>
  </div>
</template>


<script setup="true" lang="ts">

const route = useRoute();

const props = defineProps({
  room: Object as PropType<Room>,
});

</script>
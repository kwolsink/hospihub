<template>
  <div>
    <p>
      Begin met het vinden van een kamer op HospiHub!
    </p>
    <div class="dropdown" :class="{'is-active': isDropDownActive}">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggleDropDown()">
          <span>Stad</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a v-for="city in cities" href="#" class="dropdown-item">
            {{ city }}
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            Anders
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const cities = ["Amsterdam", "Delft", "Rotterdam", "Utrecht"];

const isDropDownActive = ref(false);
const toggleDropDown = () => {isDropDownActive.value = !isDropDownActive.value}


</script>
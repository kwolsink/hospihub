<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          Home
        </NuxtLink>

        <NuxtLink to="/rooms" class="navbar-item">
          Zoek een kamer
        </NuxtLink>

        <NuxtLink to="/submit-room" class="navbar-item">
          Plaats een kamer
        </NuxtLink>

        <NuxtLink v-if="firebase?.currentUser" to="/" class="navbar-item has-text-info">
          Profiel
        </NuxtLink>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div v-if="!firebase?.currentUser" class="buttons-logged-out">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
            <div v-else class="buttons-logged-in">
              <a class="button is-light" @click="firebase?.signOut()">
                Log uit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup lang="ts">
const firebase = ref();

onMounted(async () => {
  firebase.value = useFireBase();
});

</script>
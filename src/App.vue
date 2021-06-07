<template>
  <component :is="layout" id="app" data-app class="fruit-app">
    <v-container>
      <router-view />
    </v-container>
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>

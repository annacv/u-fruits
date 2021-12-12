<template>
  <v-icon
    :color="color"
    :size="size"
    v-on="activator"
    class="d-flex align-self-center justify-center"
  >
    {{ iconName }}
  </v-icon>
</template>
<script>

export default {
  name: 'Icon',
  props: {
    activator: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  created () {
    if (!this.iconName) {
      console.error('[Vue warn]: Missing required prop iconName')
    }
  }
}
</script>

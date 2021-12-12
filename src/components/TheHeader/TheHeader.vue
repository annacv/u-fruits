<style lang="scss" scoped>
  @import './theHeader.scss';
</style>

<template>
  <v-app-bar dark :color="color" app height="80" elevation="1">
    <v-row no-gutters>
      <v-col cols="6" class="header-brand">
        <Icon
          iconName="mdi-fruit-grapes"
          size="large"
        />
        <h1 class="header-brand__heading">{{ brand }}</h1>
        <Icon
          iconName="mdi-fruit-watermelon"
          size="large"
        />
      </v-col>
      <v-col cols="6" class="header-brand__actions">
        <Button
          :aria-label="ariaLabel"
          :disabled="disabled"
          :iconName="iconName"
          :label="label"
          :outlined="outlined"
          :to="to"
          exact
          size="medium"
          type="button"
          @click="onClick()"
        />
      </v-col>
    </v-row>     
  </v-app-bar>
</template>

<script>
import Button from '@/components/Button/Button'
import Icon from '@/components/Icon/Icon'

export default {
  name: 'TheHeader',
  components: { Button, Icon },

  props: {
    ariaLabel: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
			default: 'ufruits',
		},
    color: {
      type: String,
      default: '#9576af'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: true
    },
    to: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    },
  }
}
</script>


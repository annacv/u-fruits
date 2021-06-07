<style lang="scss">
  @import './button.scss';
</style>

<template>
  <v-hover>
    <v-tooltip
      v-if="tooltip"
      slot-scope="{ hover }"
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn
          :aria-label="iconName ? ariaLabel : null"
          :disabled="disabled"
          :icon="iconName && !label ? true : false"
          :outlined="hover ? false : outlined"
          rounded
          :text="iconName && label ? true : false"
          :to="to"
          :type="type"
          :x-small="size === 'x-small'"
          :small="size === 'small'"
          :medium="size === 'medium'"
          :large="size === 'large'"
          :x-large="size === 'x-large'"
          v-on="on"
          @click="onClick()"
        >
          <slot name="default">
            <Icon
              v-if="iconName"
              :iconName="iconName"
              :size="size"
            />
            <span
              v-if="label"
              class="align-self-center"
            >
              {{ label }}
            </span>
          </slot>
        </v-btn>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <v-btn
      v-else
      slot-scope="{ hover }"
      :aria-label="iconName ? ariaLabel : null"
      :disabled="disabled"
      :outlined="hover ? false : outlined"
      rounded
      :text="iconName && label ? true : false"
      :to="to"
      :type="type"
      :x-small="size === 'x-small'"
      :small="size === 'small'"
      :medium="size === 'medium'"
      :large="size === 'large'"
      :x-large="size === 'x-large'"
      @click="onClick()"
    >
      <slot name="default">
        <Icon
          v-if="iconName"
          :iconName="iconName"
          :size="size"
        />
        <span
          v-if="label"
          class="align-self-center"
        >
          {{ label }}
        </span>
      </slot>
    </v-btn>
  </v-hover>
</template>

<script>
import Icon from '@/components/Icon/Icon'

export default {
  name: 'Button',
  components: { Icon },

  props: {
    ariaLabel: {
      type: String,
      default: ''
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
    size: {
      default: '',
      type: String,
      validator: (value) => {
        return ['x-small', 'small', 'medium', 'large', 'x-large', ''].indexOf(value) !== -1
      }
    },
    to: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

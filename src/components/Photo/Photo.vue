<template>
  <v-img
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :contain="contain"
    :gradient="gradient"
    :height="height"
    :lazy-src="lazySrc"
    :min-height="minHeight"
    :min-width="minWidth"
    :position="position"
    :size="size"
    :src="getSrc"
    :transition="transition"
    :width="width"
  >
    <slot
      slot="placeholder"
      name="placeholder"
    >
      <v-img
        :alt="alt"
        contain
        :src="!src ? getPlaceholder : src"
      />
    </slot>
  </v-img>
</template>

<script>
import { IMAGE_SIZES } from '@/config/foundationConfig'
import imagePlaceholder from '@/assets/images/image-placeholder.svg'

export default {
  name: 'Photo',
  props: {
    alt: {
      type: String,
      default: 'Fruit image'
    },
    aspectRatio: {
      type: [String, Number],
      default: '1/1'
    },
    contain: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center center'
    },
    size: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    transition: {
      type: [String, Boolean],
      default: 'fade-transition'
    }
  },
  computed: {
    getSrc () {
      return this.src ? this.src : this.getPlaceholder
    },
    getPlaceholder () {
      return imagePlaceholder
    },
    height () {
      if (this.size) {
        return IMAGE_SIZES[this.size].height
      } else {
        return IMAGE_SIZES.medium.height
      }
    },
    lazySrc () {
      return this.src ? this.getSrc : ''
    },
    minHeight () {
      if (this.size) {
        return IMAGE_SIZES[this.size].minHeight
      } else {
        return IMAGE_SIZES.medium.minHeight
      }
    },
    minWidth () {
      if (this.size) {
        return IMAGE_SIZES[this.size].minWidth
      } else {
        return IMAGE_SIZES.medium.minWidth
      }
    },
    width () {
      if (this.size) {
        return IMAGE_SIZES[this.size].width
      } else {
        return IMAGE_SIZES.medium.width
      }
    }
  }
}
</script>

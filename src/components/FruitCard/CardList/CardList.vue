<style lang="scss" scoped>
  @import './cardList.scss';
</style>

<template>
  <v-list
    v-if="items.length > 0"
    class="v-card__list"
  >
    <v-list-item
      v-for="item in items"
      :key="items[item]"
    >
      <v-list-item-icon v-if="item.icon">
        <Icon
          class="mr-1"
          :color="item.icon.color"
          :iconName="item.icon.name"
          :size="item.icon.size"
        />
      </v-list-item-icon>
      <v-list-item-content>
        <p
          class="v-list-item__text"
          v-text="item.text"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import Icon from '@/components/Icon/Icon'

export default {
  name: 'CardList',
  components: { Icon },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>



<style lang="scss" scoped>
  @import './fruitCard.scss';
</style>

<template>
  <v-card
    :alt="alt"
    :append="append"
    :class="`v-card--${size} pa-2`"
    :elevation="elevation"
    :exact="exact"
    :flat="flat"
    :height="height"
    :min-height="minHeight"
    :min-width="minWidth"
    :outlined="outlined"
    :size="size"
    :width="width"
  >
    <v-row no-gutters>
      <v-col
        :cols="cardCols.imageCol.cols"
        :sm="cardCols.imageCol.colSm"
        :md="cardCols.imageCol.colMd"
        :lg="cardCols.imageCol.colLg"
      >
        <Photo
          :alt="alt"
          :class="`v-card__image--${size}`"
          :size="size"
          :src="src"
        />
      </v-col>
      <v-col
        :cols="cardCols.infoCol.cols"
        :sm="cardCols.infoCol.colSm"
        :md="cardCols.infoCol.colMd"
        :lg="cardCols.infoCol.colLg"
      >
        <v-row no-gutters>
          <v-col
            :cols="cardCols.infoCol.fruitInfo.cols"
            :sm="cardCols.infoCol.fruitInfo.colSm"
            :lg="cardCols.infoCol.fruitInfo.colLg"
            :xl="cardCols.infoCol.fruitInfo.colXl"
            class="v-card__main-info"
          >
            <v-card-title
              v-if="title"
            >
              {{ title }}
            </v-card-title>
            <v-card-subtitle
              v-if="subtitle"
            >
              {{ subtitle }}
            </v-card-subtitle>
            <CardList :items="items"/>
          </v-col>
          <template v-if="ariaLabel">
            <v-col :cols="cardCols.infoCol.iconDelete">
              <Button
                :aria-label="ariaLabel"
                :iconName="iconName"
                :tooltip="ariaLabel"
                size="small"
                type="button"
                @click="deleteFruit()"
              />
            </v-col>
          </template>
        </v-row>
        <v-row no-gutters v-if="text">
          <v-col cols="12">
            <v-card-text  
              @click="browse()"
            >
              <router-link :to="to">
                {{ text }}
              </router-link>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Button from '@/components/Button/Button'
import CardList from '@/components/FruitCard/CardList/CardList.vue'
import Photo from '@/components/Photo/Photo.vue'

export default {
  name: 'CardSmall',
  components: { Button, CardList, Photo },

  props: {
    alt: {
      type: String,
      default: ''
    },
    ariaLabel: {
      type: String,
      default: ''
    },
    append: {
      type: Boolean,
      default: true
    },
    cardCols: {
      type: Object, 
      default: () => {}
    },
    elevation: {
      type: [Number, String],
      default: 0
    },
    exact: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    minHeight: {
      type: [Number, String],
      default: '98'
    },
    minWidth: {
      type: [Number, String],
      default: '280'
    },
    outlined: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: [ String, Number ],
      default: ''
    },
    title: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: ''
    },
    width: {
      type: [Number, String],
      default: ''
    }
  },

  computed: {
    ...mapGetters(['allFruits']),
    ...mapState({
      count: state => state.fruitCount
    })
  },

  methods: {
    browse () {
      this.$emit('browse')
    },
    deleteFruit() {
      this.$emit('deleteFruit')
    }
  }
}
</script>

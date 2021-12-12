<template>
  <FruitCard
    :alt="`${fruit.name} fruit image`"
    :class="`v-card--${fruit.color}`"
    :elevation="elevation"
    :cardCols="cardCols"
    :flat="flat"
    :id="fruit.id"
    :items="getItems()"
    :outlined="outlined"
    :size="size"
    :subtitle="fruit.description"
    :src="fruit.image"
    :title="fruit.name"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import FruitCard from '@/components/FruitCard/FruitCard'

export default {
  name: 'FruitDetail',
  components: { FruitCard },

  props: {
    elevation: {
      type: [Number, String],
      default: 0
    },
    flat: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large'
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    cardCols: {
			imageCol: {
				cols: '12',
				colSm: '5',
        colMd: '5',
        colLg: '4'
			},
			infoCol: {
				cols: '12',
				colSm: '7',
        colMd: '7',
        colLg: '8',
        fruitInfo: {
          cols:'12',
          colSm: '10',
          colLg: '7',
          colXl: '3'
        },
        iconDelete: '0'
			}
		}
  }),

  computed: {
    ...mapGetters(['fruit'])
	},

  methods: {
    getItems() {
			const fruit = Object.assign({}, this.fruit)
			const items = [
				{
					text: `Color code: ${fruit.color}`,
					icon: {
						color: fruit.color,
						name: 'mdi-palette',
						size: 'medium',
					},
				},
        {
					text: `Taste: ${fruit.taste}`,
					icon: {
						color: fruit.color,
						name: 'mdi-food-fork-drink',
						size: 'medium',
					},
				},
        {
					text: `Expires: ${this.getExpireDate(fruit.expires)}`,
					icon: {
						color: fruit.color,
						name: 'mdi-calendar-range',
						size: 'medium',
					},
				},
        {
					text: `Price: ${fruit.price} $`,
					icon: {
						color: fruit.color,
						name: 'mdi-cash',
						size: 'large',
					},
				},
			]
			return items
		},

    getExpireDate (date) {
      const expires = new Date(date)
      const formatted = expires.toLocaleDateString()
      return formatted
    }
  }
}
</script>

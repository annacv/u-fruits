<style lang="scss" scoped>
@import './fruitList.scss';
</style>

<template>
	<div class="fruit-list">
		<v-row no-gutters>
			<v-col cols="12">
				<h2 class="fruit-list__heading">{{ title }}</h2>
				<p class="fruit-list__subheading">{{ description }}</p>
			</v-col>
		</v-row>
		<v-row class="fruit-list__list">
			<v-col 
				v-for="(fruit, index) in allFruits"
				:key="index"
			>
				<v-hover
					v-slot:default="{ hover }"
				>
					<FruitCard
						:alt="`${fruit.name} fruit image`"
						:ariaLabel="cardButton.ariaLabel"
						:cardCols="cardCols"
						:elevation="hover ? 1 : elevation"
						:height="height"
            :iconName="cardButton.iconName"
						:id="fruit.id"
						:items="getItems(index)"
						:text="text"
						:title="fruit.name"
            :tooltip="cardButton.ariaLabel"
						:to="`/fruit/${fruit.name}`"
						:size="size"
						:src="fruit.image"
						:width="width"
						@browse="setCurrentFruit(fruit)"
						@deleteFruit="deleteFruit(fruit.id)"
					/>
				</v-hover>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import FruitCard from '@/components/FruitCard/FruitCard'

export default {
	name: 'FruitList',
	components: { FruitCard },

	props: {
		description: {
			type: String,
			default: 'If U love fruits, you\'ll be happy to have an awesome fruit list',
		},
		elevation: {
			type: [Number, String],
			default: 0
		},
		height: {
      type: [Number, String],
      default: '98'
    },
		size: {
      type: String,
      default: 'small'
    },
		text: {
			type: String,
			default: 'More info'
		},
		title: {
			type: String,
			default: 'Don\'t miss a fruit !',
		},
		width: {
      type: [Number, String],
      default: 'auto'
    }
	},

	data: () => ({
    cardButton: {
      ariaLabel: 'Delete fruit',
			color: 'primaryDarken1',
      iconName: 'mdi-trash-can-outline'
    },
		cardCols: {
			imageCol: {
				cols: '4',
				colSm: '0'
			},
			infoCol: {
				cols: '8',
				colSm: '0',
				fruitInfo: {
					cols: '9'
				},
				iconDelete: '1'
			}
		}
  }),

	computed: {
		...mapGetters(['allFruits']),
		...mapState({
			count: (state) => state.fruitCount,
			fruits: (state) => state.fruits
		})
	},

	mounted() {
		this.$store.dispatch('getFruits')
		this.$store.dispatch('getFruitCount')
	},

	methods: {
		getItems(index) {
			const fruit = Object.assign({}, this.fruits[index])
			const items = [
				{
					text: `${fruit.price} $`
				}
			]
			return items
		},

		async deleteFruit(fruitId) {
			await this.$store.dispatch('deleteFruit', fruitId)
			this.$store.dispatch('getFruits')
			this.$store.dispatch('getFruitCount')
		},

		setCurrentFruit(fruit) {
			this.$store.dispatch('getCurrentFruit', fruit)
		}
	}
}
</script>

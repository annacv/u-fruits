<template>
  <div>
    <TheHeader
      :ariaLabel="headerBtn.ariaLabel"
      :color="fruit.color"
      :label="headerBtn.label"
      :iconName="headerBtn.iconName"
      :outlined="headerBtn.outlined"
      :to="headerBtn.to"
    />
    <v-main>
      <slot/>
    </v-main>
    <TheFooter/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  name: 'Product',
  components: { TheHeader, TheFooter },

  data: () => ({
    headerBtn: {
      ariaLabel: 'Back to fruit list',
      iconName: 'mdi-arrow-left',
      label: 'Back to list',
      outlined: false,
      to: '/'
    }
  }),

  computed: {
		...mapGetters(['allFruits', 'fruit']),
    ...mapState({
			fruits: (state) => state.fruits
		})
	},

  mounted() {
    const allFruits = this.fruits
    allFruits.forEach((fruit) => {
      if (fruit.name === this.$route.params.id) {
        this.$store.dispatch('getCurrentFruit', fruit)
      }
    })
	}
}
</script>
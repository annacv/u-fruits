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
import { mapGetters } from 'vuex'
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
		...mapGetters(['allFruits', 'fruit'])
	},

  mounted() {
    const allFruits = this.allFruits
    allFruits.forEach((fruit) => {
      if (fruit.name === this.$route.params.id) {
        this.$store.dispatch('getCurrentFruit', fruit)
      }
    })
	}
}
</script>
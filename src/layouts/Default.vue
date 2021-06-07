<template>
  <div>
    <TheHeader
      :aria-label="headerBtn.ariaLabel"
      :disabled="disabled"
      :label="headerBtn.label"
      :outlined="headerBtn.outlined"
      @click="addFruit()"
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
  name: 'Default',
  components: { TheHeader, TheFooter },

  data: () => ({
    headerBtn: {
      ariaLabel: 'Add a random fruit',
      label: 'Add fruit',
      outlined: true
    }
  }),

  computed: {
		...mapGetters(['allFruits']),
		...mapState({
			count: (state) => state.fruitCount,
			fruits: (state) => state.fruits,
      disabled: (state) => state.disabled
		})
	},

  methods: {
    async addFruit() {
      await this.$store.dispatch('setNewFruit')
      this.$store.dispatch('getFruits')
      this.$store.dispatch('getFruitCount')
    }
  }
}
</script>
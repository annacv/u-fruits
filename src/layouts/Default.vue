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
import { mapState } from 'vuex'
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
		...mapState({
      disabled: (state) => state.disabled
		})
	},

  methods: {
    addFruit() {
      this.$store.dispatch('setNewFruit')
      this.$store.dispatch('getFruits')
      this.$store.dispatch('getFruitCount')
    }
  }
}
</script>
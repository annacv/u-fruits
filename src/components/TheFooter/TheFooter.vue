<style lang="scss" scoped>
  @import './theFooter.scss';
</style>

<template>
  <v-footer app dark :color="color" height="40">
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in credits"
        :key="index"
        :cols="item.cols"
        class="credits"
      >
        <Icon
          v-if="item.icon"
          class="credits__icon"
          :iconName="item.icon.iconName"
          :size="item.icon.size"
        />
        <a
          :aria-label="item.arialabel"
          :href="item.href"
          class="credits__link"
          rel="noopener nofollow"
          target="__blank"
          v-text="item.text"
        />
        <img
          v-if="item.footerBrand"
          :alt="item.footerBrand.alt"
          contain
          :src="item.footerBrand.src"
          height="24"
          width="auto"
          class="footer__brand"
        />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Icon from '@/components/Icon/Icon'
import footerBrand from '@/assets/images/acondal.svg'

export default {
  name: 'TheFooter',
  components: { Icon },

  props: {
    color: {
      type: String,
      default: '#2a2a2a'
    }
  },

  data: () => ({
    credits: [
      {
        ariaLabel: 'Link to npm package',
        cols: '1',
        href: 'https://www.npmjs.com/package/fruit-api',
        icon: {
          iconName: 'mdi-npm',
          size: 'x-large'
        },
        
        text: 'API Source'
      },
      {
        ariaLabel: 'Link to github repository page',
        cols: '10',
        href: '',
        icon: {
          iconName: 'mdi-github',
          size: 'large'
        },
        text: 'Source Code'
      },
      {
        ariaLabel: 'Link to linkedin profile page',
        cols: '1',
        href: 'https://www.linkedin.com/in/anna-condal-vela/',
        text: 'By',
        footerBrand: {
          alt: 'acondal',
          src: footerBrand
        }
      },
    ]
  })
}
</script>
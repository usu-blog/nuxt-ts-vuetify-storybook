import { storiesOf } from '@storybook/vue'
import Logo from '~/components/Logo'
import VuetifyLogo from '~/components/VuetifyLogo'

storiesOf('Samples', module)
  .add('Logo', () => ({
    components: { Logo },
    template: '<div class="mx-auto my-auto"><Logo /></div>'
  }))
  .add('VuetifyLogo', () => ({
    components: { VuetifyLogo },
    template: '<div class="mx-auto my-auto"><VuetifyLogo /></div>'
  }))

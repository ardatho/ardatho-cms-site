import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        aPrimary: {
          '50': '#fffee7',
          '100': '#fffec1',
          '200': '#fff886',
          '300': '#ffec41',
          '400': '#ffdb0d',
          '500': '#ffcc00',
          '600': '#d19500',
          '700': '#a66a02',
          '800': '#89530a',
          '900': '#74430f',
          '950': '#442304',
        },
        aSecondary: {
          '50': '#fff0f1',
          '100': '#ffdcdf',
          '200': '#ffbfc4',
          '300': '#ff939b',
          '400': '#ff5562',
          '500': '#ff2132',
          '600': '#ff0115',
          '700': '#d90011',
          '800': '#b3010f',
          '900': '#960914',
          '950': '#510006',
        }
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}

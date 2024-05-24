// https://nuxt.com/docs/api/configuration/nuxt-config
import globalConfig from './src/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  extends: [
    '@nuxt/ui-pro',
    '../cms_site_modules/modules/core',
  ],
  modules: [
    '@nuxt/ui',
    ['../cms_site_modules/modules/crud/src/', globalConfig.modules.crud]
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000',
        httpLinkOptions: {
          headers: {
            coucou: 'Hello',
          }
        }
      }
    },
  },
})

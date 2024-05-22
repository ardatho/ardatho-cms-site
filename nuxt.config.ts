// https://nuxt.com/docs/api/configuration/nuxt-config
import globalConfig from './src/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  extends: [
    '@nuxt/ui-pro',
    '../base_manager_site_modules/modules/core',
  ],
  modules: [
    '@nuxt/ui',
    ['../base_manager_site_modules/modules/crud/src/', globalConfig.modules.crud]
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000',
      }
    },
  },
})

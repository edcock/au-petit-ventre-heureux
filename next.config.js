require('dotenv').config()

module.exports = {
  env: {
    NEXT_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_CMS_DATOCMS_API_TOKEN,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
}

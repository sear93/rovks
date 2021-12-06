const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const prodUrl = "https://wp-dev.space/education/egor/develop/wp-json/api"
const devUrl = "http://education-egor.local/wp-json/api"

module.exports = {
    env: {
        API_URI: PHASE_DEVELOPMENT_SERVER ? devUrl : prodUrl,
        MONGO_URI: "mongodb+srv://egor:5901478900@cluster0.4wtxn.mongodb.net/ROVKS?retryWrites=true&w=majority"
    },
    images: {
        domains: ['wp-dev.space', 'education-egor.local'],
    },
    // i18n: {
    //     locales: ['en', 'fr', 'de', 'sv'],
    //     defaultLocale: 'en',
    //     localeDetection: false
    // },
}

const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER} = require('next/constants')

module.exports = (phase) => {
    return {
        env: {
            API_URI: "https://wp-dev.space/education/egor/develop/wp-json/api",
            MONGO_URI: "mongodb+srv://egor:5901478900@cluster0.4wtxn.mongodb.net/ROVKS?retryWrites=true&w=majority"
        },
        images: {
            domains: ['wp-dev.space', 'education-egor.local'],
        },
    }
    // i18n: {
    //     locales: ['en', 'fr', 'de', 'sv'],
    //     defaultLocale: 'en',
    //     localeDetection: false
    // },
}

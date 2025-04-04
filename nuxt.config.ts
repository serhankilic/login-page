// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Poppins: [300, 400, 500, 600, 700, 800],
                },
            },
        ],
        '@nuxt/icon',
    ],
})

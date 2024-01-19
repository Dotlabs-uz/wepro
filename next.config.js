/** @type {import('next').NextConfig} */
const nextConfig = {
   i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ["ru-RU", "uz"],
      // This is the default loale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: "ru-RU",
      // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
      domains: [
         {  
            domain: "example.com",
            defaultLocale: "ru-RU",
         },
         {
            domain: "example.uz",
            defaultLocale: "uz-UZ",
         },
         //  {
         //     domain: "example.fr",
         //     defaultLocale: "fr",
         //     // an optional http field can also be used to test
         //     // locale domains locally with http instead of https
         //     http: true,
         //  },
      ],
   },
};

module.exports = nextConfig;

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blogr.directory',
  integrations: [
    starlight({
      title: 'BlogR Directory',

      editLink: {
        baseUrl: 'https://github.com/WesTIChU/blogr.directory/edit/main/',
      },

      customCss: ['./src/styles/custom.css'],

      components: {
        SiteTitle: './src/components/Logo.astro',
        Footer: './src/components/Footer.astro', //

        // 👇 THIS replaces header icons and adds your link
        SocialIcons: './src/components/HeaderLinks.astro',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/WesTIChU/blogr.directory',
        },
      ],

      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'About', slug: 'about' },
            { label: 'Contribute', slug: 'contribute' },
          ],
        },
        {
          label: 'Blog Directory',
          items: [
            { label: 'Personal Writing', slug: 'blogs/personal-writing' },
            { label: 'Culture & Places', slug: 'blogs/culture-and-places' },
            { label: 'Travel', slug: 'blogs/travel' },
            { label: 'Tech & Development', slug: 'blogs/tech-blogs' },
            { label: 'Finance, Bitcoin & Crypto', slug: 'blogs/finance-bitcoin-crypto' },
          ],
        },
        {
          label: 'Communities',
          items: [
            { label: 'Forums', slug: 'communities/forums' },
            { label: 'Small Communities', slug: 'communities/small-communities' },
          ],
        },
        {
          label: 'Build Your Own Site',
          items: [
            { label: 'Blogging Platforms', slug: 'website-tools/blogging-platforms' },
            { label: 'Hosting', slug: 'website-tools/hosting' },
            { label: 'Self-Hosting', slug: 'website-tools/self-hosting' },
            { label: 'Self-Hosting Apps', slug: 'website-tools/self-hosting-apps' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
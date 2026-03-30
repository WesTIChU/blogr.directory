// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BlogR Directory',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
            {
                label: 'Getting started',
                items: [
					{ label: '🧠 About', slug: 'about' },
                ],
            },
            {
                label: 'Blog Directory',
                items: [
					{ label: '🧠 Personal Writing', slug: 'blogs/personal-writing' },
					{ label: '🌍 Culture & Places', slug: 'blogs/culture-and-places' },
					{ label: '✈️ Travel', slug: 'blogs/travel' },
					{ label: '💻 Tech & Development', slug: 'blogs/tech-blogs' },
					{ label: '💰 Finance, Bitcoin & Crypto', slug: 'blogs/finance-bitcoin-crypto' },
                ],
            },
                        {
                label: 'Communities',
                items: [
                    { label: 'Forums', slug: 'communties/forums' },
                    { label: 'Small Communities', slug: 'communties/small-communities' },
                ],
            },
                        {
                label: 'Website Tools & Hosting', 
                items: [
                    { label: '⚙️ Blogging Platforms', slug: 'website-tools/blogging-platforms' },
					{ label: '🌐️ Hosting Providers', slug: 'website-tools/hosting-providers' },
                ],
            },
			],
		}),
	],
});

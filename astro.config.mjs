// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
           { label: 'About', link: '/about' },
            {
                label: '📚 Blog Directory',
                items: [
					{ label: '🧠 Personal Writing', slug: 'blogs/personal-writing' },
					{ label: '🌍 Culture & Places', slug: 'blogs/culture-and-places' },
					{ label: '✈️ Travel', slug: 'blogs/travel' },
					{ label: '💻 Tech & Development', slug: 'blogs/tech-blogs' },
					{ label: '💰 Finance, Bitcoin & Crypto', slug: 'blogs/finance-bitcoin-crypto' },
                ],
            },
                        {
                label: '💬 Communities',
                items: [
                    { label: 'Forums', slug: 'communties/forums' },
                    { label: 'Niche Communities', slug: 'communties/niche-communities' },
                ],
            },
            {
                label: '📁 Archived',
                collapsed: true,
                items: [

                ],
            },
			],
		}),
	],
});

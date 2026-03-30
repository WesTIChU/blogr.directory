// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'BlogR Directory',
			customCss: ['./src/styles/custom.css'],
			components: {
				SiteTitle: './src/components/Logo.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/withastro/starlight',
				},
			],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: '🧠 About', slug: 'about' },
						{ label: '🧠 Contribute', slug: 'contribute' },
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
					label: 'Build Your Own Site',
					items: [
						{ label: '⚙️ Blogging Platforms', slug: 'website-tools/blogging-platforms' },
						{ label: '🌐️ Hosting', slug: 'website-tools/hosting' },
						{ label: '🌐️ Self-Hosting', slug: 'website-tools/self-hosting' },
						{ label: '🌐️ Self-Hosting Apps', slug: 'website-tools/self-hosting-apps' },
					],
				},
			],
		}),
	],
});
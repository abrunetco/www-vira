// Footer Navigation
// ------------

import { baseUrl } from "./config"

// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Foxi.',
		aboutText:
			'Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.',
		logo: {
			src: baseUrl + '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Foxi.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: baseUrl + '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: baseUrl + '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: baseUrl + '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: baseUrl + '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: baseUrl + '/terms'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: baseUrl + '/'
				},
				{
					subCategory: 'News',
					subCategoryLink: baseUrl + '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: baseUrl + '/blog'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: baseUrl + '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: baseUrl + '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: baseUrl + '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Foxi 2024.'
	}
}

// Config
// ------------
// Description: The configuration file for the website.

export const baseUrl = '/www-vira'

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit by Oxygenna',
	siteDescription:
		'Foxi is a design and development agency that specializes in creating beautiful and functional websites.',
	ogImage: baseUrl + '/og.jpg',
	logo: {
		src: baseUrl + '/vira-logo.png',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}

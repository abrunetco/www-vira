// Navigation Bar
// ------------

import { baseUrl } from "./config"

// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: baseUrl + '/vira-logo.png',
		alt: 'سیستم مدیریت مدارس',
		text: 'ویرا.'
	},
	navItems: [
		{ name: 'خانه', link: baseUrl + '/' },
		{ name: 'قیمت گذاری', link: baseUrl + '/pricing' },
		{ name: 'امکانات', link: baseUrl + '/features' },
		{
			name: 'منابع',
			link: baseUrl + '#',
			submenu: [
				{ name: 'بلاگ', link: baseUrl + '/blog' },
				{ name: 'مسیر و اهداف', link: baseUrl + '/roadmap' },
				{ name: 'بروزرسانی ها', link: baseUrl + '/changelog' },
				{ name: 'سوالات شما', link: baseUrl + '/faq' },
				{ name: 'قوانین و مقررات', link: baseUrl + '/terms' }
			]
		},
		{ name: 'تماس با ما', link: baseUrl + '/contact' }
	],
	navActions: [{ name: 'درخواست دمو', link: baseUrl + '/', style: 'primary', size: 'lg' }]
}

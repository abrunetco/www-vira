// Navigation Bar
// ------------
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
		src: '/logo.svg',
		alt: 'سیستم مدیریت مدارس',
		text: 'ویرا.'
	},
	navItems: [
		{ name: 'خانه', link: '/' },
		{ name: 'قیمت گذاری', link: '/pricing' },
		{ name: 'امکانات', link: '/features' },
		{
			name: 'منابع',
			link: '#',
			submenu: [
				{ name: 'بلاگ', link: '/blog' },
				{ name: 'مسیر و اهداف', link: '/roadmap' },
				{ name: 'بروزرسانی ها', link: '/changelog' },
				{ name: 'سوالات شما', link: '/faq' },
				{ name: 'قوانین و مقررات', link: '/terms' }
			]
		},
		{ name: 'تماس با ما', link: '/contact' }
	],
	navActions: [{ name: 'درخواست دمو', link: '/', style: 'primary', size: 'lg' }]
}

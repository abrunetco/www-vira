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
		title: 'ویرا.',
		aboutText:
			'سیستم یکپارچه مدیریت مدارس با رویکرد هوشمند سازی آموزش و افزایش بهره وری مدارس و یادگیری دانش آموزان',
		logo: {
			src: baseUrl + '/logo.svg',
			alt: 'پلتفرم مدیریت مدارس',
			text: 'ویرا.'
		}
	},
	footerColumns: [
		{
			category: 'خدمات',
			subCategories: [
				{
					subCategory: 'امکانات',
					subCategoryLink: baseUrl + '/features'
				},
				{
					subCategory: 'سوالات شما',
					subCategoryLink: baseUrl + '/faq'
				},
				{
					subCategory: 'قیمت',
					subCategoryLink: baseUrl + '/pricing'
				},
				{
					subCategory: 'نقشه راه',
					subCategoryLink: baseUrl + '/changelog'
				},
				{
					subCategory: 'مقررات',
					subCategoryLink: baseUrl + '/terms'
				}
			]
		},
		{
			category: 'شرکت ویرا',
			subCategories: [
				{
					subCategory: 'درباه ما',
					subCategoryLink: baseUrl + '/'
				},
				{
					subCategory: 'تازه ها',
					subCategoryLink: baseUrl + '/blog'
				},
				{
					subCategory: 'تیم فنی',
					subCategoryLink: baseUrl + '/blog'
				}
			]
		},
		{
			category: 'ارتباط',
			subCategories: [
				{
					subCategory: 'تماس با ما',
					subCategoryLink: baseUrl + '/contact'
				},
				{
					subCategory: 'پشتیبانی',
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
		copywriteText: '© ویرا ۱۳۰۴.'
	}
}

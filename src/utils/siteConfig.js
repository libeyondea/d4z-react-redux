module.exports = {
	siteUrl: `http://localhost:3000`, // Site domain. Do not include a trailing slash!

	postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

	siteTitleMeta: `Ghost Gatsby Starter`, // This allows an alternative site title for meta data for pages.
	siteDescriptionMeta: `A starter template to build amazing static websites with Ghost and Gatsby`, // This allows an alternative site description for meta data for pages.

	shareImageWidth: 1000, // Change to the width of your default share image
	shareImageHeight: 523, // Change to the height of your default share image

	shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
	siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
	backgroundColor: `#e9e9e9`, // Used for Offline Manifest
	themeColor: `#15171A`, // Used for Offline Manifest

	layoutWebsite: {
		title: 'De4th Zone',
		description: 'De4th Zone',
		logo: '/images/logo.png',
		icon: 'https://gatsby.ghost.io/content/images/2019/01/favicon.png',
		cover_image: '/images/react.jpgg',
		facebook: 'd4z.d4z.d4z.d4z',
		twitter: '@NHT_445448',
		lang: 'en',
		navigation: [
			{
				label: 'Home',
				url: '/'
			},
			{
				label: 'Tags',
				url: '/tags'
			},
			{
				label: 'Users',
				url: '/users'
			},
			{
				label: 'Help',
				url: 'https://www.facebook.com/d4z.d4z.d4z.d4z'
			}
		]
	}
};

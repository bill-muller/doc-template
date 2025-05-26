
/** @type {import('@docusaurus/types').Config} */
const config = {
	noIndex: false,
	title: 'Project Name Docs',
	tagline: 'Project Name  Docs',

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
    onBrokenAnchors: 'warn',
	favicon: 'img/favicon.ico',

	trailingSlash: false,

	url: 'https://bill-muller.github.io',
  	baseUrl: '/doc-template/',

	projectName: 'doc-template',
	organizationName: 'bill-muller',

	
	
	stylesheets: [
		{ href:'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css' },
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				},
				sitemap: {
					changefreq: 'daily',
					priority: 0.5
				}
			})
		]
	],
	plugins: [
		'docusaurus-plugin-sass',
		/*
		[
			path.resolve(__dirname, './plugins/dhx-md-data-transformer-plugin'),
			{
				//onBraceNotationMatch,
				//onAtNotationMatch,
				//onAtNotationFunctionMatch,
				//onEmptyLinkMatch,
				//onAfterDataTransformation
			}
			
		]
		*/
	],
  	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	({
		navbar: {
			title: 'Документація',
			logo: {
				alt: 'Project Logo',
				src: 'img/logo.svg',
				href: '/'
			},
			items: [
				/*
				{
					"label": "Examples",
					"href": "https://snippet.dhtmlx.com/5hcx01h4?tag=kanban",
					"position": "right"
				},
				{
					"label": "Forum",
					"href": "https://forum.dhtmlx.com/c/kanban/",
					"position": "right"
				},
				{
					"label": "Support",
					"href": "https://dhtmlx.com/docs/technical-support.shtml",
					"position": "right"
				},
				{
					"label": "Download",
					"href": "https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml",
					"position": "right"
				}
				*/
			],
		},
	  	footer: {
			"style": "dark",
			"links": [
				/*
				{
					"title": "Development center",
					"items": [
						{
							"label": "Download JS Kanban",
							"href": "https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml",
							"position": "right"
						},
						{
							"label": "Examples",
							"href": "https://snippet.dhtmlx.com/5hcx01h4?tag=kanban",
							"position": "right"
						},
						{
							"label": "Blog",
							"href": "https://dhtmlx.com/blog/tag/kanban/"
						},
						{
							"label": "Forum",
							"href": "https://forum.dhtmlx.com/c/kanban/",
							"position": "right"
						}
					]
				},
				{
					"title": "Community",
					"items": [
						{
							"label": "GitHub",
							"href": "https://github.com/DHTMLX"
						},
						{
							"label": "Youtube",
							"href": "https://www.youtube.com/user/dhtmlx"
						},
						{
							"label": "Facebook",
							"href": "https://www.facebook.com/dhtmlx"
						},
						{
							"label": "Twitter",
							"href": "https://twitter.com/dhtmlx"
						},
						{
							"label": "Linkedin",
							"href": "https://www.linkedin.com/groups/3345009/"
						}
					]
				},
				{
					"title": "Company",
					"items": [
						{
							"label": "About us",
							"href": "https://dhtmlx.com/docs/company.shtml"
						},
						{
							"label": "Contact us",
							"href": "https://dhtmlx.com/docs/contact.shtml"
						},
						{
							"label": "Licensing",
							"href": "https://dhtmlx.com/docs/products/dhtmlxKanban/#licensing"
						}
					]
				}
				*/
			]
	  	},
		prism: {
			//theme: lightCodeTheme,
			//darkTheme: darkCodeTheme,
		},
		/*
		algolia: {
			// This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
			// free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
			appId: '0O8M0T0DUJ',
			apiKey: '541438887f3386a7cdb48fb77176a184',
			indexName: 'kanban',

			// Optional: see doc section bellow
			contextualSearch: true,

			// Optional: Algolia search parameters
			searchParameters: {}

			//... other Algolia params
		}
		*/
	})
};

module.exports = config;

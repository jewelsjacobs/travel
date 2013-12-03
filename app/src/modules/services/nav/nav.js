/**
@todo
- modularize out the site-specific stuff into a separate config file?

NOTE: there is both generic and site specific code in here - search for 'site-specific' to see and update/remove site specific stuff

Sets up the header and footer navigation buttons / displays.
Each button generally has the following properties (but check the corresponding HTML template for a full reference)
	- `html` of the content to display, i.e. "Title Here" or "<span class='fa fa-bell'></span>" or "&nbsp;"
	- either an `href` or `click`. For the `click`, it's generally a $rootScope.$broadcast that can be listened for in the appropriate controller for that page.
	- `classes` which is an object that has style classes to apply for different parts of the nav item (i.e. `cont` is usually the class for the outer-most container)
		- use classes.cont ='hidden' as a special class to HIDE (display:none) the entire header and/or footer
	
@example
buttons: [
	{
		html: "<span class='fa fa-bell'></span>",
		href: this.paths.appPathLink+'notifications',
		id: 'notifications'
	},
	{
		html: "<span class='icon-calendar-17-dark'></span>",
		click: function() { $rootScope.$broadcast('NavEventChangePage', {page:'event1'}); },
	},
	{
		html: "<span class='icon-tribe'></span>",
		href: this.paths.appPathLink+'tribes'
	}
]

@module nav
@class nav

@toc
1. init
2. initPaths
3. initComponents
4. initPages		//site-specific
5. updateNav
6. getNav
9. setNav
7. getPageFromRoute
8. historyBack

*/

'use strict';

angular.module('app').
factory('appNav', ['$rootScope', '$location', 'appConfig', 'jrgArray', function($rootScope, $location, appConfig, jrgArray) {
var inst ={

	inited: false,		//trigger that will be set after this first time this is run
	initTrigs: {
		routeChange: false		//used to skip the first time so don't go back out of the app on history.back
	},
	pathRoot: 'modules/services/nav/',		//appConfig.dirPaths.staticPath will be prepended
	paths: {},		//holds file paths for various things, specifically templates (HTML template files) and appPathLink. See initPaths function for more info.
	
	historyCounter: 0,		//will increment on each route change (so can avoid going "back" outside of app)
	
	components :{},		//will hold parts of pages for use later

	pages :{},		//will hold all the navigation page objects for defining the nav (header and footer)

	/**
	@property curPage Will hold the current navigation object/page
	@type Object
	*/
	curPage: false,
	/**
	@property curPageKey Will hold the key for the the current navigation/page (i.e. 'login')
	@type String
	*/
	curPageKey: false,
	
	/**
	For all the pages where the url route is not the same as the pages key
	@property pagesRouteMap Key-pairs where the key corresponds to this.pages array keys and the value corresponds to the url page to match. i.e. {'login': 'login-url'}
	@type Object
	@example
		eventviewinfo:{
			url: 'eventview',		//the sanitized version of the url (i.e. no hypens)
			params: {
				page: 'info'
			}
		},
		//will match things like 'test/898' or 'test/yes/no' in case passing in :id or other sub-page parameters in the URL (but NOT in GET query params)
		test:{
			urlRegex: 'test\/'		//the sanitized version of the url (i.e. no hypens)
		},
	*/
	pagesRouteMap: {
	},
	
	/**
	@toc 1.
	@method init
	*/
	init: function(params) {
		if(!this.inited) {		//only init once
			var self =this;
			this.initPaths(params);
			this.initComponents({});
			this.initPages(params);
			
			this.inited =true;		//set for next time
		}
	},
	
	/**
	@toc 2.
	@method initPaths
	*/
	initPaths: function(params) {
		this.pathRoot =appConfig.dirPaths.staticPath+this.pathRoot;		//prepend static path to account for different environments / configs and ensure this always references the correct path
		this.paths.templates = {
			headerCentered: this.pathRoot+'header-centered/header-centered.html',
			footerFlex: this.pathRoot+'footer-flex/footer-flex.html'
		};
		this.paths.appPathLink =appConfig.dirPaths.appPathLink;
	},
	
	/**
	@toc 3.
	@method initComponents
	*/
	initComponents: function(params) {
		var self =this;
		this.components.backButton ={
			html: "<span class='fa fa-arrow-left'></span>",
			click: function() {self.historyBack({}); }
		};
		
		this.components.footerMain ={
			template: self.paths.templates.footerFlex,
			classes: {
				cont: ''
			},
			buttons: [
				{
					html: "<span class='fa fa-unlock'></span>",
					href: this.paths.appPathLink+'password-reset'
				},
				{
					html: "Design",
					href: this.paths.appPathLink+'design'
				},
				{
					html: "Test",
					href: this.paths.appPathLink+'test'
				}
			]
		};
		//hardcoded array indices for use to change these buttons later
		this.components.footerMainIndices ={
		};
		
		this.components.headerCentered ={
			template: self.paths.templates.headerCentered,
			title: {
				html: 'Travel'
			},
			buttons: {
				left: [
					this.components.backButton,
					{
						html: "Test",
						href: this.paths.appPathLink+'test'
					}
				],
				right: [
					{
						html: "<span class='fa fa-sign-in'></span>",
						href: this.paths.appPathLink+'login'
					},
					{
						html: "<span class='fa fa-sign-out'></span>",
						href: this.paths.appPathLink+'logout'
					}
				]
			}
		};
		
		this.components.defaultNav ={
			header: this.components.headerCentered,
			footer: this.components.footerMain
		};
	},
	
	/**
	NOTE: need to COPY / deep clone the components otherwise they'll overwrite backwards (copying arrays/objects by reference instead of by value)
	@toc 4.
	@method initPages
	*/
	initPages: function(params) {
		var self =this;
		
		this.pages.defaultPage =jrgArray.copy(this.components.defaultNav);			//in case missed a page, show default nav
		
		//site-specific
		//CUSTOM nav definitions
		//login
		this.pages.login ={
			header: {
				template: self.paths.templates.headerCentered,
				title: {
					html: '&nbsp;'
				},
				buttons: {
					left: [
						{
							html: "&nbsp;"
						}
					],
					right: [
						{
							html: "&nbsp;"
						}
					]
				}
			},
			footer: {
				template: self.paths.templates.footerFlex,
				buttons: [
					{
						html: "&nbsp;"
					}
				]
			}
		};
		
		//signup
		this.pages.signup ={
			header: {
				template: self.paths.templates.headerCentered,
				title: {
					html: '&nbsp;'
				},
				buttons: {
					left: [
						{
							html: "&nbsp;"
						}
					],
					right: [
						{
							html: "&nbsp;"
						}
					]
				}
			},
			footer: {
				template: self.paths.templates.footerFlex,
				buttons: [
					{
						html: "&nbsp;"
					}
				]
			}
		};
		
		
		//test
		this.pages.test =jrgArray.copy(this.components.defaultNav);
		// this.pages.test.header.classes ={
			// cont: 'hidden'
		// };
		// this.pages.test.footer.classes ={
			// cont: 'hidden'
		// };
		
		//end: CUSTOM nav definitions
	},
	
	/**
	@toc 5.
	@method updateNav
	@param {Object} params
		@param {Object} urlInfo Holds parsed URL info
			@param {String} page i.e. 'login'
			@param {String} queryParams i.e. 'yes=1&no=2'
			@param {Object} queryParamsObj Object of parsed URL GET query params (i.e. {yes:'1', no:'2'})
			@param {String} pageToUse The actual nav page key - this will skip any url checks and just use this given page. This MUST exactly match a this.pages nav item (i.e. 'eventviewinfo')!
	@return {String} unique identifier for this page
	*/
	updateNav: function(params) {
		var self =this;
		var curPage;
		if(params.pageToUse) {
			curPage =params.pageToUse;
		}
		else {
			// console.log(params.urlInfo);
			curPage =this.getPageFromRoute(params.urlInfo.page, {queryParamsObj: params.urlInfo.queryParamsObj});
		}
		// console.log('updateNav: curPage: '+curPage);
		this.curPageKey =curPage;		//save
		this.curPage =this.pages[curPage];		//save
		
		this.broadcastNavUpdates({});
		this.updateRouteChangeCounter({});
		
		//return a unique identifier for this page/view/nav (that takes into account the URL/query params)
		var pageToReturn =curPage;
		if(curPage =='defaultPage') {		//if no nav defined for this page/URL params combination, just use the page (without query params)
			pageToReturn =params.urlInfo.page;
		}
		return pageToReturn;
	},
	
	/**
	*/
	broadcastNavUpdates: function(params) {
		$rootScope.$broadcast('appNavHeaderUpdate', {nav: this.curPage});		//update header
		$rootScope.$broadcast('appNavFooterUpdate', {nav: this.curPage});		//update footer
		var layoutClass ='layout-'+this.curPageKey;
		$rootScope.$broadcast('changeLayoutEvt', layoutClass);		//update content class
	},
	
	/**
	*/
	updateRouteChangeCounter: function(params) {
		if(this.initTrigs.routeChange) {		//if already inited (not the FIRST one)
			this.historyCounter++;		//increment on each page change
		}
		else {
			this.initTrigs.routeChange =true;		//set for next time
		}
	},
	
	/**
	*/
	extendNav: function(newNavParts, params) {
		this.curPage =angular.extend(this.curPage, newNavParts);
		this.broadcastNavUpdates({});
		this.updateRouteChangeCounter({});
	},
	
	/**
	@toc 6.
	@method getNav
	*/
	getNav: function(params) {
		return jrgArray.copy(this.curPage, {});		//must return COPY otherwise changes will overwrite objects here!
	},
	
	/**
	@toc 6.5.
	@method setNav
	*/
	setNav: function(newPage, params) {
		this.curPage =newPage;
		this.broadcastNavUpdates({});
		this.updateRouteChangeCounter({});
	},
	
	/**
	@toc 7.
	@method getPageFromRoute
	@param {String} urlPage i.e. 'login' or 'tribe-members'
	@param {Object} [params]
		@param {Object} queryParamsObj Object of parsed URL GET query params (i.e. {page:'yes'}) to check against in ADDITION to checking the url
	*/
	getPageFromRoute: function(urlPage, params) {
		var page =false;
		var regex;
		if(params.queryParamsObj ===undefined) {
			params.queryParamsObj ={};
		}
		var urlPageSanitized =urlPage.replace(/[-_]/g, '').toLowerCase();		//remove special characters (dashes and underscores) in route for matching
		if(this.pages[urlPage] !==undefined || this.pages[urlPageSanitized] !==undefined) {		//check keys directly
			// page =urlPage;
			page =urlPageSanitized;
		}
		if(!page) {		//check map
			var xx, qq, matchAll;
			for(xx in this.pagesRouteMap) {
				if(this.pagesRouteMap[xx].urlRegex !==undefined) {		//regex match
					regex = new RegExp(this.pagesRouteMap[xx].urlRegex, '');
					if(urlPageSanitized.match(regex)) {
						page =xx;
					}
				}
				if(!page && this.pagesRouteMap[xx].url ==urlPageSanitized) {		//match
					//check url params too
					if(this.pagesRouteMap[xx].params !==undefined) {
						matchAll =true;
						for(qq in this.pagesRouteMap[xx].params) {
							if(params.queryParamsObj[qq] ===undefined || params.queryParamsObj[qq] !==this.pagesRouteMap[xx].params[qq]) {
								matchAll =false;
								break;
							}
						}
						if(matchAll) {
							page =xx;
							break;
						}
					}
					else {		//no params to check
						page =xx;
						break;
					}
				}
			}
		}
		if(!page) {		//fail safe - use default nav page
			page ='defaultPage';
		}
		return page;
	},
	
	/**
	@toc 8.
	@method historyBack
	*/
	historyBack: function(params) {
		// console.log('historyCounter: '+this.historyCounter);
		if(this.historyCounter >0) {
			history.back();
			this.historyCounter =this.historyCounter -2;		//have to subtract 2 since going back will cause a route change that will increment the counter again
		}
	}
};
inst.init({});
return inst;
}]);
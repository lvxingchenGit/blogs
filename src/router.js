import Vue from 'vue'
import Router from 'vue-router'
import showBlog from "./components/showBlog"
import writeBlog from "./components/writeBlog"
import showBlogDetails from "./components/showBlogDetails"
import editBlog from "./components/editBlog"
Vue.use(Router)

export default new Router({
  	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass : "active",
	linkExactActiveClass : "exact",
	routes: [
		{
			path: '/',
			name: 'showBlog',
			component: showBlog
		},
		{
			path: '/showBlogDetails/:id',
			name: 'showBlogDetails',
			component: showBlogDetails
		},
		{
			path: '/writeBlog',
			name: 'writeBlog',
			component: writeBlog 
		},{
			path: '/editBlog/:id',
			name: 'editBlog',
			component: editBlog 
		}
	]
})

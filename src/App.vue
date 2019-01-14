<template>
	<div id="app">
		<div class="header">
			<div class="imgPic"><div class="title"></div><img src="./assets/pic/bg.jpg" alt=""></div>
			<div class="nav">
				<router-link to="/" exact>博客</router-link>  
				<router-link to="/writeBlog" exact>写博客</router-link>
			</div>
		</div>
	<router-view/>
	</div>
</template>
<style lang="stylus">
html,body,li
	margin:0
	padding:0
	list-style none
#app
	width:1024px
	height:5000px
	margin 0 auto
	.header
		position relative
		width 100%
		height 300px
		.imgPic
			position relative
			width 1024px
			height 300px
			margin 0 auto
			.title
				background-image url('./assets/pic/logo.png')
				background-size 100% 100%
				width 50px
				height 50px
				position absolute
				bottom 20px
				left 50px
				&::before
					content 'MyBlog'
					position absolute
					bottom 26px
					left 67px
					color #eee
				&::after
					content '2019/1/13 author:LXC'
					position absolute
					bottom -1px
					left 67px
					color #ccc
					font-size 15px
					width 250px
		.nav
			position absolute 
			bottom 20px
			left 50%
			transform translate(-50%,0)
			a
				color #000
				padding 10px 20px
				background #fff
				border-radius 5px
				margin 0 20px
				text-decoration none
			.exact
				background #ccc

			
			
</style>


<template>
  <div class="showBlog">
	<div class="inp-box">
		<p>主题</p>
		<el-input 
			class="el-input" 
			v-model="input" 
			placeholder="请输入内容"
		></el-input>
       </div>
	<div v-for="item in fillterData(myData,input)" :key="item.id">
		<router-link :to="{path:'/showBlogDetails/'+item.id}" tag="div" class="blog-list-box">
			<div class="blog-pic"><img class="icon" src="../assets/pic/tx.jpg" alt=""></div>
			<div class="blog-list">
				<div class="blog-title">{{item.blogs.title}}</div>
				<div class="blog-content">{{item.blogs.content}}</div>
				<div class="blog-bottom">
					<span class="blog-author">作者 : {{item.blogs.author}}</span>
				</div>
			</div>
		</router-link>
	</div>
	
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
export default {
	name: 'showBlog',
	data(){
		return{
			myData:[],
			input:""
		}
	},
	methods:{
		showBlogDetails(){
			this.$router.push({path:"'/showBlogDetails'+ myData.id"})
		},
		fillterData(myData,input){
			return myData.filter((res)=>{
				return res.blogs.title.match(input)
			})
		}
	},
	created(){
		axios.get('https://wd9872222184vuzzhq.wilddogio.com/posts.json')
		.then((data)=>{
			return data
			// this.myData = (res.data).slice(0,3)
		})
		.then((resp)=>{
			var arr = []
			for(let key in (resp.data)){
				resp.data[key].id = key
				console.log(resp.data)
				arr.push(resp.data[key])
			}
			console.log(arr)
			this.myData = arr
		})
	}
}
</script>
<style lang="stylus" scoped>
@import '../assets/ellipsis.styl'
.showBlog
	width 1024px
	display : flex
	flex-direction column
	align-items center
	.inp-box
		width:600px
		.el-input
			margin -10px 0 0 0 
			width:600px
	.blog-list-box
		margin:10px 0
		display:flex
		width:600px
		box-sizing:border-box
		padding:10px
		background:#f6f6f6
		border-radius 5px
		transition .2s all
		&:hover
			transition .2s all
			transform scale(1.001)
			box-shadow 0px 2px 6px #ccc
		.blog-pic
			width:130px
			height:130px
			.icon
				width:130px
				height:130px
				border-radius 5px
		.blog-list
			display flex
			flex-direction column
			margin-left 15px
			width 430px
			cursor:pointer
			.blog-title
				font-size:20px
				height:30px
				line-height:30px
				$ellipsis()
				font-weight 600
			.blog-content
				font-size:12px
				color:#666
				height:60px
				overflow hidden
				margin:5px 0 0 0
			.blog-bottom
				padding:8px 0 0 0
				font-size 12px
</style>

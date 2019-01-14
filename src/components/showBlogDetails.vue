<template>
    <div class="showBlogDetails-box">
        <div class="showBlogDetails">
            <img src="../assets/pic/tx.jpg" alt="">
            <p class='title'>{{this.blog.title}}</p>
            <div class="author">作者:{{this.blog.author}}</div>
            <div class="content">{{this.blog.content}}</div>
            <div class="author-box">
                <div class="classify">分类:{{this.classify}}</div>
                <div class="btn-box">
                    <router-link :to="{path:'/editBlog/' + id}" tag="div">
                        <el-button class="btn1" type="primary" icon="el-icon-edit" circle></el-button>
                    </router-link>
                    <el-button class="btn2" type="danger" icon="el-icon-delete" circle @click="open"></el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
    name: 'showBlogDetails',
    data(){
        return {
            blog:{},
            id:this.$route.params.id,
            classify:""
        }
    },
    methods:{
        open() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
            this.$message({
                    type: 'success',
                    message: '删除成功!',
                });
            this.deleteFn()
            }).catch(() => {
            this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        deleteFn(){
            axios.delete("https://wd9872222184vuzzhq.wilddogio.com/posts/"+this.id+".json")
                .then((data)=>{
                this.$router.push('/')
            })
        }
    },
    created(){
        console.log(this.$confirm)
        // const id = this.$route.params.id
        axios.get("https://wd9872222184vuzzhq.wilddogio.com/posts/"+this.id+".json")
        .then((data)=>{
            this.blog = data.data.blogs
            this.classify = data.data.blogs.classify[0]
		})
		
    }
}
</script>
<style lang="stylus" scoped>
    .showBlogDetails
        display flex
        flex-direction column
        align-items center
        img
            margin:20px 0
            width:300px
            height:300px
        p
            font-size 30px
            margin-top -10px
            width:550px
            text-align center
        .author
            color:#8f8f8f
            font-size 16px
            margin -20px 0 10px 0 
            position relative
            &::after
                content:""
                position absolute
                top:30px
                left:-220px
                width:600px
                height:1px
                background #eee
        .content
            width:600px
            font-size 18px
            line-height 28px
            color:#666
            padding:20px 0 0 0
        .author-box
            margin:15px 0
            display flex
            width:600px
            justify-content space-between
            color:#8f8f8f
            font-size 16px
            .btn-box
                display flex
                .btn1
                    margin 0 20px 0 0
                                
</style>
<template>
        <div class="writeblog-box">
                <span class="title">editBlog</span>
                <div class="inp-box">
                        <div class="icon-box-one">
                                <span class="icon1"></span>
                                <p>主题</p>
                        </div>
                        <el-input 
                                class="el-input" 
                                v-model="input" 
                                placeholder="请输入内容"
                        ></el-input>
                </div>
                <div class="text-box">
                        <div class="icon-box-two">
                                <span class="icon2"></span>
                                <p>内容</p>
                        </div>
                        <el-input
                                class="el-textarea" 
                                type="textarea"
                                :rows="6"
                                placeholder="请输入内容"
                                v-model="textarea"
                                >
                        </el-input>
                </div>
                <div class="el-mycheckbox">
                        <div class="icon-box-three">
                                <span class="icon3"></span>
                                <p>分类</p>
                        </div>
                        <el-checkbox-group v-model="checkList">
                                <el-checkbox label="vue.js"></el-checkbox>
                                <el-checkbox label="angular.js"></el-checkbox>
                                <el-checkbox label="react.js"></el-checkbox>
                                <el-checkbox label="typescript.js"></el-checkbox>
                                <!-- <el-checkbox label="禁用" disabled></el-checkbox>
                                <el-checkbox label="选中且禁用" disabled></el-checkbox> -->
                        </el-checkbox-group>
                </div>
                <div class="el-select-zz">
                        <div class="icon-box-four">
                                <span class="icon4"></span>
                                <p>作者</p>
                        </div>
                        <el-select v-model= "value" placeholder="请选择" class="el-select-list">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                </el-option>
                        </el-select>
                </div>
                <div class="btn">
                        <el-button type="primary" :plain="true" @click="open" v-loading.fullscreen.lock="fullscreenLoading">编辑博客</el-button>
                </div>
        </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
import writeBlogSuc from "./writeBlogSuc"
// Vue.prototype.HOME = '/api'
export default {
        name: 'writeBlog',
        components:{
                writeBlogSuc,
        },
        data(){
                return{
                        input : '',
                        textarea : '',
                        checkedCitiesList : '',
                        loading: true,
                        checkList: [],
                        id:this.$route.params.id,
                        options: [{
                                value: '吕星辰——vue.js',
                                label: 'vue.js'
                                }, {
                                value: '吕学义——angular.js',
                                label: 'angular.js'
                                }, {
                                value: '宫玉云——react.js',
                                label: 'react.js'
                                }],
                        value: '',
                        loading: true,
                        fullscreenLoading: false
                 }
        },
        methods: {
                
                open() {
                        if(!this.input || !this.textarea || !this.value ){
                                this.$message({
                                        showClose: true,
                                        message: '您还没输入主题',
                                        type: 'warning'
                                });
                        }else{
                                const blogs = {
                                        title : this.input,
                                        content : this.textarea,
                                        classify : this.checkList,
                                        author : this.value
                                }
                                this.fullscreenLoading = true;
                                setTimeout(() => {
                                        this.fullscreenLoading = false;
                                        this.$message({
                                                showClose: true,
                                                message: '博客编辑成功！',
                                                type: 'success'
                                        });
                                        setTimeout(()=>{
                                                this.jumpFirstPage()
                                        },1000)
                                }, 1000);
                                axios.put("https://wd9872222184vuzzhq.wilddogio.com/posts/"+ this.id +".json",{blogs})
                                .then((res)=>{
                                        console.log(res)
                                })
                               
                        }
                        
                },
                jumpFirstPage(){
                        this.$router.push('/')
                },
                getData(){
                    axios.get("https://wd9872222184vuzzhq.wilddogio.com/posts/"+this.id+".json")
                    .then((data)=>{
                        this.input = data.data.blogs.title
                        this.textarea = data.data.blogs.content
                        this.checkList.push(data.data.blogs.classify[0])
                        this.value = data.data.blogs.author
                    })
                }
        },
        created(){
            this.getData()
        }
}
</script>

<style lang="stylus" scoped>
.writeblog-box >>> p
        color #666
        font-weight bold
.writeblog-box
        width 1024px
        display : flex
        flex-direction column
        align-items center
        .title
                font-size 20px
                color #fff
                margin 15px 0 0 0
                width:200px
                height 40px
                background #ccc
                text-align center
                line-height 40px
                border-radius 5px
        .inp-box
                width:600px
                .icon-box-one
                        display flex
                        align-items center
                        .icon1    
                                width 30px
                                height 30px
                                background-image url('../assets/pic/zt.png')
                                background-size 100% 100%
                                margin:0 10px 0 0
                .el-input
                        margin -10px 0 0 0 
                        width:600px
        .text-box
                width:600px
                .icon-box-two
                        display flex
                        align-items center
                        .icon2    
                                width 30px
                                height 30px
                                background-image url('../assets/pic/gj.png')
                                background-size 100% 100%
                                margin:0 10px 0 0
                .el-textarea
                        margin -10px 0 0 0 
                        width:600px
        .el-mycheckbox
                margin 5px 0 0 0
                .icon-box-three
                        display flex
                        align-items center
                        .icon3   
                                width 30px
                                height 30px
                                background-image url('../assets/pic/fl.png')
                                background-size 100% 100%
                                margin:0 10px 0 0
                .el-checkbox-group
                        margin -10px 0 0 0 
                        width:600px
                        display flex
                        justify-content space-between
                        .el-checkbox-list   
                                margin 10px 0   
        .el-select-zz
                width:600px 
                .icon-box-four
                        display flex
                        align-items center
                        .icon4   
                                width 30px
                                height 30px
                                background-image url('../assets/pic/wygzz.png')
                                background-size 100% 100%
                                margin:0 10px 0 0
                .el-select-list
                        margin -10px 0 0 0 
                        width 600px
        // .el-pic
        //         width:600px 
        //         .upload-demo
        //                 display flex
        //                 flex-direction column
        //                 align-items center
        //                 width 600px
        .btn
                width:600px
                margin 15px 0 0 0
        .l
                width:600px
                height:2px
                background:#000
</style>
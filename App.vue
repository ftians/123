
<template>
    <div class="bigbox">
        <div class="yc">
            <span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
            <div>
                <img src='' style="width: 50px">
                <p>123</p>
                <p>9.6<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
            <span><i class="fa fa-share-square-o" aria-hidden="true"></i></span>
        </div>
        <div class="zhu" v-height>
            <div class="header">
                <span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                <p>电影</p>
                <span><i class="fa fa-share-square-o" aria-hidden="true"></i></span>
            </div>
            <div class="xqTop">
                <img src="/img/zhu.png" class="zhupic">
                <div>
                    <p>{{list.title}}</p>
                    <p>Betters Days</p>
                    <p>{{list.tag}}</p>
                    <p>{{list.act}}</p>
                    <p>{{list.year}}</p>
                    <div class="toubian">
                        <div :class="{cur:bianxin}" @click="bx">
                            <span>❤</span>
                            想看
                        </div>
                        <div :class="{cur:kanguo}" @click="kg">
                            <span>☆</span>
                            看过
                        </div>
                    </div>
                </div>
            </div>
            <div class="koubei">
                <div class="kbt">
                    <div>
                        <img src="/img/mao.png" alt="">
                        实时口碑
                    </div>
                    <p><span>102562人想看</span><span>89462人想看</span></p>
                </div>
                <div class="kbc">
                    <div class="pf"><span>9.6</span> <span>897994人评价</span></div>
                    <div class="tiaoteam">
                        <div>
                            <span ><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                            <div class="tiao">
                        <span class="f">
                            <span class="z"></span>
                        </span>
                                <span class="jindu">90%</span>
                            </div>
                        </div>
                        <div>
                            <span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                            <div class="tiao">
                        <span class="f">
                            <span class="z"></span>
                        </span>
                                <span class="jindu">90%</span>
                            </div>

                        </div>
                        <div>
                            <span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                            <div class="tiao">
                        <span class="f">
                            <span class="z"></span>
                        </span>
                                <span class="jindu">90%</span>
                            </div>

                        </div>
                        <div>
                            <span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                            <div class="tiao">
                        <span class="f">
                            <span class="z"></span>
                        </span>
                                <span class="jindu">90%</span>
                            </div>

                        </div>
                        <div>
                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                            <div class="tiao">
                        <span class="f">
                            <span class="z"></span>
                        </span>
                                <span class="jindu">90%</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="xian">
                    <span>NO.2</span>
                    <span>热映口碑榜</span>
                    <span class="jiantou">></span>
                </div>
            </div>
            <div class="jianjie">
                <p>
                    <span>简介</span>
                    <span @click="zhankai">展开</span>
                </p>
                <div class="xq" :class="{cur:jj}">
                    {{list.desc}}
                </div>
            </div>
            <div class="yzry">
                <p>
                    <span>演职人员</span>
                    <span @click="yyzhankai">全部26人</span>
                </p>
                <div class="yanYuan" :class="{cur:yy}" >
                    <figure v-for="item of list.act_s">
                        <img src="img/zhu.png">
                        <figcaption>
                            {{item.name}}
                        </figcaption>
                        <p>{{item.shi}}</p>
                    </figure>
                </div>
            </div>
            <div class="pinglun">
                <div class="plhexin">
                    <div class="plxtop">
                        <span>评论</span>
                        <span>参与讨论</span>
                    </div>
                    <div class="biaoqian">
                        <span>全部</span>
                        <span>好评</span>
                        <span>差评</span>
                        <span>购票认证</span>
                        <span>同城</span>
                    </div>
                    <p class="jx">精选</p>
                    <div class="liebiao" v-for="item of list.comment">
                        <div class="lbtop">
                            <div>
                                <img src="img/zhu.png" alt="">
                            </div>
                            <p class="mingzi">{{item.name}}</p>
                            <p>这不作品打了10分</p>
                        </div>
                        <div class="lbbottom">
                           <p>{{item.txt}}</p>
                            <div>
                                <span>
                                    3天前
                                </span>
                                <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>点赞</span>
                                <span> <i class="fa fa-commenting-o" aria-hidden="true"></i>{{item.zan}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div @click="mai">特惠购票</div>
        </div>
        <gp></gp>
    </div>
</template>
<script>
    import gp from './views/goupiao/index.vue'
    $(function(){
        $('.zhu').scroll(function () {
            if ($('.zhu').scrollTop() >= 30) {
                $(".yc").css({"display":"flex"});
            } else {
                $(".yc").css({"display":"none"});
            }
        });
    })
    export default {
        data() {
            return {
                jj: false,
                yy: false,
                bianxin:false,
                kanguo:false
            }
        },
        computed:{
            list() {
                return this.$store.state.list[0]
            }
        },
        components:{
            gp
        },
        created() {
            this.$store.dispatch('getall')
        },
        methods: {
            bx(){
                this.bianxin = !this.bianxin
            },
            kg(){
              this.kanguo = !this.kanguo
            },
            zhankai() {
                this.jj = !this.jj
            },
            yyzhankai() {
                this.yy = !this.yy
            },
            mai(){
               $('.goupiao').css({"display":"block"});
            }
        }
    }
</script>
<style scoped lang="stylus" src="./app.styl">

</style>


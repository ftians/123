<template>
    <div class="goupiao">
        <div>购票</div>
        <button @click="goback">返回</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goback(){
                $('.goupiao').css({'display':'none'})
            }
        }
    }
</script>

<style scoped>

</style>
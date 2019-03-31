<template>
</template>
<script>
import {Toast} from 'mint-ui';
    export default{
        data(){
            return{}
        },
        created() {
            var url=this.$store.state.globalUrl+"logout";
            this.axios.get(url).then(res=>{
                Toast(`已退出`);
                this.$router.push('home')
            })
        },
    }
</script>
<style></style>
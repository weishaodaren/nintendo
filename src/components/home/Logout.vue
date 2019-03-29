<template>
    <h3>退出!!!!!</h3>
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
            })
        },
    }
</script>
<style></style>
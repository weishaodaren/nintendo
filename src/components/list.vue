<template>
   <table>
      <header>
         <tr>
           <th>地址</th>
           <th>名字</th>
         </tr>
      </header>
      <footer>
          <tr v-for="li of list" :key="li.id">
            <td>{{li.id}}</td>
            <td>{{li.address}}</td>
            <td>{{li.name}}</td>
          </tr>
      </footer>
      {{list[0].name}}
   </table>
</template>
<script>
export default {
    data:function(){
        return {
           list:[{id:1,address:'上海',name:"zhang"},
            {id:2,address:'内蒙',name:"li"},
            {id:3,address:'北京',name:"wang"}]
         }
    }}
</script>
<style>
    table td,table th{
        padding:10px;
        border:1px solid red; 
    }
</style>
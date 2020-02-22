
<template>
  <div>
    <h2>{{supplier.name}}</h2>
    <p>{{supplier.level}} <router-link to="/supplier/others">其他{{supplier.level}}水果商</router-link></p>
    <p>{{supplier.phone}}</p>
    <p>{{supplier.address}}</p>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        supplier: {
          name: '每日鲜水果商',
          level: 'A级',
          phone: '15723288039',
          address: '上海市闵行区XXX',
        }
      }
    }
  }
</script>


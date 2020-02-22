<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <h4>{{ item.name }}</h4>
      <p>{{ item.level }}</p>
      <p>{{ item.phone }}</p>
      <p>{{ item.address }}</p>
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            id: 5,
            name: '好又多水果商',
            level: 'A级',
            phone: '18478343322',
            address: '浙江衢州',
          },
          {
            id: 6,
            name: '大海水果经销商',
            level: 'A级',
            phone: '17473823288',
            address: '江苏南通',
          }
        ]
      }
    }
  }
</script>
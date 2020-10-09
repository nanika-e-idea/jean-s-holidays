<template>
 <div class="campaign">
   <cpoint :data="listData" />
   <div class="attention" v-html="mdat" />
 </div>
</template>

<script>
import cpoint from '~/components/Skeleton/CheckPoint.vue'

import md01 from '~/assets/markdown/campaign01.md'
import md02 from '~/assets/markdown/campaign02.md'
import md03 from '~/assets/markdown/campaign03.md'
import md04 from '~/assets/markdown/campaign04.md'

import mdat from '~/assets/markdown/attention.md'

export default {
 name: 'Campaign',
 components: {
   cpoint
 },
 data() {
   return {
     listData: [
        {
          class: 'circle',
          point: md01,
          href: ''
        },
        {
          class: 'circle',
          point: md02,
          href: ''
        },
        {
          class: 'circle',
          point: md03,
          href: ''
        },
        {
          class: 'circle btncv',
          point: md04,
          href: 'https://craftwine.base.shop/categories/1995418'
        },
     ],
     mdat,
   }
 }
}
</script>

<style scoped>
.attention{
  display:block;
  margin: 20px 8% auto;
  width: 84%;
  font-size: 0.8rem;
  }
</style>

<- parent: index.vue !->
<template>
    <mag :data="listData" :reverse="reverseOrder" />
</template>

<script>
import img01 from '~/assets/image/dummy.png'
import img02 from '~/assets/image/dummy.png'
import mag from '~/components/Skeleton/Magazin.vue'
import md01 from '~/assets/markdown/winery01.md'
import md02 from '~/assets/markdown/winery02.md'

export default {
 name: 'Winery',
 components: {
   mag
 },
 data() {
   return {
     listData: [
        {
          image: img01,
          imageclass: 'wide',
          alt: '写真：アンツフィールド・エステート',
          item: '01',
          description: md01
        },
        {
          image: img02,
          imageclass: 'wide',
          alt: '写真：マン・オー・ウォー・ヴィンヤーズ',
          item: '02',
          description: md02
        },
     ],
     reverseOrder: true
   }
 }
}
</script>

<- parent: index.vue !->
<template>
    <mag :data="listData" :reverse="reverseOrder" />
</template>

<script>
import img01 from '~/assets/image/wineryTop.jpg'
import img02 from '~/assets/image/wine-argent.jpg'
import img03 from '~/assets/image/terrainHB.jpg'
import mag from '~/components/Skeleton/Magazin.vue'
import md01 from '~/assets/markdown/winery01.md'
import md02 from '~/assets/markdown/winery02.md'
import md03 from '~/assets/markdown/winery03.md'

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
          alt: '写真：醸造家ジュリアン・ブローデン',
          item: '01',
          description: md01
        },
        {
          image: img02,
          alt: '写真：ワイングラス＆ワインボトル',
          item: '02',
          description: md02
        },
        {
          image: img03,
          alt: '写真：ホークスベイのブドウ畑',
          item: '03',
          description: md03
        },
     ],
     reverseOrder: true
   }
 }
}
</script>

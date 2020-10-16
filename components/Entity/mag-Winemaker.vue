<template>
 <div class="story winemaker">
   <mag :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import img01 from '~/assets/image/JBrogden.jpg'
import img02 from '~/assets/image/winemaking.jpg'
import img03 from '~/assets/image/withDog.jpg'
import img04 from '~/assets/image/napa-valley.jpg'
import img05 from '~/assets/image/aurulent_picture.jpg'
import img06 from '~/assets/image/etiquette.jpg'
import mag from '~/components/Skeleton/Magazin.vue'
import md01 from '~/assets/markdown/winemaker01.md'
import md02 from '~/assets/markdown/winemaker02.md'
import md03 from '~/assets/markdown/winemaker03.md'
import md04 from '~/assets/markdown/episode01.md'
import md05 from '~/assets/markdown/episode02.md'
import md06 from '~/assets/markdown/episode03.md'

export default {
 name: 'wimemaker',
 components: {
   mag
 },
 data() {
   return {
     listData: [
        {
          image: img01,
          imageclass: '',
          alt: '写真：醸造家ジュリアン・ブローデン',
          item: '01',
          description: md01
        },
        {
          image: img02,
          imageclass: '',
          alt: '写真：ワイン作り',
          item: '02',
          description: md02
        },
        {
          image: img03,
          imageclass: '',
          alt: '写真：ブドウ畑で作業するジュリアン',
          item: '03',
          description: md03
        },
        {
          image: img04,
          imageclass: 'small',
          alt: '写真：ナパバレーの風景',
          item: '04',
          description: md04
        },
        {
          image: img05,
          imageclass: 'small',
          alt: '写真:アンジェラの作品',
          item: '05',
          description: md05
        },
        {
          image: img06,
          imageclass: 'small',
          alt: 'Argent：アンジェラの作品',
          item: '06',
          description: md06
        },
     ],
     reverseOrder: false
   }
 }
}
</script>

<style>

</style>

<template>
 <div class="story wine">
   <mag :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import img01 from '~/assets/image/wine01.png'
import img02 from '~/assets/image/wine02.png'
import img03 from '~/assets/image/wine03.png'
import img04 from '~/assets/image/wine04.png'

import mag from '~/components/Skeleton/Magazin.vue'
import wine01 from '~/assets/markdown/wine01.md'
import wine02 from '~/assets/markdown/wine02.md'
import wine03 from '~/assets/markdown/wine03.md'
import wine04 from '~/assets/markdown/wine04.md'

export default {
 name: 'Wine',
 components: {
   mag,
 },
 data() {
   return {
     listData: [
        {
         image: img01,
         imageclass: 'wide',
         alt: '写真：アンツフィールド　スライディング・ヒル　ピノ・ノワール　2018',
         item: '01',
         description: wine01
        },
        {
         image: img02,
         imageclass: 'wide',
         alt: '写真：アンツフィールド　スライディング・ヒル　ソーヴィニヨン・ブラン　2019',
         item: '02',
         description: wine02
        },
        {
         image: img03,
         imageclass: 'wide',
         alt: '写真：アンツフィールド　スライディング・ヒル　赤白セット',
         item: '03',
         description: wine03
        },
        {
         image: img04,
         imageclass: 'wide',
         alt: '写真：マン・オー・ウォー　アイロンクラッド　ボルドーブレンド　2010',
         item: '04',
         description: wine04
        }
     ],
     reverseOrder: true
   }
 }
}
</script>

<style>

</style>

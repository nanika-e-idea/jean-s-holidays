<template>
  <div class="temprate">
    <mlist :data="listData" />
  </div>
</template>

<script>
import mlist from '~/components/Skeleton/MemberList.vue'

import DummyImage from '~/assets/image/dummy_sq.png';
import logo03 from '~/assets/image/jh_cwp_logo.png';
import logo05 from '~/assets/image/jh_nanika_logo.png';

import md01 from '~/assets/markdown/team01.md'
import md02 from '~/assets/markdown/team02.md'
import md03 from '~/assets/markdown/team03.md'
import md04 from '~/assets/markdown/team04.md'
import md05 from '~/assets/markdown/team05.md'

export default {
 name: 'team',
 components: {
   mlist
 },
 data() {
   return {
     listData: [
        {
          image: DummyImage,
          name: 'FM 802',
          role: 'Jean\'s Holidays<br/>企画・広報',
          introduction: md01
        },
        {
          image: DummyImage,
          name: 'FM COCOLO',
          role: 'Jean\'s Holidays<br/>企画・広報',
          introduction: md02
        },
        {
          image: logo03,
          name: '株式会社<br/>リブ・コマース',
          role: 'ディレクション<br/>商品販売',
          introduction: md03
        },
        {
          image: DummyImage,
          name: '株式会社MJE',
          role: 'キャンペーンロゴ<br/>クリエーター',
          introduction: md04
        },
        {
          image: logo05,
          name: 'Teamナニカ',
          role: 'ウェブシステム<br/>クリエーター',
          introduction: md05
        }
     ]
   }
 }
}
</script>

<style>

</style>
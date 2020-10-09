<template>
    <div class="main">
        <div class="firstview">
          <div class="fv-head"><img :src="logojh02" alt="ロゴ(小)：ジーンズ・ホリデーズ" /></div>
          <div class="fv-msg"><p>休日の<span class="iblock">ひとときを</span><span class="iblock">彩る</span><span class="iblock">素敵な</span><span class="iblock">ワインを</span><span class="iblock">皆様に</span></p></div>
          <div class="fv-img"><img :src="logojh01" alt="ロゴ(大)：ジーンズ・ホリデーズ" /></div>
        </div>
        <hr class="spacer"/>
        <section id="headline" v-observe-visibility="vov01" v-bind:class='{active:isVisible01}'>
          <h1 class="text-center"><span class="iblock">はじめまして</span> <span class="iblock">~Jean’s Holidaysの</span><span class="iblock">世界へようこそ~</span></h1>
          <hr class="spacer"/>
          <div class="container" v-html="introduction"/>
        </section>
        <hr class="spacer"/>
        <section id="overviews"  v-observe-visibility="vov02" v-bind:class='{active:isVisible02}'>
            <h2 class="jh-h text-right">Introduction</h2>
            <span class="jh-sub text-right text-muted">はじめてのワイン　～ワイン愛～</span>
            
            <section id="concept" class="story"  v-observe-visibility="vov03" v-bind:class='{active:isVisible03}'>
              <concept />
            </section>

            <hr class="spacer"/>
            <storyteller />

        </section>
        <hr class="spacer"/>
        <section id="recommends" v-observe-visibility="vov04" v-bind:class='{active:isVisible04}'>
            <h2 class="jh-h text-left">Recommendations</h2>
            <span class="jh-sub text-left text-muted">コラボレーション・ワインズ</span>
            <div class="section-preface" v-html="recommends" />
            <img :src="logowinery" alt="ロゴ：コレボレーション・ワインズ" />
            <hr class="spacer" />
            <section class="story" v-observe-visibility="vov05" v-bind:class='{active:isVisible05}'>
              <hwinery /> 
              <winery />
            </section>
            <hr class="spacer"/>
            <section class="story" v-observe-visibility="vov06" v-bind:class='{active:isVisible06}'>
              <hwinemaker />
              <winemaker />
            </section>
            <hr class="spacer"/>
            <section class="story" v-observe-visibility="vov08" v-bind:class='{active:isVisible08}'>
              <hwine />
              <div class="section-preface">
               <img class="fill" :src="wines" alt="写真：赤ワイン＆白ワイン" />
              </div>
              <wine />
            </section>
            <hr class="spacer"/>
            <section class="campaign" v-observe-visibility="vov09" v-bind:class='{active:isVisible09}'>
              <hcampaign />
              <campaign />
            </section>
        </section>
        <hr class="spacer"/>
        <hr>
        <hr class="spacer"/>
        <div class="section-preface team" v-html="teammd" />
        <hr class="spacer"/>
    </div>
</template>
<script>
import introduction from '~/assets/markdown/introduction.md';
import recommends from '~/assets/markdown/recommends.md';

import LogoJh01 from '~/assets/image/jeansholidays_logo_01.png';
import LogoJh02 from '~/assets/image/jeansholidays_logo_02.png';
import LogoWinery from '~/assets/image/logo-collaboration_wines.svg';
import wines from '~/assets/image/wines.jpg';

import storyteller from '~/components/Entity/bio-Storyteller.vue';
import concept from '~/components/Entity/mag-Concept.vue';
import hwinery from '~/components/Entity/hgrp-Winery.vue';
import winery from '~/components/Entity/mag-Winery.vue';
import hwinemaker from '~/components/Entity/hgrp-Winemaker.vue';
import winemaker from '~/components/Entity/mag-Winemaker.vue';
import hwine from '~/components/Entity/hgrp-Wine.vue';
import wine from '~/components/Entity/mag-Wine.vue';
import hcampaign from '~/components/Entity/hgrp-Campaign.vue';
import campaign from '~/components/Entity/cpoint-Campaign.vue';

import teammd from '~/assets/markdown/team.md';

export default {
    name: 'hoge',
    components: {
        storyteller,
        concept,
        hwinery,
        winery,
        hwinemaker,
        winemaker,
        hwine,
        wine,
        hcampaign,
        campaign,
    },
    data () {
        return{
            sitename: "Jean's holidays",
            jean: "ジーン長尾",
            logojh01: LogoJh01,
            logojh02: LogoJh02,
            logowinery: LogoWinery,
            isVisible01: true,
            isVisible02: true,
            isVisible03: true,
            isVisible04: true,
            isVisible05: true,
            isVisible06: true,
            isVisible07: true,
            isVisible08: true,
            isVisible09: true,
            isVisible10: true,
            introduction,
            recommends,
            wines,
            teammd,
        }
    },
    methods: {
      vov01(isVisible01, entry) {
        this.isVisible01 = isVisible01
      },
      vov02(isVisible02, entry) {
        this.isVisible02 = isVisible02
      },
      vov03(isVisible03, entry) {
        this.isVisible03 = isVisible03
      },
      vov04(isVisible04, entry) {
        this.isVisible04 = isVisible04
      },
      vov05(isVisible05, entry) {
        this.isVisible05 = isVisible05
      },
      vov06(isVisible06, entry) {
        this.isVisible06 = isVisible06
      },
      vov07(isVisible07, entry) {
        this.isVisible07 = isVisible07
      },
      vov08(isVisible08, entry) {
        this.isVisible08 = isVisible08
      },
      vov09(isVisible09, entry) {
        this.isVisible09 = isVisible09
      },
      vov10(isVisible10, entry) {
        this.isVisible10 = isVisible10
      }
    }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.main{
  display: block;
  @include pc {width: calc(100% - 240px); max-width: 1100px};
  @include tab {width: calc(100% - 120px)};
  @include spl {width: 100%};
  height: auto;
}
ul.slider:before {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
}
ul.slider {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
            width: 100%;
        }
        .overlay{
            position: absolute;
        }
    }
}
.t-slider {
    width: 100%;
    height: auto;
    max-height: 300px;
    li{
        max-height: 300px;
    }
}
ul.tile {
    list-style-type: none;
    width: 100%;
}

.firstview{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  background-color: white;
  .fv-head{
    display: block;
    width: 100%;
    text-align: left;
    transition-delay: 0.9s;
    transition-duration: 0.3s; 
    img{
      margin-left: 20px;
      width: calc(100% - 40px);
      max-width: 600px;
    }
  }
  .fv-msg{
    display: block;
    width: 55%;
    transition-delay: 0.3s;
    transition-duration: 0.3s;
    p{
      margin-left: 30px;
      font-size: 48px;
      line-height: 2em;
      font-weight: 100;
      color: $palette-acsent;
      filter: drop-shadow($shadow);
      @include spl {font-size: 30px}
    }
  }
  .fv-img{
    display: block;
    width: 40%;
    overflow: hidden;
    transition-delay: 0.3s;
    transition-duration: 0.7s;
    img{
      width: 100%;
    }
  }
}
#headline,
.section-preface{
  margin: auto;
  width: 80%;
  max-width: 900px;
  height: auto;
}
.section-preface{display: flex}
img.fill{
    margin: auto;
    width: 100%;
    max-width: 600px;
    height: auto;
  }
.face{
  box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 100%;
    }
}
section{
    opacity: 0;
    transition-delay: 0.4s;
    transition-duration: 0.6s;
    &.active{
        opacity: 1;
    }
}
</style>
<template>
  <div id="header">
    <div class="hspace"></div>
    <div class="hfix">
        <div class="discription"><span class="title iblock">Jean's Holidays</span>&nbsp;<span class="iblock">休日のひとときを彩る<span class="iblock">素敵なワインを皆様に</span></span></div>
        <div class="mainnav">
            <span class="navi"><a v-scroll-to="'#overviews'">Introduction</a>&nbsp;
            <a v-scroll-to="'#recommends'">Recommendations</a>&nbsp;
            <span class="small">
                <a v-scroll-to="'#wine'">ワイン紹介</a>｜
                <a v-scroll-to="'#winery'">ワイナリー紹介</a>｜
                <a v-scroll-to="'#campaign'">キャンペーン内容</a>&nbsp;
            </span>
            </span>
        </div>
        <div class="spmenubtn" v-on:click='isActive01=!isActive01'>
            <div class="btnpart01" v-bind:class='{active:isActive01}'></div>
            <div class="btnpart02" v-bind:class='{active:isActive01}'></div>
            <div class="btnpart03" v-bind:class='{active:isActive01}'></div>
            <span class="btnlabe0l" v-bind:class='{active:!isActive01}'>menu</span>
            <span class="btnlabe02" v-bind:class='{active:isActive01}'>close</span>
        </div>
        <ul class="spmenu" v-bind:class='{active:isActive01}'>
            <li v-bind:class='{active:isActive01}'><a v-scroll-to="'#overviews'" v-on:click='isActive01=!isActive01'>Introduction</a></li>
            <li v-bind:class='{active:isActive01}'><a v-scroll-to="'#recommends'" v-on:click='isActive01=!isActive01'>Recommendations</a></li>
            <li v-bind:class='{active:isActive01}'><ul>
                <li v-bind:class='{active:isActive01}'><a v-scroll-to="'#wine'" v-on:click='isActive01=!isActive01'>ワイン紹介</a></li>
                <li v-bind:class='{active:isActive01}'><a v-scroll-to="'#winery'" v-on:click='isActive01=!isActive01'>ワイナリー紹介</a></li>
                <li v-bind:class='{active:isActive01}'><a v-scroll-to="'#campaign'" v-on:click='isActive01=!isActive01'>キャンペーン内容</a></li>
            </ul></li>
        </ul>
    </div>
    <a href="https://craftwine.base.shop/categories/1995418" target="blank"><div class="cv"><span>いますぐ<br/>購入!!</span></div></a>
    
  </div>
</template>

<script>
import logoImage from '~/assets/image/jeansholidays_logo_01sq.jpg'
export default {
    data(){
        return {
            isActive01: false,
            logoImage
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
$hheight: 80px;
.hspace{
    display: block;
    position: relative;
    width: 100%;
    height: $hheight;
}
.hfix{
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    height: $hheight;
    //background-color: white;
    background-color: $palette-dark;
    color: white;
    z-index: 20;
    filter: drop-shadow($shadow);
}
.discription{
    font-family: $fontfamily;
    position: relative;
    top: 10px;
    left: 20px;
    width: calc(100% - 200px);
    font-size: 12px;
    color: $palette-point;
    .title{
        font-size: 20px;
        font-weight: 500;
        //color: #222;
        color: white;
    }
}
.mainnav{
  @include pc{
    display: block;
    position: absolute;
    bottom: 0;
    right: 20px;
    width: calc(100% - 40px);
    height: auto;
    color: $palette-point;
    text-align: right;
    vertical-align: bottom;
    
    .navi{
        font-size: $fjump-5;
        a{
            //display: block;
            padding: auto 20px;
            background-color: $palette-point;
            color: white;
            font-weight: 500;
            &:hover{
                background-color: $palette-acsent;
                //color: $palette-point;
                cursor: pointer;
            }
            &::before,
            &::after{
                content: "　";
                font-size: 5px;
            }
        }
        .small{
            font-size: 12px;
            font-weight: 100;
            a{
                background-color: $palette-dark;
                color: white;
                &:hover{
                    color: $palette-point;
                }
            }
        }
    }
  }
  @include tab{
      display: none;
  }
}
.cv{
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $palette-point;
    color: #222;
    font-weight: 900;
    text-align: center;
    z-index: 10;
    transform: rotate(-12deg);
    transition-delay: 0.1s;
    transition-duration: 0.2s;
    filter: drop-shadow($shadow);
    span{
        width: 100%;
        height: auto;
    }
    &:hover{
        width: 120px;
        height: 120px;
    }
}
.spmenubtn{
  @include pc{display: none}
  @include tab{
    position: absolute;
    box-sizing: border-box;
    top: 12px;
    right: 20px;
    width: 50px;
    height: 60px;
    z-index: 21;
    background-color: transparent;
    .btnpart01,
    .btnpart02,
    .btnpart03{
        position: absolute;
        display: block;
        box-sizing: border-box;
        top: 5px;
        left: 5px;
        width: 40px;
        border-bottom: solid 4px $palette-point;
        transition-duration: 0.5s;
        transition-delay: 0.2s;
    }
    .btnpart01{
        height: 4px;
        &.active{
            transform: rotate(45deg);
        }
    }
    .btnpart02{
        height: 22px;
        &.active{
            width: 0;
            border-bottom-color: transparent;
            left: 20px;
        }
    }
    .btnpart03{
        height: 40px;
        &.active{
            transform: rotate(-45deg);
        }
    }
    .btnpart01.active,
    .btnpart03.active{
         height: 4px;
         width: 57px;
         top: 22px;
         left: -3.5px;
    }
    .btnlabe0l,
    .btnlabe02{
        display: none;
        position: absolute;
        top: 40px;
        left: 23px;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        text-align: center;
        color: transparent;
        z-index: -20;
        &.active{
            display: block;
            width: 50px;
            left: 0;
            font-size: 14px;
            color: $palette-point;
            z-index: 20;
        }
    }
  }
}
.spmenu{
    display: block;
    position: absolute;
    top: $hheight;
    right: -100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 300px;
    max-width: 100%;
    background-color: #777;
    transition-duration: 0.3s;
    text-align: right;
    &.active{
        right: 0;
        z-index: 12;
    }
    li ul{
        list-style-type: none;
        padding-left: 10px;
        width: 100%;
        left: 0;
        li{
            display: block;
            position: relative;
            left: 100%;
            width: 100%;
            transition-duration: 0.2s;
            &.active{
                left: 0;
            }
            &:first-child{
                transition-delay: 0.7s;
            }
            &:nth-child(2){
                transition-delay: 0.8s;
            }
            &:nth-child(3){
                transition-delay: 0.9s;
            }
            &:nth-child(4){
                transition-delay: 1s;
            }
            a{
                display: block;
                padding: 0 10px;
                width: 100%;
                height: 100%;
                background-color: $palette-dark;
                line-height: 2rem;
                font-size: 1rem;
            }
        }
    }
    li{
        display: block;
        position: relative;
        left: 100%;
        margin: 10px;
        padding: 0;
        width: 280px;
        max-width: calc(100% - 10px);
        transition-duration: 0.2s;
        &.active{
            left: 0;
        }
        &:first-child{
            transition-delay: 0.3s;
        }
        &:nth-child(2){
            transition-delay: 0.4s;
        }
        &:nth-child(3){
            transition-delay: 0.5s;
        }
        &:nth-child(4){
            transition-delay: 0.6s;
        }
        a{
            display: block;
            padding: 0 10px;
            width: 100%;
            height: 100%;
            background-color: $palette-acsent;
            line-height: 2.5rem;
            font-size: 1.5rem;
        }
    }
}
</style> 
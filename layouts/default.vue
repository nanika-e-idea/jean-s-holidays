<template>
  <div>
    <Header />
    <div class="mid">
    <SideA />
    <Nuxt />
    <SideB />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import SideA from '~/components/SideA.vue'
import SideB from '~/components/SideB.vue'

export default {
  components: {
    Header,
    Footer,
    SideA,
    SideB,
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/base.scss';
@import '~/static/fa5/scss/fontawesome.scss';
@import '~/static/fa5/scss/solid.scss';

html {
  font-family: $fontfamily;
  @include pc {font-size: $fbase-pc};
  @include tab {font-size: $fbase-tab};
  @include spl {font-size: $fbase-sp};
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $blacky;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

//h1,h2,h3,h4,h5,h6{font-family: $headingfont}
h2,h3,h4,h5,h6{font-family: $headingfont}
h1{font-family: $fontfamily}
p{font-family: $fontfamily; font-weight: $fweight-p; line-height: $lspace; color: $blacky}
h1{
  font-size: $fjump-1;
  font-weight: $fWeight-1;
  //transform: scale(0.8, 1);
  //letter-spacing: 0.1em;
  //background-color: $palette-dark;
  color: $palette-dark;
  border-bottom: solid 2px $palette-point;
  //border-top: solid 2px $palette-point;
  //border-bottom: solid 2px $palette-point;
  span{font-family: $fontfamily}
}
h2{
  font-size: $fjump-2;
  font-weight: $fWeight-2;
  @include spl{font-size: $fjump-x}
}
h3{font-size: $fjump-3; font-weight: $fWeight-3}
h4{font-size: $fjump-4; font-weight: $fWeight-4}
h5{font-size: $fjump-5; font-weight: $fWeight-5}
h6{font-size: $fjump-6; font-weight: $fWeight-6}

.expand{font-size: 1.5em}
strong{
  display: inline;
  color: $palette-dark;
  font-size: 1.5em !important;
  font-weight: $fWeight-2 !important;
  letter-spacing: 0;
  }

div.mid{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.article{
  .sentence{
    p{
      margin-left: 10px;
      margin-right: 10px;
    }
      
  }
}
.campaign{
  section{margin: 0;}
  a{
    color: white; 
    text-decoration: none;
    //.btncv{transition-duration: 2s}
  }
}
.jh-h{
  margin: 0;
  @include pc{font-size: 3.5rem}
  @include tab{font-size: 2.5rem}
  @include spl{font-size: 1.6rem}
  font-weight: 900;
  color: $palette-acsent;
}
.jh-sub{
  display: block;
  font-size: o.8rem;
  margin-bottom: 20px;
  width:100%;
  font-family: $headingfont;
}
.btns{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  @include pc{width: 100%}
  @include tab{width: 100%}
  @include spl{width: 100%}
}
.btn-buy{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    margin: 20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    transform: rotate(-12deg);
    transition-delay: 0.1s;
    transition-duration: 0.2s;
    filter: drop-shadow($shadow);
    &:hover{text-decoration: none; width: 200px; height: 200px; margin: 10px}
    &.rouge{
      background-color: $palette-acsent;
      span{color: white}
    }
    &.blanc{
      background-color: $palette-point;
      //span{color: $palette-dark}
      span{color: $blacky}
    }
    &.pair{
      background-color: $palette-point;
      border: solid 25px $palette-acsent;
      //span{color: $palette-dark}
      span{color: $blacky}
    }
    span{
      width: 100%;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 600;
      z-index: 2;
    }
}

.text-end{
  display: block;
  width: 100%;
  text-align: right;
}
.memberlist{
  p{line-height: 1.5em}
  .introduction{p{font-size: 14px}}
}
.spacer{
  display: block;
  width: 100%;
  height: 2px;
  border: none;
  margin: 24px auto;
}
.iblock{display:inline-block}
.mid{
  z-index: 1;
  .main{z-index: 1}
  .aside{z-index: 0}
}
.team{
  text-align: left;
  font-size: 0.9em;
  font-weight: 300;
  h1,h2,h3,h4,h5{
    margin: auto;
    color: $palette-mid;
    text-align: center;
  }
  small{
    font-size: 0.4em;
    line-height: 1.2em;}
  section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width:100%;
    }
  a{
    font-weight: 600;
    color: $blacky;
  }
}
footer{
  position: absolute;
  z-index: 2;
  
}
#header{
  z-index: 3;
}

</style>

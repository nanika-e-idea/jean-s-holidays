<template>
  <div class="aside">
      <div class="line">
        <img class="logoj" :src='logoJ'/> 
        <img :src='logoH'/> 
      </div>
    <img />  
  </div>
</template>
<script>
import logoJ from '~/assets/image/jllogo_ar-j.png'
import logoH from '~/assets/image/jllogo_ar-h.png'
export default {
  data(){
    return {
      logoJ,
      logoH,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.aside{
    display: block;
    @include pc {width: 100px};
    @include tab {width: 100px};
    @include spl {display:none;width: 0};
    height: auto;
    min-height: 400px;
    margin: 0;
    .line{
      position: fixed;
      width: 100px;
      @include tab {top: 130px}
      img{
        @include pc {
          width: 160px;
          margin-left: -30px;
          &.logoj{display: none}
        }
        @include tab {
          width: 120px;
          margin-left: -20px;
        }
        @include spl {display: none}
      }
    }
}
</style>
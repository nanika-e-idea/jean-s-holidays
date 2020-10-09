<template>
  <div class="aside">
    <div class="line">
      <img :src='logoJ'/>
    </div>  
  </div>
</template>
<script>
import logoJ from '~/assets/image/jllogo_ar-j.png'
export default {
  data(){
    return {
      logoJ,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.aside{
    display: block;
    @include pc {width: 100px};
    @include tab {display:none;width: 0};
    @include spl {display:none;width: 0};
    height: auto;
    min-height: 400px;
    margin: 0;
    z-index: 0;
    .line{
      position: fixed;
      width: 100px;
      img{
        @include pc {
        width: 160px;
        margin-left: -30px;
        }
        @include tab {display: none}
      }
    }
}
</style>
<template>
        <div class="magazin" v-bind:class = "orderby">
            <div class="article" v-for="(entryVal, entryKey) in iterationData" :key="entryKey" >
              <h3 v-html="entryVal['item']" />
              <div class="sentence">
                <img v-if="entryVal['image']" :src="entryVal['image']" :alt="entryVal['alt']" />
                <span v-html="entryVal['description']" />
              </div>
              <div class="navspace"></div>
          </div>
        </div>
</template>
<script>
export default {
 name: 'Magazin',
 props: {
   data: Array,
   reverse: Boolean,
 },
 computed: {
   iterationData() {
     let data = this.data

     return data
   },
   orderby() {
     let reverse = this.reverse
     if (reverse == true){
       return 'des'
     }else{
       return 'asc'
     }
   }
 },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
div.magazin{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  .article{
    position: relative;
    top: 0;
    padding: 0;
    margin: $margin-sub;
    text-align: center;
    overflow: hidden;
    .sentence{
      margin: auto;
      padding: 0;
      width: 100%;
      text-align: left;
      overflow: hidden;
      background-color: white;
      z-index: 2;
      img{
        margin: 0 1rem 1rem 1rem;
        @include pc {width: 200px};
        @include tab {
          width: calc(100% - 4rem); margin: 1rem 2rem
          };
      }
      h3{
        margin: 0 2rem;
      }
      div{
        margin: 1rem 2rem;
      }
    }
    .navspace{
      display: block;
      width: 100%;
      @include pc {height: 20px};
      @include tab {height: 50px};
    }
    @include pc {
      width: calc(50% - 1.5rem);
      &:nth-child(odd):last-child{
        width: calc(100% - 2rem);
        max-width: ($pc - 250px);
      }
    };
    @include tab {
      width: calc(50% - 2rem);
      &:nth-child(odd):last-child{
        width: calc(100% - 2rem);
        .sentence img{ 
          width: calc( 50% - 5rem);
        }
      }
    };
    @include spl {width: calc(100% - 2rem)};
    h3{
      display: block;
      position: relative;
      top: 0;
      left: 0;
      border-bottom: solid 1px #222;
      z-index: 1;
      @include pc {font-size: 4rem};
      @include tab {font-size: 2.5rem};
    }
  }
    &.asc{
      .article:nth-child(odd){
        .sentence img{float: right}
      }
      .article:nth-child(even){
        .sentence img{float: left}
      }
    }
    &.des{
      .article:nth-child(odd){
        .sentence img{float: left}
      }
      .article:nth-child(even){
        .sentence img{float: right}
      }
    }
}
</style>
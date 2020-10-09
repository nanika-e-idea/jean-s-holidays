<template>
        <ul class="zigzag" v-bind:class = "orderby">
            <li v-for="(entryVal, entryKey) in iterationData" :key="entryKey" >
                  <div class="picture">
                      <img :src="entryVal['image']" />
                  </div>
                  <div class="sentence">
                      <h3 v-html="entryVal['item']" />
                      <div v-html="entryVal['description']" />
                  </div>
            </li>
        </ul>
</template>
<script>
export default {
 name: 'Zigzag',
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
ul.zigzag{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  li{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: $margin-sub;
    text-align: center;
    .picture{
      width: 400px;
      max-width: calc(100% - 2rem);
      margin-bottom: 1rem;
      img{
        width: 100%;
      }
    }
    .sentence{
      width: 500px;
      max-width:  calc(100% - 2rem);
      text-align: left;
      h3{
        margin: 0 2rem;
      }
      div{
        margin: 1rem 2rem;
      }
      &::after{
        height: 1rem;
        @include pc {width: 223px};
        @include tab {width: 100%};
        @include sp {width: 100%};
      }
    }
    
  }
  &.asc{
    li:nth-child(odd){
      flex-direction: row;
    }
    li:nth-child(even){
      flex-direction: row-reverse;
    }
  }
  &.des{
    li:nth-child(odd){
      flex-direction: row-reverse;
    }
    li:nth-child(even){
      flex-direction: row;
    }
  }
}
</style>
<template>
    <ul class="biography">
        <li v-for="(entryVal, entryKey) in iterationData" :key="entryKey" >
              <div class="face">
                  <img :src="entryVal['image']" :alt="entryVal['alt']" />
              </div>
              <div class="sentence">
                  <div v-html="entryVal['biography']" />
              </div>
        </li>
    </ul>
</template>

<script>
export default {
 name: 'Biograpy',
 props: {
   data: Array
 },
 computed: {
   iterationData() {
     let data = this.data

     return data
   }
 },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.biography{
    padding: 0;
    margin: 0;
    li{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width:100%;
        max-width: 850px; 
        margin: $margin-sub;
        .face{
           box-sizing: border-box;
           width: 150px;
           height: 150px;
           border-radius: 50%;
           border: solid 5px $palette-point;
           overflow: hidden;
           img{
               width: 100%;
           }
        }
        .sentence{
            @include pc{width: 600px}
            @include tab{width: 80%}
            max-width: 100%;
            padding: 0 1rem;
            h3,p{
                margin: 1rem;
            }
        }
    }
}
</style>
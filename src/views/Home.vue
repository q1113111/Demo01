<template>
   <div>
      <Modal />
      <div class="customer">
         <img :src="src" alt="" />
      </div>
      <div class="top">
         <p class="top__txt">VIP</p>
      </div>
      <Banner />
      <List />
   </div>
</template>

<script>
import Banner from '@/components/Banner'
import List from '@/components/List'
import Modal from '@/components/Modal'
export default {
  data () {
    return {
      src: require('@/assets/img/icon/组 8.svg')
    }
  },
  components: {
    Banner,
    List,
    Modal
  }
}
</script>
<style lang="scss">
.top {
   height: 44px;
   background-color: $white;
   &__txt {
      padding: 14px 0 13px;
      text-align: center;
      color: $deep;
      font-weight: bold;
   }
}
.customer {
   position: fixed;
   z-index: 888;
   cursor: pointer;
   bottom: 116px;
   right: 16px;
   width: 52px;
   height: 52px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   background-color: $light-primary;
}
</style>

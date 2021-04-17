<template>
   <div class="banner">
      <div class="banner__box" :style="`background-image:url(${pushData.bgc});`">
         <!-- <div class="curve banner-curve"></div> -->
         <div class="icon banner-icon">
            <img :src="pushData.icon" alt="" class="icon__img" />
         </div>
         <div class="banner__pic">
            <img :src="icon" class="banner__img" />
         </div>
         <div class="banner__body">
            <h1 class="mb-1">{{ pushData.title }}</h1>
            <p class="txt mb-1">{{ pushData.txt }}</p>
            <p class="banner__date">{{ pushData.date }}</p>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Banner',
  data () {
    return {
      icon: require('@/assets/img/icon/icon-30-vip_normal.svg')
    }
  },
  computed: {
    ...mapState('List', {
      pushData: 'pushData'
    })
  }
}
</script>
<style lang="scss">
.banner {
   height: 183px;
   &-curve {
      background: radial-gradient(circle at top right, transparent 91px, $primary 0) top right !important;
   }
   &-icon {
      bottom: 32px !important;
   }
   &__box {
      background: no-repeat center center / cover;
      background-color: $light-primary;
      height: 100%;
      padding: 12px 0 14px;
      text-align: center;
      position: relative;
      z-index: 3;
      border-bottom-left-radius: 80px;
   }
   &__date {
      opacity: 0.72;
   }
}
</style>

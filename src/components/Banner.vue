<template>
   <div class="banner">
      <div class="banner__box">
         <div class="curve"></div>
         <div class="banner__pic">
            <img :src="banner.icon" class="banner__img" />
         </div>
         <div class="banner__body">
            <h1 class="mb-1">{{ banner.member }}</h1>
            <p class="txt mb-1">{{ banner.task }}</p>
            <p class="banner__date">{{ banner.data }}</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      banner: {
        icon: require('@/assets/img/icon/icon-30-vip_normal.svg'),
        member: '普通会员',
        task: '每日可领取3次任务',
        data: '2020.08.11止'
      }
    }
  }
}
</script>
<style lang="scss">
.banner {
   height: 183px;
   .curve{
      background: radial-gradient(circle at top right, transparent 91px, $primary 0) top right;
   }
   &__box {
      background: url("../assets/img/photo/會員底圖-04.png") no-repeat center center / cover;
      background-color: $light-primary;
      height: 100%;
      padding: 12px 0 14px;
      text-align: center;
      position: relative;
      z-index:3;
      &::before {
         content: "";
         @include position;
         background: url("../assets/img/icon/蒙版组 47.svg");
         width: 80px;
         height: 80px;
      }
   }
   &__date {
      opacity: 0.72;
   }
}
</style>

<template>
   <ul class="list">
      <li v-for="(item, index) of List" :key="index" class="list__item" :style="`background-image:url(${item.bgc});`">
         <div class="curve"></div>
         <div class="icon">
            <img :src="item.icon" alt="" class="icon__img" />
         </div>
         <div class="list__body">
            <div class="list__header">
               <h1 class="list__title">{{ item.title }}</h1>
            </div>
            <div class="list__box">
               <div class="txt">{{ item.txt }}</div>
               <h2 class="list__tag">{{ item.tag }}</h2>
            </div>
            <div class="list__box">
               <div class="txt">{{ item.count }}</div>
               <button @click="showHandler()" class="btn">立即加入</button>
            </div>
         </div>
      </li>
   </ul>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      List: [
        {
          bgc: require('@/assets/img/photo/會員底圖-06.png'),
          icon: require('@/assets/img/icon/蒙版组 35.svg'),
          title: '白银会员',
          txt: '每日可领取10次任务',
          tag: '￥330.00',
          count: '[1.20元/条]'
        },
        {
          bgc: require('@/assets/img/photo/會員底圖-02.png'),
          icon: require('@/assets/img/icon/蒙版组 36.svg'),
          title: '黄金会员',
          txt: '每日可领取19次任务',
          tag: '￥660.00',
          count: '[1.20元/条]'
        },
        {
          bgc: require('@/assets/img/photo/會員底圖-03.png'),
          icon: require('@/assets/img/icon/蒙版组 42.svg'),
          title: '铂金会员',
          txt: '每日可领取28次任务',
          tag: '￥990.00',
          count: '[1.20元/条]'
        },
        {
          bgc: require('@/assets/img/photo/會員底圖-01.png'),
          icon: require('@/assets/img/icon/蒙版组 33.svg'),
          title: '钻石会员',
          txt: '每日可领取99次任务',
          tag: '￥2990.00',
          count: '[1.20元/条]'
        },
        {
          bgc: require('@/assets/img/photo/會員底圖-05.png'),
          icon: require('@/assets/img/icon/蒙版组 40.svg'),
          title: '荣耀会员',
          txt: '每日可领取228次任务',
          tag: '￥5940.00',
          count: '[1.20元/条]'
        },
        {
          bgc: require('@/assets/img/photo/會員底圖-07.png'),
          icon: require('@/assets/img/icon/蒙版组 44.svg'),
          title: '尊耀会员',
          txt: '每日可领取338次任务',
          tag: '￥9899.00',
          count: '[1.20元/条]'
        }
      ]
    }
  },
  methods: {
    showHandler () {
      this.$emit('update:show', this.show)
    }
  }
}
</script>
<style lang="scss">
.list {
   &__item {
      background: no-repeat center bottom / cover;
      background-color: $primary;
      position: relative;
      z-index: 2;
      max-height: 118px;
      overflow: hidden;
      transition: 0.3s;
      &:nth-child(even) {
         background-color: $deep;
         .curve{
               background: radial-gradient(circle at top right, transparent 91px, $primary 0) top right;
         }
      }
      &::before {
         content: "";
         @include position();
      }
      &:hover {
         max-height: 148px;
      }
      &:hover .list__tag {
         transform: translateY(-35px);
      }
      &:hover .list__box:nth-child(3) {
         opacity: 1;
         transform: translateY(-15px);
      }
   }
   &__body {
      padding: 24px 30px 24px;
   }
   &__header {
      padding-left: 25px;
   }
   &__box {
      display: flex;
      padding: 0 30px;
      justify-content: space-between;
      align-items: flex-end;
      .txt {
         opacity: 0.6;
      }
      .btn {
         margin-right: -10px;
      }
   }
   &__box:nth-child(3) {
      opacity: 0;
      transition: 0.3s;
   }
   &__tag {
      transition: 0.3s;
   }
}
</style>

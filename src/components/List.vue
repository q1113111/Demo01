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
               <button @click="showHandler(item,index)" class="btn">立即加入</button>
            </div>
         </div>
      </li>
   </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapGetters('List', {
      List: 'rankList'
    })
  },
  methods: {
    showHandler (item, index) {
      this.$store.commit('List/SETINDEX', index)
      this.$store.commit('List/SETSHOW', this.show)
      this.$store.commit('List/SETLIST', item)
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
      transition: 0.3s;
      &:nth-child(even) {
         background-color: $deep;
         .curve{
               background: radial-gradient(circle at top right, transparent 91px, $primary 0) top right;
         }
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
      padding-left: 26px;
   }
   &__box {
      display: flex;
      padding-left: 26px;
      justify-content: space-between;
      align-items: flex-end;
      .txt {
         opacity: 0.6;
      }
      .btn {
         margin-right: -8px;
      }
   }
   &__box:nth-child(3) {
      opacity: 0;
      // padding-right: 0;
      transition: 0.3s;
   }
   &__tag {
      transition: 0.3s;
      width: 92px;
      text-align: right;
   }
}
</style>

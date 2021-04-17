<template>
   <div class="modal" :class="isShow ? 'is-show' : ''">
      <div class="modal__wrap">
         <h1 class="modal__title">提示</h1>
         <p class="modal__txt">確定花費{{listData.tag}}元</p>
         <p class="modal__txt">成為12個月的{{listData.title}}嗎?</p>
         <div class="modal__group">
            <button class="modal__btn" @click="cancelHandler()">取消</button>
            <button class="modal__btn" @click="sumbitHandler()">確認</button>
         </div>
      </div>
   </div>
</template>
<script>
import { mapState } from 'vuex'
const show = false
export default {
  computed: {
    ...mapState('List', {
      listData: 'getData',
      isShow: 'show'
    })
  },
  methods: {
    sumbitHandler () {
      this.$store.commit('List/PUSHLIST', this.listData)
      this.$store.commit('List/SETSHOW', show)
    },
    cancelHandler () {
      this.$store.commit('List/SETSHOW', show)
    }
  }
}
</script>
<style lang="scss">
.modal {
   position: fixed;
   opacity: 0;
   z-index: 1;
   transition: 0.3s;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: $black-CC;
   &.is-show {
      opacity: 1;
      z-index: 999;
   }
   &__wrap {
      width: 327px;
      transform: translateY(-65px);
      padding: 24px 24px 24px 33px;
      height: 205px;
      border-radius: 20px 20px 0px 80px;
      background-color: $white;
   }
   &__title {
      color: $black;
      margin-bottom: 10px;
   }
   &__txt {
      color: $light-purple;
      font-size: 0.875rem;
      opacity: 1;
   }
   &__group {
      margin-top: 28px;
      display: flex;
      justify-content: flex-end;
   }
   &__btn {
      @include btn($gray-300, $white, 52px);
      padding: 12px 31px;
      &:nth-child(2) {
         background-color: $light-primary;
         margin-left: 12px;
      }
   }
}
</style>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="(item,index) of navList" :key="index">
                <router-link :to="item.link" active-class="nav__active">
                        <div class="nav__link">
                            <img :src="item.icon" class="nav__icon">
                            <div>{{item.txt}}</div>
                        </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        {
          icon: require('@/assets/img/icon/组 1889.svg'),
          txt: '任務',
          link: '/about'
        },
        {
          icon: require('@/assets/img/icon/路径 808.svg'),
          txt: '任務',
          link: '/about'
        },
        {
          icon: require('@/assets/img/icon/fame.svg'),
          txt: 'VIP',
          link: '/'
        }, {
          icon: require('@/assets/img/icon/组 1889.svg'),
          txt: '我的',
          link: '/about'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

.nav{
    background-color: $white;
    position: fixed;
    z-index: 999;
    width: 100%;
    bottom: 0;
    &__active &__link{
        color: $primary;
    }
    &__list{
            padding: 15px 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    &__link{
        text-align: center;
        color: $gray;
        font-size: 12px;
    }
}
</style>

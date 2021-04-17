export default {
  namespaced: 'List',
  state: {
    listData: [
      {
        id: 2,
        bgc: require('@/assets/img/photo/會員底圖-06.png'),
        icon: require('@/assets/img/icon/蒙版组 35.svg'),
        title: '白银会员',
        txt: '每日可领取10次任务',
        tag: '￥330.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      },
      {
        id: 3,
        bgc: require('@/assets/img/photo/會員底圖-02.png'),
        icon: require('@/assets/img/icon/蒙版组 36.svg'),
        title: '黄金会员',
        txt: '每日可领取19次任务',
        tag: '￥660.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      },
      {
        id: 4,
        bgc: require('@/assets/img/photo/會員底圖-03.png'),
        icon: require('@/assets/img/icon/蒙版组 42.svg'),
        title: '铂金会员',
        txt: '每日可领取28次任务',
        tag: '￥990.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      },
      {
        id: 5,
        bgc: require('@/assets/img/photo/會員底圖-01.png'),
        icon: require('@/assets/img/icon/蒙版组 33.svg'),
        title: '钻石会员',
        txt: '每日可领取99次任务',
        tag: '￥2990.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      },
      {
        id: 6,
        bgc: require('@/assets/img/photo/會員底圖-05.png'),
        icon: require('@/assets/img/icon/蒙版组 40.svg'),
        title: '荣耀会员',
        txt: '每日可领取228次任务',
        tag: '￥5940.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      },
      {
        id: 7,
        bgc: require('@/assets/img/photo/會員底圖-07.png'),
        icon: require('@/assets/img/icon/蒙版组 44.svg'),
        title: '尊耀会员',
        txt: '每日可领取338次任务',
        tag: '￥9899.00',
        count: '[1.20元/条]',
        date: '2020.08.30止'
      }
    ],
    pushData: {
      id: 1,
      bgc: require('@/assets/img/photo/會員底圖-04.png'),
      icon: require('@/assets/img/icon/蒙版组 44.svg'),
      title: '普通会员',
      txt: '每日可领取3次任务',
      tag: '￥10.00',
      date: '2020.08.11止'
    },
    getData: '',
    show: false,
    index: 0
  },
  getters: {
    rankList (state) {
      return state.listData.sort((a, b) => {
        return a.id - b.id
      })
    }
  },
  mutations: {
    SETLIST (state, data) {
      state.getData = data
    },
    PUSHLIST (state, data) {
      const index = state.index
      console.log(data, index)
      state.listData.splice(index, 1, state.pushData)
      state.pushData = data
    },
    SETSHOW (state, data) {
      state.show = data
    },
    SETINDEX (state, data) {
      state.index = data
    }
  }
}

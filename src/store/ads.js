export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://images.samsung.com/is/image/samsung/p5/uk/smartphones/galaxy-s8/images/galaxy-s8_overview_kv_spaceman_type1_s.jpg?$ORIGIN_JPG$',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4488%252C2525%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-06%252Fad5ed8b0-996d-11e9-8beb-2ee08ac7ac1d%26client%3Da1acac3e1b3290917d92%26signature%3Df245a7606c708ab449b9700a0fd9fb9f28723ffe&client=amp-blogside-v2&signature=ee28d12b44fdd9ffb859951f35063da83dcf7bea',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://thenypost.files.wordpress.com/2019/09/somethings-killing-galaxys2.jpg?quality=80&strip=all&w=618&h=410&crop=1',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
      console.log(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'qqwqweqweqw'

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}

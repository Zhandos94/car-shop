<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px"
            >
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>

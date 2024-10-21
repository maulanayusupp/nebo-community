<template>
  <!-- Hero section -->
  <div class="relative home-banner">
    <!-- <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="mt-4" v-if="banners.length > 0">
        <Swiper
					navigation
          :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
          :thumbs="{  }"
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
					:autoplay="{
						delay: 4000,
						disableOnInteraction: true,
					}"
					:creative-effect="{
						prev: {
							shadow: false,
							translate: ['-20%', 0, -1],
						},
						next: {
							translate: ['100%', 0, 0],
						},
					}"

          >
            <SwiperSlide
                v-for="(item, index) in banners"
                :key="index">
                <div
                    class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden h-[300px] md:h-[550px]"
                    @click="clickable(item)">
                    <div class="absolute inset-0">
                        <img class="h-full w-full object-cover" :src="item.media_path" :alt="item.title" />
                        <!-- <div class="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 mix-blend-multiply" /> -->
                    </div>
                    <div class="relative h-full w-full">
                        <div class="px-4 absolute bottom-10 w-full">
                            <!-- Title -->
                            <h1
                                class="text-2xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl"
                                :class="ctaTextPosition(item)">
                                <span class="block text-white">
                                    {{ item.title }}
                                </span>
                            </h1>

                            <!-- Description -->
                            <p
                                v-html="item.description"
                                class="mt-6 text-xl text-gray-200"
                                :class="ctaTextPosition(item)">
                            </p>

                            <!-- Button -->
                            <div
                                class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex"
                                :class="ctaButtonPosition(item)">
                                <a
                                    v-if="item.cta_url && item.cta_label"
                                    :href="item.cta_url"
                                    target="blank"
                                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8">
                                    {{ item.cta_label }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  setup() {
    return {
    }
  },
  data() {
    return {
      banners: [
				{
					media_path: '/assets/images/sliders/slider_1.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_2.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_3.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_4.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_5.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_6.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
				{
					media_path: '/assets/images/sliders/slider_7.jpeg',
					title: '',
					description: '',
					cta_url: '',
					cta_label: '',
				},
			],
      isFetching: false,
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    clickable(item) {
      if (item.is_clickable && item.cta_url) {
        window.open(item.cta_url)
      }
    },
    ctaTextPosition(item) {
      let textPosition = 'text-center';

      switch (item.cta_position) {
          case 'left':
              textPosition = 'text-left';
              break;
          case 'right':
              textPosition = 'text-right';
              break;
          default:
              break;
      }

      return textPosition;
    },
    ctaButtonPosition(item) {
      let contentPosition = 'sm:justify-center';

      switch (item.cta_position) {
        case 'left':
          contentPosition = 'sm:justify-start';
          break;
        case 'right':
          contentPosition = 'sm:justify-end';
          break;
        default:
          break;
      }

      return contentPosition;
    },
  },
}
</script>

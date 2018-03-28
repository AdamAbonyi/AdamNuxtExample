<template>
  <div class="row imageGalllery">
    <div class="col-sm-6 col-md-4 fotogalerie" v-for="(img, index) in images" :key="index">
      <a :href="img.src"
         :alt="img.title"
         :title="img.title"
         rel="shadowbox[Gallery]">
        <img :src="img.src"
             alt="obrázek"
             class="imgCenter img img-responsive"><span></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          title: "Diving Photo",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb1.jpg"
        },
        {
          title: "Manufacturing",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb8.jpg"
        },
        {
          title: "Diving Photo",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb1.jpg"
        },
        {
          title: "Manufacturing",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb8.jpg"
        },
        {
          title: "Diving Photo",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb1.jpg"
        },
        {
          title: "Manufacturing",
          src: "https://ccrliberty.com/pcs/pcs_layout/foto-thumb8.jpg"
        }
      ]
    };
  },
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.img {
  max-width: 100%;
    height: auto;
}

.imageGalllery {
  margin-top: 50px;
  margin-bottom: 50px;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}

.fotogalerie {
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>

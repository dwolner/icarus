<template>
  <q-page class="">

      <div id="reelContainer">
          <video autoplay muted loop id="reelBackground">
            <source src="statics/media/MW REEL 10_18.mov" type="video/mp4">
          </video>
      </div>

      <div class="bg-black" style="padding: 1rem;">
          <!-- <div id="aboutSection" align="center" style="margin: 2rem 0;">
              <h4 class="text-white">WHO IS MEANWHILE?</h4>
              <q-icon name="fas fa-chevron-down" color="white" />
          </div> -->

          <div id="videoSection" align="center" style="margin: 0;">
              <div :align="windowWidth < 768 ? 'center' : 'right'" style="opacity: .4; padding: 0 .5rem;">
                  <q-btn size="xs"><h6 class="text-white" style="margin: 0; font-size: .9rem; font-weight: 900;">#{{selectedTag}}</h6></q-btn>
                  <q-btn size="xs" v-for="tag in allTags" v-if="tag !== selectedTag" @click="selectTag(tag)"><h6 class="text-grey" style="margin: 0; font-size: .9rem;">#{{tag}}</h6></q-btn>
              </div>

              <transition-group
                 v-if="!contentLoad"
                 id="contentGrid"
                 class="row justify-center"
                 name="staggered-fade"
                 tag="div"
                 v-bind:css="false"
                 v-on:before-enter="beforeEnter"
                 v-on:enter="enter"
                 >

                 <div
                     class="col-xs-12 col-sm-6 col-md-4 mediaItem"
                     align="center"
                     v-for="(item, index) in contentToDisplay"
                     :key="index"
                     :data-index="index"
                 >
                    <img :src="`statics/media/${item.imageFilename}`" />
                    <div class="centerHeaderHold">
                        <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto;" />

                        <div v-else class="centerHeader">
                            <h6 class="text-white" style="margin: 0; letter-spacing: 0.4rem;">{{item.title}}</h6>
                            <q-chip v-for="tag in item.tags" @click="selectTag(tag)" small style="margin: .5rem; cursor: pointer;">#{{tag}}</q-chip>
                        </div>
                    </div>
                </div>
            </transition-group>

        </div>

        <!-- <div id="storeSection" style="margin: 2rem 1rem;">
            <h4 class="text-white" style="margin: 0;">STORE</h4>

            <div class="row">
                <div v-for="n in 10" class="col-xs-6 col-sm-4 col-md-3 col-lg-2" style="padding: .5rem;">
                    <q-card class="bg-white" style="height: 300px;">

                    </q-card>
                </div>
            </div>
        </div>

        <div id="contactSection" style="margin: 2rem 1rem;">
            <h4 class="text-white" style="margin: 0;">CONTACT</h4>

            <div class="row">
                <q-btn>
                    <q-icon color="white" name="fas fa-envelope" />
                </q-btn>

                <q-btn>
                    <q-icon color="white" name="fab fa-instagram" />
                </q-btn>
            </div>
        </div> -->

      </div>


  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  props: ["urlTag"],

  data() {
    return {
      contentLoad: false,
      selectedTag: "featured"
    };
  },

  computed: {
    windowWidth() {
        return this.$store.state.windowWidth
    },

    content() {
      return this.$store.state.content;
    },

    contentToDisplay() {
      return this.selectedTag
        ? this.content.filter(item => {
            return item.tags.includes(this.selectedTag);
          })
        : [];
    },

    allTags() {
      let allTags = [];
      this.content.forEach(item => {
        item.tags.forEach(tag => {
          if (!allTags.includes(tag)) allTags.push(tag);
        });
      });

      return allTags;
    }
  },

  methods: {
    selectTag(tag) {
      // this.$router.push(`/filter/${tag}`);

      this.selectedTag = ''
      this.$nextTick(() => {
          this.selectedTag = tag;
      })
    },

    beforeEnter(el) {
      el.style.opacity = 0;
      // el.style.backgroundColor = "#000";
    },

    enter(el, done) {
      console.log("ENTER: ", el, done);
      var delay = el.dataset.index * 50;
      setTimeout(() => {
        this.Velocity(
          el,
          { opacity: 1 },
          { easing: "easeInSine", complete: done }
        );
      }, delay);
    }
  },

  watch: {
    urlTag() {
        if (this.urlTag) {
          this.selectedTag = ''
          this.$nextTick(() => {
              this.selectedTag = this.urlTag;
          })
        }
    }
  },

  created() {
    // setTimeout(() => {
    //   this.contentLoad = false;
    // }, 3000);

    console.log("TAG? ", this.urlTag);

    if (this.urlTag) {
      this.selectedTag = ''
      this.$nextTick(() => {
          this.selectedTag = this.urlTag;
      })
    }
  }
};
</script>

<style>
#reelBackground {
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -100;
  right: 0;
  bottom: 0;
  /* background: url('../statics/media/meanwhile_icon.png') no-repeat center center; */
  background-size: cover;
  overflow: hidden;
}

#reelContainer {
  height: 600px;
  width: 100%;
  /* background: url('../statics/media/meanwhile_icon.png') no-repeat center center; */
  background-size: cover;
  position: relative;
  overflow: hidden;
}

#contentGrid {
  padding: 1rem;
}

.mediaItem {
  position: relative;
  padding: 0.5rem;
}

.mediaItem img {
  border-radius: 0.25rem;
  max-width: 100%;
  width: 100%;
}

.centerHeaderHold {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: background 0.5s, opacity 0.5s;
  transition: background 0.5s, opacity 0.5s;
}

.centerHeader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  padding: 1rem;
}

.centerHeaderHold:hover {
  opacity: 1;
}

@media only screen and (max-width: 1200px) {
    #reelContainer {
        height: 500px;
    }
}

@media only screen and (max-width: 992px) {
    #reelContainer {
        height: 400px;
    }
}
</style>

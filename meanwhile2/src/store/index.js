import Vue from "vue";
import Vuex from "vuex";

import example from "./module-example";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      example
    },

    state: {
      windowWidth: '',
      content: [{
        "imageFilename": "lourdiz.jpg",
        "title": "LOURDIZ - SUICIDE DOWN FT. LIL GOTIT",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/Uykia839C68"
      }, {
        "imageFilename": "overhim.jpg",
        "title": "EVIE IRIE - OVER HIM",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/_wJo23ikakE"
      }, {
        "imageFilename": "zer0.jpg",
        "title": "KREWELLA - ZERO TRAILER",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/HP28eanVPJA"
      }, {
        "imageFilename": "seance.jpg",
        "title": "IMAN - SÉANCE",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/64gU5EvLEz8"
      }, {
        "imageFilename": "riverrundry.png",
        "title": "AQ - RIVER RUN DRY",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/ESdunfZPrv0"
      }, {
        "imageFilename": "deepblues.png",
        "title": "DAN ATTA - DEEP BLUES",
        "tags": ["music"],
        "embedURL": "https://www.youtube.com/embed/9iawkgbO6Q4"
      }, {
        "imageFilename": "santamonica.png",
        "title": "MOHA LA SQUALE - SANTA MONICA",
        "tags": ["music"],
        "embedURL": "https://www.youtube.com/embed/__LHwv1aAlA"
      }, {
        "imageFilename": "youll_live.png",
        "title": "YOU'LL LIVE",
        "tags": ["featured", "original"],
        "embedURL": "https://player.vimeo.com/video/369393588"
      }, {
        "imageFilename": "aqflorida.jpg",
        "title": "AQ - FLORIDA",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/VzdIoYPFVJk"
      }, {
        "imageFilename": "nopressure.jpg",
        "title": "LOGIC - NO PRESSURE FREESTYLE",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/eARR43lqqCA"
      }, {
        "imageFilename": "petermanos.jpg",
        "title": "PETER MANOS - YOU DON'T KNOW ME",
        "tags": ["featured", "vfx"],
        "embedURL": "https://www.youtube.com/embed/tUVkynKSIyw"
      }, {
        "imageFilename": "schoolboyq.jpg",
        "title": "SCHOOLBOY Q - LIES FT. TY DOLLA $IGN & YG",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/BxFk-6KppE4"
      }, {
        "imageFilename": "allday.jpg",
        "title": "JOHN LINDAHL - ALL DAY",
        "tags": ["featured", "music"],
        "embedURL": "https://www.youtube.com/embed/Hs5t2IobO2k"
      }, {
        "imageFilename": "atnight.jpg",
        "title": "AQ - @NIGHT",
        "tags": ["music", "vfx"],
        "embedURL": "https://www.youtube.com/embed/MtPb3_K_78c"
      }, {
        "imageFilename": "DRIP_cover.png",
        "title": "DRIP",
        "tags": ["featured", "original"],
        "embedURL": "https://player.vimeo.com/video/333558019?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "STARRO.jpg",
        "title": "REEL 2019",
        "tags": ["original"],
        "fileName": "MW_reel_9-9.mp4"
      }, {
        "imageFilename": "STARRO.jpg",
        "title": "REEL 2018",
        "tags": ["original"],
        "fileName": "MW_reel_12-7.mp4"
      }, {
        "imageFilename": "CAPTAIN_Frame.png",
        "title": "AQ - THE CAPTAIN",
        "tags": ["music", "vfx"],
        "embedURL": "https://www.youtube.com/embed/RpVcPfEmkG0"
      }, {
        "imageFilename": "DRE_cover.png",
        "title": "LSP",
        "tags": ["music"],
        "embedURL": "https://www.youtube.com/embed/X272Cy9ON2E"
      }, {
        "imageFilename": "TABLETSKY.png",
        "title": "APPLE IPAD - INSPIRATION",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/222603737?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "STARRO.jpg",
        "title": "STARRO - FANTASY",
        "tags": ["music"],
        "embedURL": "https://player.vimeo.com/video/236974574?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "LIGHTYEAR.png",
        "title": "LIGHTYEAR",
        "tags": ["commercial", "vfx"],
        "embedURL": "https://player.vimeo.com/video/117845490?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "image_123986672.JPG",
        "title": "ADIDAS - YEEZY CALABASAS",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/263170466?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "HUNTR-Thumb.jpg",
        "title": "HUNTR - HIGHER",
        "embedURL": "https://www.youtube.com/embed/0uISF_lQVqc",
        "tags": ["music", "vfx"]
      }, {
        "imageFilename": "Chela-Website-Frame.png",
        "title": "SHUT YOU UP",
        "tags": ["music"],
        "embedURL": "https://www.youtube.com/watch?v=KjVz5r1fRxE"
      }, {
        "imageFilename": "Finding-Waldo.png",
        "title": "FINDING WALDO",
        "tags": ["original"],
        "embedURL": "https://player.vimeo.com/video/242662816?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "IN_THE_NIGHT.png",
        "title": "THE RITUALS",
        "tags": ["music", "vfx"],
        "embedURL": "https://player.vimeo.com/video/134118911?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "TELEPORT.png",
        "title": "TELEPORT",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/181953178?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "LEECH-COVER.jpg",
        "title": "LEECH",
        "tags": ["commercial", "original"],
        "embedURL": "https://player.vimeo.com/video/265242801?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "PIONEERS_Cover.png",
        "title": "PIONEERS",
        "tags": ["music"],
        "embedURL": "https://player.vimeo.com/video/227004530?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "ASICS.png",
        "title": "ASICS",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/143774781?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "LUNA_CYCLE.png",
        "title": "LUNA CYCLE",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/167947401?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "SLEEPING_ALONE.png",
        "title": "SLEEPING ALONE",
        "tags": ["music"],
        "embedURL": "https://player.vimeo.com/video/157215044?color=ffffff&autoplay=1"
      }, {
        "imageFilename": "PBR30_cover.jpg",
        "title": "PBR 30",
        "tags": ["commercial"],
        "embedURL": "https://player.vimeo.com/video/297875292?color=ffffff&autoplay=1"
      }]
    },

    mutations: {
      windowWidth(state, width) {
        state.windowWidth = width
      },
    }
  });

  return Store;
}

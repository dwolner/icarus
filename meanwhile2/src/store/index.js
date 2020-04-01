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
          "title": "LOURDIZ - SUICIDE DOWN FT. LIL GOTIT",
          "tags": ["featured", "music"],
          "imageFilename": "lourdiz.jpg",
          "embedURL": "https://www.youtube.com/embed/Uykia839C68",
          "fileName": ""
        },
        {
          "title": "EVIE IRIE - OVER HIM",
          "tags": ["featured", "music"],
          "imageFilename": "overhim.jpg",
          "embedURL": "https://www.youtube.com/embed/_wJo23ikakE",
          "fileName": ""
        },
        {
          "title": "KREWELLA - ZERO TRAILER",
          "tags": ["featured", "music"],
          "imageFilename": "zer0.jpg",
          "embedURL": "https://www.youtube.com/embed/HP28eanVPJA",
          "fileName": ""
        },
        {
          "title": "IMAN - SÉANCE",
          "tags": ["featured", "music"],
          "imageFilename": "seance.jpg",
          "embedURL": "https://www.youtube.com/embed/64gU5EvLEz8",
          "fileName": ""
        },
        {
          "title": "SCHOOLBOY Q - LIES FT. TY DOLLA $IGN & YG",
          "tags": ["featured", "music"],
          "imageFilename": "schoolboyq.jpg",
          "embedURL": "https://www.youtube.com/embed/BxFk-6KppE4",
          "fileName": ""
        },
        {
          "title": "YOU'LL LIVE",
          "tags": ["featured", "original"],
          "imageFilename": "youll_live.png",
          "embedURL": "https://player.vimeo.com/video/369393588",
          "fileName": ""
        },
        {
          "title": "AQ - FLORIDA",
          "tags": ["featured", "music"],
          "imageFilename": "aqflorida.jpg",
          "embedURL": "https://www.youtube.com/embed/VzdIoYPFVJk",
          "fileName": ""
        },
        {
          "title": "LOGIC - NO PRESSURE FREESTYLE",
          "tags": ["featured", "music"],
          "imageFilename": "nopressure.jpg",
          "embedURL": "https://www.youtube.com/embed/eARR43lqqCA",
          "fileName": ""
        },
        {
          "title": "PETER MANOS - YOU DON'T KNOW ME",
          "tags": ["featured", "vfx"],
          "imageFilename": "petermanos.jpg",
          "embedURL": "https://www.youtube.com/embed/tUVkynKSIyw",
          "fileName": ""
        },
        {
          "title": "DRIP",
          "tags": ["featured", "original"],
          "imageFilename": "DRIP_cover.png",
          "embedURL": "https://player.vimeo.com/video/333558019?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "JOHN LINDAHL - ALL DAY",
          "tags": ["featured", "music"],
          "imageFilename": "allday.jpg",
          "embedURL": "https://www.youtube.com/embed/Hs5t2IobO2k",
          "fileName": ""
        },
        {
          "title": "AQ - RIVER RUN DRY",
          "tags": ["featured", "music"],
          "imageFilename": "riverrundry.png",
          "embedURL": "https://www.youtube.com/embed/ESdunfZPrv0",
          "fileName": ""
        },
        {
          "title": "DAN ATTA - DEEP BLUES",
          "tags": ["music"],
          "imageFilename": "deepblues.png",
          "embedURL": "https://www.youtube.com/embed/9iawkgbO6Q4",
          "fileName": ""
        },
        {
          "title": "MOHA LA SQUALE - SANTA MONICA",
          "tags": ["music"],
          "imageFilename": "santamonica.png",
          "embedURL": "https://www.youtube.com/embed/__LHwv1aAlA",
          "fileName": ""
        },
        {
          "title": "AQ - @NIGHT",
          "tags": ["music", "vfx"],
          "imageFilename": "atnight.jpg",
          "embedURL": "https://www.youtube.com/embed/MtPb3_K_78c",
          "fileName": ""
        },
        {
          "title": "REEL 2019",
          "tags": ["original"],
          "imageFilename": "STARRO.jpg",
          "embedURL": "",
          "fileName": "MW_reel_9-9.mp4"
        },
        {
          "title": "REEL 2018",
          "tags": ["original"],
          "imageFilename": "STARRO.jpg",
          "embedURL": "",
          "fileName": "MW_reel_12-7.mp4"
        },
        {
          "title": "AQ - THE CAPTAIN",
          "tags": ["music", "vfx"],
          "imageFilename": "CAPTAIN_Frame.png",
          "embedURL": "https://www.youtube.com/embed/RpVcPfEmkG0",
          "fileName": ""
        },
        {
          "title": "LSP",
          "tags": ["music"],
          "imageFilename": "DRE_cover.png",
          "embedURL": "https://www.youtube.com/embed/X272Cy9ON2E",
          "fileName": ""
        },
        {
          "title": "APPLE IPAD - INSPIRATION",
          "tags": ["commercial"],
          "imageFilename": "TABLETSKY.png",
          "embedURL": "https://player.vimeo.com/video/222603737?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "STARRO - FANTASY",
          "tags": ["music"],
          "imageFilename": "STARRO.jpg",
          "embedURL": "https://player.vimeo.com/video/236974574?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "LIGHTYEAR",
          "tags": ["commercial", "vfx"],
          "imageFilename": "LIGHTYEAR.png",
          "embedURL": "https://player.vimeo.com/video/117845490?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "ADIDAS - YEEZY CALABASAS",
          "tags": ["commercial"],
          "imageFilename": "image_123986672.JPG",
          "embedURL": "https://player.vimeo.com/video/263170466?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "HUNTR - HIGHER",
          "tags": ["music", "vfx"],
          "imageFilename": "HUNTR-Thumb.jpg",
          "embedURL": "https://www.youtube.com/embed/0uISF_lQVqc",
          "fileName": ""
        },
        {
          "title": "SHUT YOU UP",
          "tags": ["music"],
          "imageFilename": "Chela-Website-Frame.png",
          "embedURL": "https://www.youtube.com/watch?v=KjVz5r1fRxE",
          "fileName": ""
        },
        {
          "title": "FINDING WALDO",
          "tags": ["original"],
          "imageFilename": "Finding-Waldo.png",
          "embedURL": "https://player.vimeo.com/video/242662816?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "THE RITUALS",
          "tags": ["music", "vfx"],
          "imageFilename": "IN_THE_NIGHT.png",
          "embedURL": "https://player.vimeo.com/video/134118911?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "TELEPORT",
          "tags": ["commercial"],
          "imageFilename": "TELEPORT.png",
          "embedURL": "https://player.vimeo.com/video/181953178?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "LEECH",
          "tags": ["commercial", "original"],
          "imageFilename": "LEECH-COVER.jpg",
          "embedURL": "https://player.vimeo.com/video/265242801?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "PIONEERS",
          "tags": ["music"],
          "imageFilename": "PIONEERS_Cover.png",
          "embedURL": "https://player.vimeo.com/video/227004530?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "ASICS",
          "tags": ["commercial"],
          "imageFilename": "ASICS.png",
          "embedURL": "https://player.vimeo.com/video/143774781?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "LUNA CYCLE",
          "tags": ["commercial"],
          "imageFilename": "LUNA_CYCLE.png",
          "embedURL": "https://player.vimeo.com/video/167947401?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "SLEEPING ALONE",
          "tags": ["music"],
          "imageFilename": "SLEEPING_ALONE.png",
          "embedURL": "https://player.vimeo.com/video/157215044?color=ffffff&autoplay=1",
          "fileName": ""
        },
        {
          "title": "PBR 30",
          "tags": ["commercial"],
          "imageFilename": "PBR30_cover.jpg",
          "embedURL": "https://player.vimeo.com/video/297875292?color=ffffff&autoplay=1",
          "fileName": ""
        }
      ]
    },

    mutations: {
      windowWidth(state, width) {
        state.windowWidth = width
      },
    }
  });

  return Store;
}

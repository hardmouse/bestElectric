<template>
  <div>
    <div class="topSpacing"></div>
    <div class="headerbelt">
      <div class="container">
        <h1 class="headerfont text-lg-left mt-4 mb-0">{{title}}</h1>
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <!-- <div class="col-md-12 d-flex justify-content-center mb-5">
            <button
              type="button"
              class="btn btn-outline-black waves-effect filter"
              data-rel="all"
            >All</button>
            <button
              type="button"
              class="btn btn-outline-black waves-effect filter"
              data-rel="1"
            >Mountains</button>
            <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Sea</button>
          </div> -->
          <!-- Grid column -->
        </div>
        <!-- Grid row -->

        <!-- Grid row -->
        <div class="gallery" id="gallery">
          <!-- Grid column -->
          <div v-for="img in galleryImages" :key="img.id" class="mb-3 pics animation all" :class="2">
            <img
              class="img-fluid"
              :src=img.url
              alt="Card image cap"
              :group=img.grp
            >
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </div>
  </div>
</template>




<style scoped>
.topSpacing {
  background-image: url("../assets/images/wall/clientGallery.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15vh;
}
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
}
.gallery .pics {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
}
.gallery .animation {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

@media (max-width: 450px) {
  .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
}

@media (max-width: 400px) {
  .btn.filter {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}
</style>
<script>
export default {
  data () {
    return {
      title: 'CLIENT GALLERY',
      show: true,
      qc:0,
    userInput: 0,
    randomNumber: 5,
      homeSlogan: [
        "Providing exceptional electrical contracting services across the greater Toronto area.",
        "Our highly skilled and experienced team of experts drive our company’s success!",
        "Quality proven electrical contracting services for multiple repeat clients.",
        "Located in Markham, Ontario we service the greater Toronto area.",
        "Professional electrical contractors serving Southern Ontario since 1994.",
        "Experts in commercial, institutional, industrial, and residential electrical contracting services."
      ],
      galleryImages: [
      {url:"static/images/gallery/g01.jpeg", grp:1},
      {url:"static/images/gallery/g02.jpeg", grp:1},
      {url:"static/images/gallery/g03.jpeg", grp:3},
      {url:"static/images/gallery/g04.jpeg", grp:1},
      {url:"static/images/gallery/g05.jpeg", grp:2},
      {url:"static/images/gallery/g06.jpeg", grp:1},
      {url:"static/images/gallery/g07.jpeg", grp:3},
      {url:"static/images/gallery/g08.jpeg", grp:1},
      {url:"static/images/gallery/g09.jpeg", grp:2},
      {url:"static/images/gallery/g10.jpeg", grp:1},
      {url:"static/images/gallery/g11.jpeg", grp:1},
      {url:"static/images/gallery/g12.jpeg", grp:2},
      {url:"static/images/gallery/g13.jpeg", grp:1},
      {url:"static/images/gallery/g14.jpeg", grp:3},
      {url:"static/images/gallery/g15.jpeg", grp:4},
      {url:"static/images/gallery/g16.jpeg", grp:3},
      {url:"static/images/gallery/g17.jpeg", grp:1},
      {url:"static/images/gallery/g18.jpeg", grp:2},
      {url:"static/images/gallery/g19.jpeg", grp:4},
      {url:"static/images/gallery/g20.jpeg", grp:1},
      {url:"static/images/gallery/g21.jpeg", grp:2},
      {url:"static/images/gallery/g22.jpeg", grp:1},
      {url:"static/images/gallery/g23.jpeg", grp:4},
      {url:"static/images/gallery/g24.jpeg", grp:3},
      {url:"static/images/gallery/g25.jpeg", grp:2},
      {url:"static/images/gallery/g26.jpeg", grp:3},
      {url:"static/images/gallery/g27.jpeg", grp:1},
      {url:"static/images/gallery/g28.jpeg", grp:2},
      {url:"static/images/gallery/g29.jpeg", grp:1},
      {url:"static/images/gallery/g30.jpeg", grp:3}],
    }
  },
  methods: {
    getRandomNumber: function(min, max) {
      return Math.floor(Math.random() * (max -min +1)) + min;
    },
  },
  computed: {
    iNum: function() {
      return this.getRandomNumber(1, 3);
    }
  },
}

$(function() {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});
</script>




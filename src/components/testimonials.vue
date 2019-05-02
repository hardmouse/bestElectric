<template>
  <div>
    <div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer psi">
              <p>
       </p>
<br><br><br><br><br><br>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'testimonials',
  data () {
    return {
      title: 'Testimonials',
      body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, mentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
    }
  },
  methods: {
     onClick(val) {
      //  console.log(this.backgroundImage)
      this.$router.push({name: 'home'}); 
     }
  },
    created: function() {
		this.$parent.prodEnabled=false;
        window.scrollTo(0, 0);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.topSpacing{
  background-image: url("../assets/images/wall/testimonials.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:15vh;
}
 
.psi{
	font-family:'gothic', Arial, Helvetica, sans-serif;
}
</style>

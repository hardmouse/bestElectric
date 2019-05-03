<template>
  <div>
    <div class="topSpacing"></div>

        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer" style="margin-top:0px;">



					

	    </div>

	  </div>

	</div>

</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'CONTACT US',
      show: true
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
  background-image: url("../assets/images/wall/contact.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:15vh;
}
h3{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	margin-top:30px;
	font-weight:bold;
}
p{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	font-size: 16px;
}
</style>

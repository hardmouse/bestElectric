<template>
  <div>
    <div class="topSpacing">
      <div class="col-sm-10 offset-sm-1 ">
        <div class="middleBelt">BEST ELECTRIC CO.
          <div class="subBelt">
            Experts in commercial, institutional, industrial, and residential electrical contracting services.
          </div>
        </div>
      </div>
    </div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">OUR  SERVICES</div></div>
          </div>
          <div class="container bodyContainer psi">
              <p>

With over thirty years of experience, our company covers an extensive array of electrical contracting services to accommodate a diverse range of needs.
<br><br>

<b>COMMERCIAL</b> 
<br>
List and/or description of types of commercial electrical contracting here. 
<br><br>
<b>INSTITUTIONAL</b> 
<br>
List and/or description of types of institutional electrical contracting here. 
<br><br>
<b>INDUSTRIAL</b> 
<br>
List and/or description of types of industrial electrical contracting here. 
<br><br>
<b>RESIDENTIAL</b> 
<br>
List and/or description of types of residential electrical contracting here. 
<br><br>
            </p>
<br><br><br><br><br><br>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data () {
    return {
      title: 'Our Services',
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
    background-image: url("../assets/images/wall/ourServices.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top:15vh;
  }
 
.homeBackground{
  position:absolute;
  z-index: -10;
  margin: 0px;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.middleBelt {
  margin-top: 0;
}

@media screen and (max-width: 812px) {
  .quoteBodyText {font-size: 14px;line-height: 15px;padding-left: 2em;}
  .quoteBodyTextWhite {font-size: 14px;line-height: 15px;padding-left: 2em;}
  .myBodyText {font-size: 4vw; margin-bottom:0px; padding-top:0; padding-left: 0;}
  
  .middleBelt{
    padding: 0 10px 10px 10px;
    font-size: 30px;
  }
  .subBelt{
    font-size: 12px;
  }
}
</style>


<template>
<div>
  <div class="homeContainer vertical-center">
      <transition name="fade">
        <img :src="homeImageWhite[this.$parent.hpNum]" :key="homeImageWhite[this.$parent.hpNum]" class="img-responsive homeBackground">
      </transition>
      <div class="container">
        <div class="col-sm-10 offset-sm-1">
              <transition name="bounce">
                <div class="middleBelt">BEST ELECTRIC CO.
                  <div class="subBelt" v-html="homeSlogan[this.$parent.hpNum]" v-if="this.$parent.homeTextShow">
                    Professional electrical contractors serving Southern Ontario since 1994.
                    </div>
                  </div>
              </transition>
              <!-- <transition name="bounce">
                <p class="myBodyText">{{ body }}</p>
              </transition>
              <transition name="slide-fade">
                <p v-html="quoteText[this.$parent.hpNum]" class="quoteBodyTextWhite" v-if="this.$parent.homeTextShow"></p>
              </transition> -->
        </div>
      </div>
  </div>
  <div class="headerbelt">
    <div class="container">
      <div class="headerfont">WHY BEST ELECTRIC ?</div>
      <p>For over thirty years, BEST Electric Co. has been serving the greater Toronto area and continues to thrive as a leading electrical contracting provider for our commercial, institutional, industrial and residential clients.
                BEST Electric Co. is known for maintaining the highest standards of workmanship and safety. We pride ourselves on our exceptional service and unmatched customer satisfaction.
            Our team of highly skilled experts employs crafted and time-tested methodologies to provide our clients with top quality, industry standard work.
            At BEST Electric Co., our name says it all. We back up our claim with multiple satisfied clients spanning over thirty years of our existence.
      <br><br><br>
      </p>
      
    </div>
  </div>
 

  </div>
</div>
  
</template>
  
<script>
export default {
  data () {
    return {
      title: 'Best Electric',
      body: 'Industrial | Commercial | Residential',
      show: true,
      qc:0,
      homeImage: ["static/images/circuitBoard.jpg",
      "static/images/cpu.jpg",
      "static/images/escalator.jpg",
      "static/images/electronic.jpg",
      "static/images/nightStreet.jpg",
      "static/images/arduino.jpg"],
      homeSlogan: [
        "Providing exceptional electrical contracting services across the greater Toronto area.",
        "Our highly skilled and experienced team of experts drive our company’s success!",
        "Quality proven electrical contracting services for multiple repeat clients.",
        "Located in Markham, Ontario we service the greater Toronto area.",
        "Professional electrical contractors serving Southern Ontario since 1994.",
        "Experts in commercial, institutional, industrial, and residential electrical contracting services."
      ],
      homeImageWhite: ["static/images/wall_1.jpg",
      "static/images/wall_2.jpg",
      "static/images/wall_3.jpg",
      "static/images/wall_4.jpg",
      "static/images/wall_5.jpg",
      "static/images/wall_6.jpg"],
      currentText:"",
      quoteText:[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl ex, rutrum sit amet erat vestibulum, luctus pharetra augue.<br><br><i>ligula Fringilla, Director of Operations</i><br><b>Proin sollicitudin</b>",
        "Sed vitae ullamcorper augue. Integer aliquam finibus metus, sit amet fringilla elit bibendum ullamcorper. Aenean sit amet quam a lectus vulputate accumsan. Phasellus lobortis ante vel aliquam maximus.<br><br><i>Vestibulum volutpat, CEO</i><br><b>Proin sollicitudin</b>",
        "Duis dignissim tellus id arcu lacinia convallis. Etiam quis ultrices dolor, ut ultricies sapien.<br><br><i>Debbie McAdam, Administration</i><br><b>Proin sollicitudin</b>",
        "Vestibulum volutpat arcu sed facilisis gravida. Duis sagittis iaculis turpis vitae malesuada.<br><br><i>Happy Minor Sports Administrator</i>",
        "Suspendisse potenti. Proin sollicitudin, arcu tincidunt tempus tempus, ligula tellus fringilla lectus, rhoncus luctus lacus odio vel diam.<br><br><i>Etiam Qltrices Volor</i>",
        "Phasellus et tortor viverra, fringilla ipsum eget, tempus sapien. Nullam pretium arcu aliquet ligula ullamcorper gravida.<br><br><i>Ultrices Dolor</i>",
      ],
    }
  },
  methods: {
     onClick(val) {
      //  console.log(this.backgroundImage)
      this.$router.push({name: 'aboutUs'}); 
     },
     onColorClick(val) {
      this.$parent.onBackgroundClick('a')
     },
     onBcClick() {
      this.show = !this.show
      this.$parent.homeTextShow = !this.$parent.homeTextShow
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
.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  /*align-items: center;*/ /*v-align to middle*/
}
.myBodyText {
  white-space: nowrap;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: left;
  margin-left: 1em;
  border: 0px solid #0F0;
  text-shadow: 0 0 8px #FFF, 0 0 19px #FFF;
  opacity: 0.8;
  filter: alpha(opacity=80);
  color: #000;
  font-size: 2.5vw;
  letter-spacing: 0px;
}
.contentBody{
  margin-top:30px;
  margin-bottom:30px;
	font-family:'gothic', Arial, Helvetica, sans-serif;
  text-align:left;
  
}
.supportContent{
  margin-top:30px;
  margin-bottom:30px;
  border: 10px solid white;
  resize: vertical;
}
.supportImage{
  width:100%;
  display: block;
  margin: 0 auto;
  padding-bottom:12px;
}
.quoteBodyText{
	font-family:'gothic', Arial, Helvetica, sans-serif;
  padding-left: 2em;
  width: 100%;
  color: #FFF;
  /*font-size: 10px;*/
  font-size: 16px;
  text-align: left;
  text-shadow: 1px 1px 2px #000000, 0px 0px 4px #000000, 2px 2px 8px #000000;
}
.quoteBodyTextWhite{
	font-family:'gothic', Arial, Helvetica, sans-serif;
  padding-left: 2em;
  width: 100%;
  color: #000;
  /*font-size: 10px;*/
  font-size: 16px;
  text-align: left;
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
@media screen and (max-width: 400px) {
  .quoteBodyText {font-size: 12px;line-height: 15px;}
  .quoteBodyTextWhite {font-size: 12px;line-height: 15px;}
  .myBodyText {font-size: 5vw; margin-bottom:0px;padding-top:0px;}
}
.myTitleColor1 {
  background-color: #0079C1;
}
.myTitleColor2 {
  background-color: #333333;
}
.myTitleColor3 {
  background-color: #1e961e;
}
.myTitleColor4 {
  background-color: #b45a00;
}
.homeBackground{
  position:absolute;
  z-index: -10;
  margin: 0px;
  background-position: center center;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.homeContainer {
  height:100vh;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<template>
  <div id="app" class="my-fluid-container">
    <div class="indexNav">
      <div :class="currentClass[this.cNum]">
        <router-link to="/home" class="topnav-item leftLogo">
          <img src="./assets/images/site/logoY.png" alt="Best Electric - Canada" border="0" width="168">
        </router-link>
        <router-link to="/aboutUs" :class="['topnav-item',this.$route.name == 'aboutUs'?'activeTab':'', 'left']"> | ABOUT US</router-link>
        <!-- <router-link to="/Products" :class="['topnav-item', prodEnabled == true?'activeTab':'', 'left']">Link 2</router-link> -->
        <router-link to="/ourServices" :class="['topnav-item',this.$route.name == 'ourServices'?'activeTab':'', 'left']"> | OUR SERVICES</router-link>
        <router-link to="/clientGallery" :class="['topnav-item',this.$route.name == 'clientGallery'?'activeTab':'', 'left']"> | CLIENT GALLERY</router-link>
        <router-link to="/testimonials" :class="['topnav-item',this.$route.name == 'testimonials'?'activeTab':'', 'left']"> | TESTIMONIALS</router-link>
        <router-link to="/careers" :class="['topnav-item',this.$route.name == 'careers'?'activeTab':'', 'left']"> | CAREERS</router-link>
        <router-link to="/contact" :class="['topnav-item',this.$route.name == 'contact'?'activeTab':'', 'left']"> | CONTACT US</router-link>
        <router-link to="" class="icon topnav-item rightMenu" @click.native="onExpand()"><img src="./assets/images/site/menu.gif" border="0"></router-link>
        <!-- <router-link to="" class="topnav-item right" @click.native="loginShow = !loginShow">Register</router-link>
        <router-link to="/admin" :class="['topnav-item',this.$route.name == 'Administrator'?'activeTab':'', 'right']">Admin Login</router-link> --> 
        <!--<font style="color:#FFF;">
        {{scrolled}}
        {{yNum}}
        {{screenWidth}}
        </font>-->
        <!--<a  href="javascript:void(0);" class="topnav-item left">({{this.$route.name}})</a>-->
      </div>
    </div>

    <router-view></router-view>

     <div class="beFooter">
       <div class="container">
          <div class="row footerText">
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">BEST ELECTRIC CO.</p>
                  (A DIVISION OF MEENA ENTERPRISES.)<br>
                  195 Clayton Dr.<br>
                  Markham, Ontario<br>
                  M1S 5A8 <br>
                  Tel: (647) 718-0978<br>
                  <a href="mailto:bestinfo@bestelectric.ca">bestinfo@bestelectric.ca</a><br>
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">ASSOCIATIONS</p>
                  <img src="./assets/images/site/partners-logo-ECAO.png" class="img-responsive"/>
                  <img src="./assets/images/site/electrical-safety-authority.png" class="img-responsive" />
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">SUPPORT</p>
                  <router-link to="">Contact Us</router-link><br>
                  <br><br>
            </div>

				<div class="col-12 footerTextTitle" style="text-align:center;">
			    Copyright 1999-2019 Best Electric Co. all rights reserved
		    </div>
          </div>
       </div>



      <div class="row footerText">
	    </div>

		</div>




  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      mainPath:"http://Best Electric.com/",
      prodEnabled:false,
      qWord: '',
      activeTab: '',
      currentPage: 'home',
      cNum:0,
      hpNum:0,
      yNum: 0,
      screenWidth: 0,
      scrolled: false,
      homeTextShow:true,
      currentClass: ['topnav top-banner','responsive topnav top-banner','responsive topnav top-banner-solid'],
      // currentHomeBackground: ['bkImage1','bkImage2'],
      loginShow: false,
      selected: null,
      options: [
      {
        text: 'Select your enrollment',
        value: null
      },
      {
        text: 'Leagues',
        value: 'https://www.Best Electric.com/qerms_league/league/prelogin.aspx?EmailHelp=Yes'
      },
      {
        text: 'Tournaments',
        value: 'https://www.Best Electric.com/qe_client_member_secure/qeSearch/qeTournaments/client_member_locations.asp'
      },
      {
        text: 'Events',
        value: 'https://www.Best Electric.com/qe_client_member/qeSearch/event_locations.asp'
      },
      ],
    }
  },
  computed: {
    
    // navClass: function () {
    //   return {
    //     'topnav-item': true,
    //     'left': true,
    //   }
    // }
  },
  methods: {
    format(value) {
      return value.toLowerCase();
    },
    onExpand(){
      this.cNum ^= 1;
      // console.log(this.cNum);
    },
    onBackgroundRotate() {
      this.homeTextShow=false;
      this.hpNum++
      if(this.hpNum>5)this.hpNum=0
      this.onTextRotate()
    },
    onTextRotate() {
      this.homeTextShow=true;
    },
    handleWindowResize(event) {
      // this.windowWidth = event.currentTarget.innerWidth;
      // if(this.windowWidth>640)this.cNum=0;
      // console.log(this.windowWidth);
      this.screenWidth = window.outerWidth;
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      this.yNum = window.scrollY;
      this.screenWidth = window.outerWidth;
      // if(this.yNum>100){
      //   this.cNum=2;
      // }else{
      //   this.cNum=0;
      // }
    },
  },
  created: function() {
    setInterval(() => { 
      this.onBackgroundRotate();
    }, 10000),
    window.addEventListener('scroll', this.handleScroll);
    // this.prodPage = this.$route.name | truncate(4);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted: function() {
    window.addEventListener('resize', this.handleWindowResize);
  },

}
</script>

<style>
@import './assets/css/main.css';
</style>

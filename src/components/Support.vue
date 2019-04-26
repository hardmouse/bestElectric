<template>
  <div>
    <div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer">
            <div class="bodyText" style="padding-left:10px;">
              Best Electric Customer Care representatives are committed to ensuring that clients are fully supported at all times. <router-link to="/Contact">Click here</router-link> for contact details and support hours. FAQ’s are also available below:
            </div>
            <div class="col-xs-12 bodyText faqArea" style="padding-left:10px;">
            
          <div class="titleText yellowText">FAQs</div>
          <hr>
          <div class="titleText">General:</div>
            <ul class="faqListStyle">
              <li v-for="(sas, mykey) in this.faqlist1.faq.list">
                <div v-html="sas.que[0]" class="queSty" @click="onExpandFAQ1(mykey)"></div>
                <transition name="slide-fade-up">
                <div v-html="sas.ans[0]" class="ansSty" v-if="currentIndex1===mykey"></div>
                </transition>
              <div style=height:5px;></div>
              </li>
            </ul>
          
          <div class="titleText">Registration Management Software (RMS):</div>
            <ul class="faqListStyle">
              <li v-for="(sas, mykey) in this.faqlist2.faq.list">
                <div v-html="sas.que[0]" class="queSty" @click="onExpandFAQ2(mykey)"></div>
                <transition name="slide-fade-up">
                <div v-html="sas.ans[0]" class="ansSty" v-if="currentIndex2===mykey"></div>
                </transition>
              <div style=height:5px;></div>
              </li>
            </ul>
          <hr>
          <div class="titleText yellowText">Online Fee Collection Services (OFCS)</div>
          <div class="titleText">Organizations:</div>
            <ul class="faqListStyle">
              <li v-for="(sas, mykey) in this.faqlist3.faq.list">
                <div v-html="sas.que[0]" class="queSty" @click="onExpandFAQ3(mykey)"></div>
                <transition name="slide-fade-up">
                <div v-html="sas.ans[0]" class="ansSty" v-if="currentIndex3===mykey"></div>
                </transition>
              <div style=height:5px;></div>
              </li>
            </ul>
          
          <div class="titleText">Cardholders/Registrants:</div>
            <ul class="faqListStyle">
              <li v-for="(sas, mykey) in this.faqlist4.faq.list">
                <div v-html="sas.que[0]" class="queSty" @click="onExpandFAQ4(mykey)"></div>
                <transition name="slide-fade-up">
                <div v-html="sas.ans[0]" class="ansSty" v-if="currentIndex4===mykey"></div>
                </transition>
              <div style=height:5px;></div>
              </li>
            </ul>
            </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'support',
  data () {

    return {
		title: 'Customer Support',
		show: true,
		faqlist1:'',
		faqlist2:'',
		faqlist3:'',
		faqlist4:'',
      activeFAQ: '',
	  currentIndex1: -1,
	  currentIndex2: -1,
	  currentIndex3: -1,
	  currentIndex4: -1,
    }
  },
//   mounted: function() {
// 	console.log("mounted")
//   },
  created: function () {
    this.fetchData();
	  console.log(this.currentIndex);
	  this.$parent.prodEnabled=false;
    window.scrollTo(0, 0);
  },

  methods: {
	fetchData() {
		// this.faqlist1 = require('../assets/files/supportGeneral.xml')
		// this.faqlist2 = require('../assets/files/supportRMS.xml')
		// this.faqlist3 = require('../assets/files/supportOrg.xml')
		// this.faqlist4 = require('../assets/files/supportCardReg.xml')
		// console.log(this.faqlist.faq.list[0].ans);
		// console.log(JSON.stringify(this.faqlist));
	},
    onExpandFAQ1(ind){
      if (ind==this.currentIndex1){
        this.currentIndex1=-1;
      }else{
        this.currentIndex1 = ind;
      }
    },
    onExpandFAQ2(ind){
      if (ind==this.currentIndex2){
        this.currentIndex2=-1;
      }else{
        this.currentIndex2 = ind;
      }
    },
    onExpandFAQ3(ind){
      if (ind==this.currentIndex3){
        this.currentIndex3=-1;
      }else{
        this.currentIndex3 = ind;
      }
    },
    onExpandFAQ4(ind){
      if (ind==this.currentIndex4){
        this.currentIndex4=-1;
      }else{
        this.currentIndex4 = ind;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faqArea{
	margin-bottom:120px;
}
.bg
{
  width: 100%;
  z-index: 0;
}
.faqListStyle{
	list-style-type: none;
}
.queSty{
	background-color:#77cbff;
	padding:5px;
	font-weight:bold;
	cursor: pointer;
}
.ansSty{
	background-color:#d2eeff;
	padding:5px;
}
.style2Title{
	font-size: 20px;
}
.style2body{
	font-size: 16px;
}
</style>

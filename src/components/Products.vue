<template>
  <div class="homeContainer">
		<div class="topSpacing"></div>
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
		  <div class="col-12 serviceImage" style="padding-top:240px;padding-bottom:20px;">
			<div class="row justify-content-around">

				<div class="col-md-3 prodBox bgRMS">
					<router-link to="/Products-RMS">
					<div class="productBoxTitle">RMS</div>
					<div class="productBoxBody">Registration Management Systems</div>
					</router-link>
				</div>

				<div class="col-md-3 prodBox bgOFCS">
					<router-link to="/Products-OFCS">
					<div class="productBoxTitle">OFCS</div>
					<div class="productBoxBody">Online Fee Collection Services</div>
					</router-link>
				</div>

				<div class="col-md-3 prodBox bgQINT">
					<router-link to="/Products-QINT">
					<div class="productBoxTitle">Q-int</div>
					<div class="productBoxBody">Development & Integration</div>
					</router-link>
				</div>
			</div>
		</div>
		  <div class="container">
		  	<div style="height:120px;"></div>


			</div>		
		</div>
	</div>
</template>

<script>
// import Vue from 'vue'
// Vue.component('sp1', {

// import proLeague from '@/components/productLeague'

export default {
  name: 'Products',
  data () {
    return {
		// component: proLeague,
		title: 'Our Products',
		sectionView: true,
		currentSection: "overviewLeague",
		myText: "",
    }
  },
  methods: {
    onExpand: function(e, item) {
		this.myText = e,
		this.currentSection = e
		// console.log(e),
		// console.log(item) 
    },
	sectionClick: function(e){
		this.sectionView = e
		console.log(this.sectionView)
		if(this.sectionView){
			this.currentSection="overviewLeague"
		}else{
			this.currentSection="overviewOFCS"
		}
		console.log(this.currentSection)
		},
	},
	created: function() {
    	window.scrollTo(0, 0);
		this.$parent.prodEnabled=true;
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prodBox{
	margin: 15px;
	padding: 20px;
	border: #fff solid 1px;
	border-radius: 10px;
	/*background: linear-gradient(90deg, #FFF, #EEEEFF);*/
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.7);
}
.productBoxTitle{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	font-size: 52px;
	font-weight: bold;
	color:#FFF;
	text-shadow: 0 0 2px #000, 0 0 2px #000, 0 0 3px #000,0 0 8px #000, 0 0 19px #000;
}
.productBoxBody{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	font-size: 16px;
	color:#FFF;
	text-shadow: 0 0 2px #000, 0 0 2px #000, 0 0 3px #000, 0 0 5px #000, 0 0 19px #000;
}
.dropbtn {
	font-family:'gothic', Arial, Helvetica, sans-serif;
    background-color: #0079C1;
    color: white;
	margin : 5px 0px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-size: 16px;
    border: none;
}
.sidebtn {
	font-family:'gothic', Arial, Helvetica, sans-serif;
    background-color: #0079C1;
    color: white;
	margin : 5px 0px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.sidemenu{
    position: relative;
	display: inline-block;
}
.subitem{
	margin-left:0px;
	float: none;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    position: relative;
    display: inline-block;
	/*border-bottom: 3px solid #095b8c;*/
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 190px;
    z-index: 1;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #b2def9}
/*.dropdown-content p:hover {background-color: #b2def9}*/

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #095b8c;
}
.sidebtn:hover {
    background-color: #095b8c;
	/*margin-left: 3px;*/
}
.hideMe{
	display:none;
}
.commonBG{
	background-color:#d3e3ff;
	text-align:left;
	padding-bottom: 5px;
}

@media screen and (max-width: 700px) {
	.subitem{
		margin-left:2px;
		float: left;
	}
}
</style>

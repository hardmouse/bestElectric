<template>
  <div>
    <div class="topSpacing">
      <div class="col-sm-10 offset-sm-1 ">
        <div class="middleBelt">BEST ELECTRIC CO.
          <div class="subBelt">
            Professional electrical contractors serving Southern Ontario since 1994.
          </div>
        </div>
      </div>
    </div>
    
    <div class="row" style="padding:0px;margin:0px;">
      <div class="headerbelt">
        <div class="container"><div class="headerfont">{{title}}</div></div>
      </div>
      <div class="container bodyContainer">
        <div class="col-xs-12 bodyText">
          <img src="../assets/images/site/cogs.jpg" class="img-responsive"  style="float:left; margin-right:15px; margin-bottom:25px;" >
              <p>
               <strong>Best Electric Co. </strong>is a full service electrical contracting entity. With our head offices located in Markham, Ontario we have been servicing the greater Toronto area for more than 30 years.
               <br/><br/>
               We are a family-owned and operated business which continues to put the client first. Our exceptional track record of successfully completed projects has led to a high rate of repeat business. In fact, 90 % of our business today is generated from clients that have used our services in the past. 
               <br/><br/>
               Our dynamic capabilities range from such successful projects as high-rise office towers, new school construction and additions and five-star hotels to large scale grocery stores, industrial and retail plazas and religious institutions.
               <br/><br/>
               Our management team has always maintained that it is essential to work in tandem with all members of your project team, from the owner, architect, electrical & mechanical engineers, through to the general contractors and sub-contractors.
               <br/><br/>
               BEST Electric Co. is known for maintaining the highest standards of workmanship and safety. We pride ourselves on our exceptional service and unmatched customer satisfaction.
               <br/><br/>
               Our company's growth and success stems in large part from our dedication to our client’s needs. We collaborate with our clients throughout the entire project life-cycle to ensure that we meet and exceed their requirements.
               <br><br>
              </p>
            </div>
        </div>
      </div>
</div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'ABOUT US',
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
    background-image: url("../assets/images/wall/aboutus.jpg");
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

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
          <div class="col-xs-12 bodyText faqArea" style="padding-left:10px;"></div>
            
          <hr>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'careers',
  data () {

    return {
		title: 'CAREERS',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.topSpacing{
  background-image: url("../assets/images/wall/careers.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:15vh;
}

</style>


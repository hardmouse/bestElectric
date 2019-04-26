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
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer psi">
              <p>
POLITIQUE DE CONFIDENTIALITÉ
<br><br>
<img src="../assets/images/site/cogs.jpg" class="img-responsive" style="float:left; margin-right:15px;">
Le Groupe TVA Inc. inc., filiale de Québecor Média inc., (ci-après «TVA», « nous » et « notre ») tient à vous informer de l’usage que nous faisons des renseignements que nous recueillons lorsque vous visitez notre site Web (ou encore nos plateformes de médias sociaux ou nos applications spécialisées) ainsi que lorsque vous visitez les sites de nos compagnies affiliées faisant l’objet d’un hyperlien que nous autorisons (ci-après le « Site »). Par conséquent, la présente Politique de confidentialité (ci après la « Politique ») définit la façon dont nous recueillons, utilisons, divulguons et traitons les renseignements que vous nous communiquez lorsque vous utilisez le Site.
<br><br>
TVA est consciente des questions soulevées relatives à la circulation des renseignements personnels et informations de navigation sur Internet et désire collaborer avec vous afin d'assurer le respect et la protection de votre vie privée. Pour cette raison, nous désirons vous expliquer quel type d'information nous recueillons lorsque vous visitez le Site et également quand, comment et pourquoi nous recueillons ces informations. TVA tient à préciser que nous restreignons tant la quantité que la nature des renseignements recueillis. Nous vous prions donc de lire attentivement les lignes qui suivent et de vous y référer périodiquement pour prendre connaissance des changements qui pourraient y être apportés par une mise à jour de la présente page.
<br><br>
INFORMATIONS PERSONNELLES 
<br><br>
1. Que signifient les « Informations personnelles » et comment sont-elles collectées ?
<br><br>
Les « Informations personnelles » sont des renseignements concernant une personne identifiable. C’est-à-dire, des informations qui peuvent être utilisées afin de vous identifier comme l’utilisateur de notre site, telles que votre nom, prénom, adresse de résidence, adresse de courriel, ou votre numéro de téléphone.
<br><br>
Soyez assurés qu'aucune information personnelle n'est recueillie sur le Site sans votre consentement. Dans certaines circonstances bien particulières, mais toujours de façon honnête et licite, soit lors de l'inscription à nos différents services de personnalisation (y compris lors de l’utilisation de l’authentification unique (Single Sign On de nos Partenaires de réseaux sociaux)), de courriels et de concours publicitaires en ligne, TVA requiert que vous inscriviez vos nom, prénom, adresse, adresse de courriel et certaines autres Informations personnelles dans un formulaire à l'écran. Ainsi, lorsque TVA vous demande de telles informations, vous en êtes toujours explicitement et préalablement avertis et vous êtes informés que vous nous donnez des informations qui feront l'objet d'un ensemble d'opérations relatives à la collecte, l'enregistrement, l'utilisation, la modification, la conservation et la destruction desdites Informations personnelles. TVA vous fournira les moyens, de vérifier que vos données personnelles sont exactes et actualisées. De plus, TVA pourrait vous demander, via de tels formulaires, si vous êtes intéressés à recevoir des renseignements au sujet d'autres services, concours ou des nouvelles à propos de TVA ou de ses partenaires. Vous aurez toujours le choix de décliner cette demande ou de cesser un abonnement à un service personnalisé que vous auriez préalablement choisi. 
<br><br>
Nous pouvons également recueillir automatiquement des renseignements anonymes généraux relatifs à votre utilisation du Site, tels que la date et l’heure de votre visite du Site et les pages du Site que vous consultez. Nos serveurs peuvent aussi recueillir des renseignements sur le type de fureteur que vous utilisez, de même que l’adresse IP de votre ordinateur et le nom de votre fournisseur de service Internet. Ces renseignements ne sont pas des Informations personnelles mais plutôt des Informations de navigation, et nous vous renvoyons à la section « Informations de navigation » ci-dessous pour mieux comprendre notre politique à ce sujet.
<br><br>
Il est également possible que votre courriel soit dépersonnalisé (haché, selon certaines procédures) afin de pouvoir être ajouté aux données de navigation.  
<br><br>
2. Comment les Informations personnelles sont-elles utilisées ?
<br><br>
La collecte des Informations personnelles permet tout simplement à TVA de pouvoir vous donner un service plus pertinent à vos besoins, améliorer le contenu, l’interface et les caractéristiques du Site en fonction de l’information recueillie, de vous joindre dans l'éventualité où vous gagneriez un prix et, si vous nous en avez signifié le désir, de vous faire parvenir, de temps à autre, de l'information par courriel. Ces données d’utilisation sont utilisées également à des fins de contrôle et visent l’amélioration de l’utilisation.
<br><br>
3. Les Informations personnelles sont-elles partagées avec des tiers ?

Oui, vous pouvez accéder aux Informations de Navigation vous concernant ou en demander la rectification en présentant une demande écrite à cet effet à infovieprivee@quebecormedia.com. Cependant, nous serons en mesure de répondre à votre demande que dans la mesure où nous avons un dossier personnalisé vous concernant (ce qui est le cas lorsque vous nous avez ou que vous consentez à nous communiquer des renseignements personnels) et que nous pouvons vous associer précisément à des Informations de Navigation vous concernant.
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


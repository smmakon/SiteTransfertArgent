

var paysDestination = document.getElementById("pays");
var listepays = [];
for (i = 0; i < paysDestination.length; i++) {
    listepays.push(paysDestination.options[i].value);
}
for (i = 0; i < listepays.length; i++) {
    console.log(listepays[i]);
}

var paysDestination = document.getElementById("pays");


function AfficherTauxPaysCourant(){
    var paysDestinationChoisi = document.getElementById("pays").value;

    switch (paysDestinationChoisi) {

        case 'CANADA' :{
            document.getElementById("taux").innerText="1 CAD = 1 CAD";
            break;
        }
        case 'CAMEROUN' : {
            document.getElementById("taux").innerText="1 CAD = 421,18 XAF";
            break;
        }
        case 'FRANCE' :{
            document.getElementById("taux").innerText="1 CAD = 0,64 EURO";
            break;
        }
        case 'USA' : {
            document.getElementById("taux").innerText="1 CAD = 0,71 USD";
            break;
        }
        default : document.getElementById("taux").innerHTML="<br>";
        break;
    }
}

var tauxPaysCourant = AfficherTauxPaysCourant();

paysDestination.addEventListener("change",paysdestination);

function paysdestination() {

    var paysDestinationChoisi = document.getElementById("pays").value;

    switch (paysDestinationChoisi) {
        case 'CANADA' :{
            document.getElementById("taux").innerText="1 CAD = 1 CAD";
            break;
        }
        case 'CAMEROUN' : {
            document.getElementById("taux").innerText="1 CAD = 421,18 XAF";
            break;
        }
        case 'FRANCE' :{
            document.getElementById("taux").innerText="1 CAD = 0,64 EURO";
            break;
        }
        case 'USA' : {
            document.getElementById("taux").innerText="1 CAD = 0,71 USD";
            break;
        }
        default : document.getElementById("taux").innerHTML="<br>";
        break;
    }

  }


  var montantReception= document.getElementById("rmontant");

  montantReception.addEventListener("click",aEnvoyer);

  function aEnvoyer(){

    var paysDestinationChoisi = document.getElementById("pays").value;
    var montantEnvoi= document.getElementById("smontant").value.trim();
    var inputMontantEnvoi = document.getElementById("smontant");
       
            if (!/^\d*\.?\d+$/.test(montantEnvoi) || parseFloat(montantEnvoi) <= 0 || montantEnvoi === ""){
                inputMontantEnvoi.style.backgroundColor= "pink";

            }
            else if (paysDestinationChoisi !=""){

                inputMontantEnvoi.style.backgroundColor= "white";
                montantReception.value=montantEnvoi;

                switch (paysDestinationChoisi) {
                    case 'CANADA' :{
                        montantReception.value=montantEnvoi;
                        break;
                    }
                    case 'CAMEROUN' : {
                        montantReception.value=parseFloat(montantEnvoi)*421.18;
                        break;
                    }
                    case 'FRANCE' :{
                        montantReception.value=parseFloat(montantEnvoi)*0.64 ;
                        break;
                    }
                    case 'USA' : {
                        montantReception.value=parseFloat(montantEnvoi)*0.71 ;
                        break;
                    }
                    default : montantReception.value="";
                    break;
                }
                montantReception.style.backgroundColor= "rgb(60, 179, 113)";

            }
            else {
                alert("Merci de choisir un pays")
            }
  }

  var connexion= document.getElementById("seConnecter");

  connexion.addEventListener("click",accepterConnexion);

  function accepterConnexion() {
    text="Acceptez vous de quitter cette page \n et vous dirigez vers la page de connexion?"
    if (confirm(text) == true)  connexion.href="connexion.html";
    else {connexion.href="index.html"}
       
  }



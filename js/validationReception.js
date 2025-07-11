function focusFunction() {
  document.getElementById("numRefs").style.background = "yellow";   
}

function focusFunctionNom() {
  document.getElementById("nomFamille").style.background = "yellow";   
}

function blurFunction() {

  var ref = document.getElementById("numRefs").value;
  if(ref!="") {
    if(ref.match(/^[A-Z0-9]{10}$/)) {
    //  document.getElementById("numRefs").style.background = "white";
      document.getElementById("numRefs").style.background = "#DDFAF0";
    }
    else alert("Veuillez entrer la reference Alphanumerique \n de la transaction Contenant exactement 10 caracteres");
  }
  if(ref==""){
    document.getElementById("numRefs").style.background = "white";
  }
}


function blurFunctionNom() {

  var nom = document.getElementById("nomFamille").value;
  if(nom!="") {
    if(nom.match(/^[A-Z0-9-]+$/i)) {
    //  document.getElementById("numRefs").style.background = "white";
      document.getElementById("nomFamille").style.background = "#DDFAF0";
      if (document.getElementById("numRefs").value!=""  &&  document.getElementById("nomFamille").value!="" &&  document.getElementById("numRefs").value.match(/^[A-Z0-9]{10}$/)  && nom.match(/^[A-Z0-9-]+$/i))
      {
        var submit = document.getElementById("validationForm");
            submit.style.color="white";
            submit.style.backgroundColor="red";
            submit.disabled=false;
      }
    }
    else alert("Veuillez entrer un nom sans les caracteres speciaux");
  }
  if(nom==""){
    document.getElementById("nomFamille").style.background = "white";
  }
}
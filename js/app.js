var objActions = {
  contraste:function fnContraste(){
    var html = document.getElementsByTagName("html")[0];
    html.className = ((html.className == "contraste") ? "" : "contraste");
  },
  trocatitulo:function TrocarTitulo(){
    var elTitulo = document.getElementById("titulo");
    elTitulo.innerHTML = window.prompt("Novo Titulo");
  }
};

/*
* Events Listeners
*/
// Adicionando evento Click
document.getElementById("titulo").addEventListener("click", objActions.trocatitulo);
// Botao contraste
document.getElementById("btnContraste").addEventListener("click",objActions.contraste);

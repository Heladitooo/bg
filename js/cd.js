var textoS = document.getElementById("textoServidor");
var textoD = document.getElementById("textoData");
var texto404 = document.getElementById("texto404");
var textoWeb = document.getElementById("textoWeb");
var textoDominio = document.getElementById("textoDominio");

var pp =document.querySelector('.pp')


var pr = document.getElementById("pci");


var btr = document.getElementById('vr');
var bts = document.getElementById('sg');


btr.addEventListener("click", fn)





function fn()
{


	if (textoS.value == "servidor" && textoD.value == "big data" && texto404.value == "404" && textoWeb.value == "pagina" && textoDominio.value == "dominio")
	{
		pr.innerHTML= "Perfecto";
		pp.classList.add("V");
		pp.classList.remove("M");


	}
	else
	{
		pr.innerHTML= "Te quedaron algunas mal";
		pp.classList.add("M");

	}


}

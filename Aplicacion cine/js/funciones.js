function validar()
{
	var titulo=document.getElementById("titulo");
	if (titulo.value.length<4)
	{
		alert("El nombre debe tener 4 o más caracteres");
		document.getElementById("titulo").style.backgroundColor="red";
	}

}
var lista_genero=["Aventura", "Comedia", "Acción", "Terror"];
function array()
{
	var objeto_select=document.getElementById("genero");
	for (i=0; i<lista_genero.length; i++)
	{
		var obj_option=document.createElement("option");
		obj_option.innerHTML=lista_genero[i];
		objeto_select.appendChild(obj_option);
	}
}
function validasion()
{
	var titulo=document.getElementById("titulo").value;
	var genero=document.getElementById("genero").value;
	alert("Se va a registrar la película con título "+titulo+ " y de género " +genero);
}
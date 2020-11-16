'use strict'
//Identificamos div contenedor de selects
var div_cont = document.getElementById("div_select");

//Creamos los dos selects y los añadimos al div anterior
var select1 = document.createElement('select');
select1.setAttribute("id","select1");
select1.setAttribute("class","form-control");
var select2 = document.createElement('select');
select2.setAttribute("id","select2");
select2.setAttribute("class","form-control");
div_cont.appendChild(select1);
div_cont.appendChild(select2);

//Creamos opciones para primer y segundo select
var option1_select1 = document.createElement('option');
var option2_select1 = document.createElement('option');
var option3_select1 = document.createElement('option');
option1_select1.innerHTML='Productos (53)';
option2_select1.innerHTML='Baños';
option3_select1.innerHTML='Bañeras';

var option1_select2 = document.createElement('option');
var option2_select2 = document.createElement('option');
var option3_select2 = document.createElement('option');
option1_select2.innerHTML='ORDENAR POR';
option2_select2.innerHTML='Precio';
option3_select2.innerHTML='Nombre';

//Los añadimos a los selects creados
select1.appendChild(option1_select1);
select1.appendChild(option2_select1);
select1.appendChild(option3_select1);

select2.appendChild(option1_select2);
select2.appendChild(option2_select2);
select2.appendChild(option3_select2);
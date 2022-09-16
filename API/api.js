// fetch('datos1.txt')
// .then(function(response){
//     return response.text();
// }) //que clase de informacion estoy pidiendo
// .then(function(data){
//     console.log(data);
// }) //extrae los datos de consumo
// .catch(function(error){
//     console.log(`hemos tenido un error: ${error}`); // para los errores es el catch
// })

// fetch('datos.txt')
// .then((response)=>{return response.text()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log (`hemos tenido un error: ${error}`)})

// --------------------------------------------------------
// let url='datos.txt';
// fetch(url)
// .then(response=>response.text())
// .then(data=>{
//     let inf =document.getElementById('dato');
//     inf.innerHTML = data;
// })
// .catch(error=>console.log(`hemos tenido un error: ${error.message()}`))


let url ='datos.json';
fetch(url)
.then(res=>res.json())
.then(data=>{
//     let imp =document.getElementById('dato');
//    imp.innerHTML=data[0].nombre + '<br>'+data[0].apellido+'<br>' + data[0].telefono + '<br>'+ data[0].cedula +'<br>'+'<br>'+
//    data[1].nombre+ '<br>'+data[1].apellido+'<br>' + data[1].telefono + '<br>'+ data[1].cedula;
    

   let imp =document.getElementById('dato');
   let mensaje="";
   for(let index=0; index < data.length; index++){
     mensaje =mensaje + data[index]. nombre
     +' '+ data[index].apellido + '<br>'
   }
   imp.innerHTML =mensaje;

})

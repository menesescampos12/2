
//Creación de una función para que el btn enviar la dispare
const listaDeTareas = [];
const enviar = (event) => {
  event.preventDefault();

  const tarea = document.getElementById("tareaID").value;
  const descripcion = document.getElementById("descripcionID").value;

  //Declaración de un objeto
  const tareaToDo = {
    tarea,
    descripcion
  ,
  };

  console.log(tareaToDo);
  const zoologico = []
zoologico.push("Hola");
console.log(zoologico);
zoologico.push("mi nombre es ricardo salinas");
zoologico.push("actualmente estudio la universidad");
zoologico.push("mi false");
zoologico.push("1 al 10");
zoologico.push("10");



  

  listaDeTareas.push(tareaToDo);
  console.log(listaDeTareas);

  //El objeto lo vamos a almacer en el localStorage
  localStorage.setItem("listaDeTareas", JSON.stringify(tareaToDo));
};

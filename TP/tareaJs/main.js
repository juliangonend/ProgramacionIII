// - **API Endpoint**: https://randomuser.me/api/
// - **Documentación**: https://randomuser.me/

async function fetchUser(){
    const respuesta = await fetch("https://randomuser.me/api/")
    const data = await respuesta.json()
        console.log(data);
        const persona = data.results[0]
        const nombre = `${persona.name.first} ${persona.name.last}`
        console.log(nombre)
        const ubicacion = `${persona.location.country} ${persona.location.state
        }`
        console.log(ubicacion)
        const imagen = `${persona.picture.medium} `
        console.log(imagen)
        const divElement = document.getElementById("userInfo")
        divElement.innerHTML=`
        <p>${nombre}</p>
        <p>${imagen}</p>
        <img src=${imagen} width=400/>
        
        `
}

fetchUser()



async function fetchList() {
    const respuesta2= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data2 = await respuesta2.json()
    const lista = data2.slice(0,10)
    console.log(lista)

    const postList = document.getElementById('postList')
    lista.forEach(element => {
        const nuevoElemento= document.createElement("li")
        nuevoElemento.innerHTML=element.title
        postList.appendChild(nuevoElemento)

    });

}
fetchList()



async function fetchWeather() {
    const key="c61e0400e304a834d4159274cfc06146";
    const lat = -32.8895;
    const lon = -68.8458;
    const lang = "sp"
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`
 
        const respuesta3= await fetch(url)
        const datos = await respuesta3.json();
        console.log(datos)

    const main = datos.weather[0].main
    const description=datos.weather[0].description
    // const icon=datos.weather[0].icon
    const weather = document.getElementById('weather')

    const titleWeather= document.createElement('h1')
    const descriptionWeather= document.createElement('p')
    // const iconWeather= document.createElement('img')
    titleWeather.textContent=main
    descriptionWeather.textContent=description
    // iconWeather.id=icon
    // iconWeather.alt="nublado"

    weather.appendChild(titleWeather)
    weather.appendChild(descriptionWeather)
    // weather.appendChild(iconWeather)


}
fetchWeather()

// PERROS ALEATORIOS 
async function fetchDog() {
    const respuesta4= await fetch("https://dog.ceo/api/breeds/image/random")
    const datos = await respuesta4.json();
    console.log(datos)
    
    const dogImage= document.getElementById("dogImage");
    
    messageDog=datos.message;
    const img = document.createElement("img");
    //ESTILOS A LOS PERROS 
    img.src=messageDog;
    img.style.borderRadius='10%'
    img.style.width='400px'
    img.style.height='AUTo'
    dogImage.appendChild(img)

}
fetchDog()

//  API TAREAS

async function fetchTodoList() {
    const respuesta5 = await fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json())
    const todos = respuesta5.slice(0,5)
    console.log(todos)

    const todosList= document.getElementById('todosList')
    todos.forEach(element => {
        const todo = document.createElement('li')
        const textTodo = document.createElement('p')
        textTodo.innerHTML=`Titulo: ${element.title} <br> Completado : ${element.completed ?'completado' : 'no completado'}`
        todo.appendChild(textTodo)
        todosList.appendChild(todo)
    });



}
fetchTodoList()
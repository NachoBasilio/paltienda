const url = "https://platzi-avo.vercel.app"

const llamadoAPI = async ()=>{
    const llamado = await fetch(`${url}/api/avo`)
    let paltas = await llamado.json()
    
    const allText = []
    const allImage = []


    paltas.data.forEach((item)=>{
       const imagen = document.createElement("img")
       imagen.src = `${url}${item.image}`
       const title = document.createElement("h2")
       title.textContent = item.name
       title.classList.add("Texto")
       const price = document.createElement("p")
       price.textContent = item.price
       price.classList.add("Texto")
       price.classList.add("Precio")

       const containerText = document.createElement("div")
       containerText.append(title, price)

       allText.push(containerText)
       allImage.push(imagen)
    })

    const Productos = document.querySelector(".Productos")
    const bloques = []


    for(let i = 0; i < allImage.length; i++){
        const Palta = document.createElement("article")
        const Data = document.createElement("div")
        Palta.classList.add("Palta")
        Data.classList.add("Data")
        Palta.appendChild(allImage[i])
        Data.appendChild(allText[i])
        Palta.appendChild(Data)   
        bloques.push(Palta)

    }
    
    Productos.append(...bloques)
    
    


    
}

llamadoAPI()
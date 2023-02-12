let stock;

const getProductos = async () =>{
  const productos =  await fetch("https://fakestoreapi.com/products?limit=5")
  const productosJson = await productos.json()
  return productosJson
}

const paintSlides = async () => {
  const contenedor = document.getElementById('producto-contenedor')
  stock = await getProductos()
  stock.forEach(producto => {
    const label = document.createElement('label')
    label.htmlFor = `s${producto.id}`
    label.id = `slide${producto.id}`
    label.innerHTML = `
        <div class="card">
          <div class="image">
            <img src="${producto.image}">
            <div class="dots">
              <div class="dot1"></div>
              <div class="dot2"></div>
              <div class="dot3"></div>
            </div>
          </div>
          <div class="infos">
            <span class="name">${producto.title.substring(0, 25)}</span>
            <span class="lorem">$${producto.price}</span>
            <span class="lorem">talla: ${producto.category}</span>
            <span class="lorem">${producto.description.substring(0, 140)}</span>
          </div>
          <button type="button" class="btn-contact btn-add" data-id="${producto.id}">Agregar</button>
          <div class="socials">
            <div class="counter-container">
              <span class="counter">0</span><i class="fa-solid fa-cart-shopping"></i>
            </div>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-bookmark"></i>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>
      `
    contenedor.appendChild(label)
  })
}
  
  
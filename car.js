let carrito = []

const showCounter = () => {
    const carString = sessionStorage.getItem("carrito")
    const car = JSON.parse(carString)
    document.querySelectorAll(".counter").forEach(counter => {
        counter.innerHTML = car.length
    })
}

const costoTotal = () => {
    const carString = sessionStorage.getItem("carrito")
    const car = JSON.parse(carString)
    const total = car.reduce((acc, producto) => acc + producto.price, 0)
    document.getElementById("valorTotal").innerHTML = total.toLocaleString()
}

const addCar = (element) => {
    const idProduct = element.target.getAttribute("data-id")
    const producto = stock.find(item => item.id == idProduct)
    notificacion(producto.title)
    carrito.push(producto)
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    showCounter()
    costoTotal()
}


async function init() {
    sessionStorage.removeItem("carrito")
    await paintSlides()
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener("click", addCar)
    });
    document.querySelectorAll('.counter-container').forEach(btn => {
        btn.addEventListener("click", obtenerDetalle)
    });
}
init()

function notificacion(nombre) {
    Toastify(
        {
            text: "Agregaste " + nombre/* substring(0,15), */,
            duration: 7000,
            close: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }
    ).showToast();
}




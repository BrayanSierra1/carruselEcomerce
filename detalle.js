const obtenerDetalle = () => {
    document.getElementById("detalle-container").innerHTML = ""
    const carString = sessionStorage.getItem("carrito")
    const car = JSON.parse(carString)
    if (car === undefined || car === null || car.length === 0) {
        document.getElementById("detalle-container").innerHTML = "<div class='alert text-danger text-center font-weight-bold'>El carrito esta vacio 🙄</div>"
        return 
    }

    let valorTotal = 0;

    const table = document.createElement("table")
    table.className = "table table-striped table-dark"
    car.forEach(producto => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${producto.title}</td>
            <td class="text-right">$ ${producto.price.toLocaleString()}</td>
        `
        valorTotal += producto.price
        table.appendChild(tr)
    })
    const trTotal = document.createElement("tr")
    trTotal.innerHTML = `<td>Total:</td>
    <td class="text-right">$ ${valorTotal.toLocaleString()}</td>`
    table.appendChild(trTotal)
    document.getElementById("detalle-container").appendChild(table)
} 

let e = document.querySelector("#valor")
    let valor = document.querySelectorAll(".valor")
    console.log(valor)
    function soma() {
        valor = Number(e.textContent) + 1
        e.textContent = valor > 9 ? valor : `0${valor}`
        valor.forEach(e => e.textContent = valor > 9 ? valor : `0${valor}`)
    }

    function subtracao() {
        if (e.textContent > 0) {
            valor = Number(e.textContent) - 1
            e.textContent = valor > 9 ? valor : `0${valor}`
            valor.forEach(e => e.textContent = valor > 9 ? valor : `0${valor}`)
        }
    }

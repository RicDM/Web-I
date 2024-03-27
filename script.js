let e = document.querySelector("#valor")
    let num = document.querySelectorAll(".num")
    console.log(num)
    function soma() {
        eValue = Number(e.textContent) + 1
        e.textContent = eValue
        num.forEach(e => e.textContent = eValue)
    }

    function subtracao() {
        if (e.textContent > 1) {
            eValue = Number(e.textContent) - 1
            e.textContent = eValue
            num.forEach(e => e.textContent = eValue)
            
        }
        
    }

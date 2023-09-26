
const form = document.querySelector('form');
const criaP = document.querySelector("p");

form.addEventListener('submit', e => {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!peso) {
        setInvalido('Peso inválido')
        return
    }
     if (!altura) {
        setInvalido('Altura inválida')
        return
    }

    const imc = getImc(peso, altura)
    const mensagem = setCalculo(imc)
    setResultado(mensagem)
    
})


function setInvalido(inv) {
    const invalido = document.querySelector('#resultado')
    invalido.innerHTML = ''
    const p = document.createElement('p')
    p.classList.add('paragrafo-invalido')
    p.innerHTML = `${inv}`
    invalido.appendChild(p)
}


function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ' '
    const p = document.createElement('p')
    if (msg == 'Peso normal') {
        p.classList.add('bom')
    } else {
        p.classList.add('ruim')
    }
    p.innerHTML = `${msg}`
    resultado.appendChild(p)
    
}


function getImc(p, a) {
    let resultado = p / a ** 2
    return resultado.toFixed(1)

}

function setCalculo (imc) {
    if (imc <= 18.5) {
        return `Abaixo do peso`
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal' 
    }else if (imc >= 25 && imc <= 29.9) {
        return `Sobrepeso`
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2'
    } else if (imc > 40) {
        return 'Obesidade grau 3'
    }
}


async function renderiza_total_vendido(url){

    try{
        var response = await fetch(url)
        var data = await response.json()
        document.getElementById('faturamento_total').innerHTML = data.total

    }catch(erro){
        console.log(erro)
    }
}

document.addEventListener('onload', renderiza_total_vendido(`http://127.0.0.1:8000/retorna_total_vendido/`))


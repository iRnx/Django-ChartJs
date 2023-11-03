import { gera_cor } from './gerar_cor_graficos.js'

async function renderiza_faturamento_mensal(url){
    try{
        var response = await fetch(url)
        var data = await response.json()

        var ctx = document.querySelector('#faturamento_mensal').getContext('2d')
        var cores_faturamento_mensal = gera_cor(12)
        

        var MyGraphics = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Faturamento',
                    data: data.data,
                    backgroundColor: cores_faturamento_mensal[0],
                    borderColor: cores_faturamento_mensal[1],
                    borderWidth: 1
                }]
            },
            
        })

    }catch(erro){
        console.log(erro)
    }


}


document.addEventListener('onload',renderiza_faturamento_mensal('http://127.0.0.1:8000/relatorio_faturamento/'))
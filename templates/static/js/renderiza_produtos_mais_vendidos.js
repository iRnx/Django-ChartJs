import { gera_cor } from './gerar_cor_graficos.js'

async function renderiza_produtos_mais_vendidos(url){
    try{
        var response = await fetch(url)
        var data = await response.json()

        var ctx = document.querySelector('#produtos_mais_vendidos').getContext('2d')
        var cores_faturamento_mensal = gera_cor(3)
        
        var MyGraphics = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Produtos mais vendidos',
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


document.addEventListener('onload',renderiza_produtos_mais_vendidos('http://127.0.0.1:8000/relatorio_produtos/'))
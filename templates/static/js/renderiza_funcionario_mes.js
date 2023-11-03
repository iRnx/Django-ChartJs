import { gera_cor } from './gerar_cor_graficos.js'

async function renderiza_funcionario_do_mes(url){
    try{
        var response = await fetch(url)
        var data = await response.json()

        var ctx = document.querySelector('#funcionarios_do_mes').getContext('2d')
        var cores_faturamento_mensal = gera_cor(3)
        
        var MyGraphics = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: data.labels,
                datasets: [{
                    label: data.label,
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


document.addEventListener('onload',renderiza_funcionario_do_mes('http://127.0.0.1:8000/relatorio_funcionario/'))
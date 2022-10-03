function somar()
{
    var sexo = document.querySelectorAll('input[type="radio"]')
    var altura = Number(document.getElementById('height').value)
    var peso = Number(document.getElementById('kg').value)
    var idade = Number(document.getElementById('years').value)
    var res = ""

    // var resultado = #

    if (sexo[0].checked){
        // mulher
        
        res = 66 + (9.6 * peso) + (1.8 * altura)- (4.7 * idade)

        alert(`seu metabolismo basal é de: ${res.toFixed(0)}`)
    }

    
    else if (sexo[1].checked)
        //homem

        res = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)

        alert(`seu metabolismo basal é de: ${res.toFixed(0)}`)
}





function somar()
{
    var sexo = document.getElementsByName('radsex')
    var altura = document.getElementsByClassName('height')
    var peso = document.getElementsByClassName('kg')
    var idade = document.getElementsByClassName('years')


    // var resultado = #

    if (sexo[0].checked){
        // mulher
        
        var res = 66 + (9.6 * peso) + (1.8 * altura)- (4.7 * idade)

        alert(`seu metabolismo basal é de: ${res}`)
    }

    
    else if (sexo[1].checked)
        //homem

        var res = 66 + 13.7 * peso + 5 * altura- 6.8 * idade

        alert(`seu metabolismo basal é de: ${res}`)
}
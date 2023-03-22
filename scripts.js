function formatCPF()
{
    let CPF = Number(cpf.value.replaceAll(".", "").replaceAll("-", ""))
    if(CPF){
        console.log(CPF)
        console.log("Numero")
    }else{
        console.log("Texto")}



    console.log(cpf.value.length)
    if(cpf.value.length == 3)
    {
        cpf.value = cpf.value.concat(".");
    }if(cpf.value.length == 7)
    {
        cpf.value = cpf.value.concat(".");
    }if(cpf.value.length == 11)
    {
        cpf.value = cpf.value.concat("-");
    }else{
        cpf.value = cpf.value.slice(0,14)
    }
}
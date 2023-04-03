nomeDoConvidadoArray = [];

    function submit()
    {
        var name1 = document.getElementById("name1").value;
        nomeDoConvidadoArray.push(name1);


        
 
function sorting()
{
    nomeDoConvidadoArray.sort();
    console.log(nomeDoConvidadoArray);
    document.getElementById("displayName").innerHTML = nomeDoConvidadoArray;

}

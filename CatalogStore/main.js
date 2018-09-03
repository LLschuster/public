window.onload = init();
var tasa = 47.43;
var consumo = 1550, x=0, cant = 0, total=0;
var tarifas = [
    {1: 0,2: 200,3: 0.11},
    {1:201,2:300,3:0.17},
    {1:301,2:700,3:0.26},
    {1:701,2:99999,3:0.27}
];
/*var tarifas = new Array();
tarifas[0] = new Array(0,200,0.11);
tarifas[1] = new Array(201,300,0.17);
tarifas[2] =  new Array(301,700,0.26);
tarifas[3] = new Array(701,99999,0.27);
var table;*/

function init ()
{
 table = document.querySelector("#mytable");
 uno();
}

function uno()
{
    let consumoTemp = consumo;
    let a = 0, i =0;
    for (a=0;a<tarifas.length();a++)
    {
        if ((tarifas[a][0]<consumo) && (consumo<tarifas[a][1]))
        {
            consumoTemp = tarifas[a][0];
            if (consumo>200)
            {
                consumoTemp+=1;
            }
       for (i=0;i<cant;i++)
         {
         if (i>0) {x=1;} 
         }
         total += (((tarifas[i][1]-tarifas[i][0])+x)*tarifas[i][2]*tasa);
        table.innerHtml = "<tr><td>" + (tarifas[i][1] - tarifas[i][0]+x) + "</td><td>@</td><td>" + tarifas[i][2] + "</td><td>=</td><td align=right>"; 
        }
    }
}
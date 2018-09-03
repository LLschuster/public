var tasa = 47.43;
var button;
var consumo = 1550, x=0, cant = 3, total=0, a=0, i=0;
var tarifas = [
    {0: 0,1: 200,2: 0.11},
   {0:201,1:300,2:0.17},
   {0:301,1:700,2:0.26},
   {0:701,1:99999,2:0.27}
   ];
   //alert(tarifas.length);
window.onload = init();




function init ()
{
 table = document.querySelector("#myDiv");
 button = document.querySelector("#mybutton");
 uno();
}

function uno()
{
    let consumoTemp = consumo;
    table.innerHtml = "<table>";
    for (a=0;a<tarifas.length;a++)
    {
        if ((tarifas[a]["0"]<consumo) && (consumo<tarifas[a]["1"]))
        {
            consumoTemp = tarifas[a]["1"];
            if (consumo>200)
            {
                consumoTemp+=1;
            
       for (i=0;i<cant;i++)
         {
         if (i>0) {x=1;} 
         
          total += (((tarifas[i]["1"]-tarifas[i]["0"])+x)*tarifas[i]["2"]*tasa);
       table.innerHtml += "<tr><td>" + (tarifas[i]["1"] - tarifas[i]["0"]+x) +  "</td><td>@</td><td>" + tarifas[i]["2"] + "</td><td>=</td><td align=right>"+ (consumoTemp*tarifas[a]["2"]*tasa) + "</td><td></tr>" ;
        //tab.innerHtml += "<tr><td>" +"klk"+ "</td><td>@</td><td>"   + "</td><td>=</td><td align=right>"+  "</td><td></tr>" ;
    }
        document.body.innerHtml+= "<tr><td>" + consumoTemp + "</td><td>@</td><td>" + tarifas[a]["2"]+"</td><td>=</td><td align=right>" + consumoTemp*tarifas[a]["2"]*tasa + "</td></tr>";
        total += (consumoTemp*tarifas[a]["2"]*tasa);
        table.innerHtml+= "<tr><th colspan=4> total a pagar =  </th><th align=right>" + total +"</th></tr>";
        } else {
            cant++;
        }
        
        }
    }
    table.innerHtml += "</table>";
    var newt = document.createElement("table");
    newt.innerHTML = table.innerHtml;
    table.appendChild(newt);
    console.log(table.innerHtml);
    
}

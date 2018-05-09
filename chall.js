var n, m,x,y, status, interVal ;
colors = [];
k = [];

n = prompt();
m = prompt('number of colors');

for (x=0;x<n;x++)
{
    colors[x] = prompt('choose color till' + m);
}

for (x=0;x<m;x++)
{
    k[x] = prompt('choose interval for knight till for color' + x);
}



//output

for (x=0;x<k.length;x++)
{
    interVal=0
    for (y=0;y<colors.length;y++)
    {
       if (colors[y] == x+1 )
       {
           interVal++;
       } 

    }
    if (interVal == k[x])
    {
        status = true;
        console.log("yes");
    }
}


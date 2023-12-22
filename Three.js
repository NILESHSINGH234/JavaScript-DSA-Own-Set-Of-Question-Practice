function pair(arr,n)
{
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(i!=j)
            {
            if(arr[i]+arr[j]==n)
            {
                console.log("("+arr[i]+","+arr[j]+")");
            }
            }
        }
    }
}
console.log(pair([1,4,5,2],6));

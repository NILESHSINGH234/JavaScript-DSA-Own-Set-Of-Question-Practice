function sort(arr)
{
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(sort([1,0,0,1,1,0,1]));

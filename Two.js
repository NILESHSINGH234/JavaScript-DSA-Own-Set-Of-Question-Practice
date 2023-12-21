function unique(arr)
{
    for(i=0;i<arr.length;i++)
    {
        let isUnique=true;
        for(j=0;j<arr.length;j++)
        {
if(i!=j&&arr[i]==arr[j])
{
    isUnique=false;
    break;
}
        }
if(isUnique)
{
    console.log(arr[i]);
}
    }
}
console.log(unique([2,2,1,3,3,4,4]));

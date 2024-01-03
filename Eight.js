function push(arr)
{
    let count=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]!==0)
        {
            arr[count]=arr[i];
            count++;
        }
    }
    while(count<arr.length)
    {
        arr[count]=0;
        count++;
    }
    return arr;
}
const inputArray = [0, 3, 0, 2, 0, 4, 6, 0, 1];
const resultArray = push(inputArray);

console.log(resultArray); 

function bubbleSort(arr)
{
    for(i=0;i<arr.length-1;i++)
    {
        for(j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

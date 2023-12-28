function binary(arr,search)
{
    let s=0;
    let e=arr.length-1;
    while(s<=e)
    {
        let mid=Math.floor((s+e)/2);
        if(search==arr[mid])
        {
    return mid;
        }
        else if(search>arr[mid])
        {
            s=mid+1;
        }
        else{
            e=mid-1;
        }
    }
    return -1;

}

console.log(binary([1, 3, 5, 7, 9, 11, 13, 15, 17],7));

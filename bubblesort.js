function bubbleSort(arr)
{
	var temp;
	var swaps = 0;
	for(var i = 0; i < arr.length-1; i ++)
	{
		if(arr[i] > arr[i+1])
		{
			swap(arr, i+1, i);
			swaps++;
		}
	}
	if(swaps)
	{
		return bubbleSort(arr);
	}
	return arr;
}

swap = function(arr, index1, index2)
{
	temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }else{
        var splitted = splitArr(arr);
        console.log(splitted);
        var mS1 = mergeSort(splitted[0]);
        var mS2 = mergeSort(splitted[1]);
        var merged = merge(mS1, mS2);
        return merged;
    }
}

function splitArr(arr){
    var center = Math.floor(arr.length/2);
    var half1 = arr.slice(0,center);
    var half2 = arr.slice(center); 
    return [half1, half2];
}

function merge(arr1, arr2){
    var result = [];
    var i = 0;
    var j = 0;
    console.log(arr1[i] , arr2[j]);
    while(arr1[i] && arr2[j]){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }else{
            result.push(arr1[i]);
            i++
        }
    }
    result = (arr1[i]) ? result.concat(arr1.slice(i)) : result.concat(arr2.slice(j));
    return result;
}

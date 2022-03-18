const arr = [21, 34, 16, 8, 14, 27];
let maxmin = []
function minmax() {
    let min = Infinity;
    let max = -Infinity
    for (let i =0; i< arr.length ; i++){
        if (arr[i] < min){
            min = arr[i];
        } else{
            min = min;
        }
        if(arr[i]> max){
            max = arr[i];
        }else{
            max = max;
        }
        maxmin = [min, max];
        console.log(`The min and max of this array is: ${maxmin}`);
    }
}
minmax();
var findTheDistanceValue = function(arr1, arr2, d) {
    let counter = 0;
    let valid = true;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d ){
                valid = false;               
            }
        }
        if(valid === true){
            counter++;
        }
        else{
            valid = true;
        }

    }
    return counter;
};

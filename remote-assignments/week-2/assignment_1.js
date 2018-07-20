function max(...numbers) {
    // your code here
    console.log(numbers)
    let max_num = -1;
    numbers.forEach(n => {
        
        if(max_num < n){
            max_num = n;
        }else{
            max_num = max_num;
        }

    });
    console.log(max_num);
    return max_num;
}
max(1, 2, 4, 5); // result to 5
max(5, 2, 7, 1, 6); // result to 7
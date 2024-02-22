function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
// const sum = add(5);
// const sum = add();
// const sum = add(, 6);

/** default --> if value is not provided, take this as a default */
function add(num1=0, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
// const sum = add(5);
// const sum = add();
// const sum = add(, 6);

// function add(num1=0, num2=0, num3){
//     const result = num1 + num2 + num3;
//     console.log(num1, num2,num3, result);
//     return result;
// }
// const sum = add(5, 7);
// const sum = add(5);
// const sum = add();
// const sum = add(, 6);

// function fullName (first, last){
//     const full = first + ' ' + last;
//     console.log(full);
//     return full;
// }
// fullName("abid", "afia");

function friends(numb = []){}

function person(human = {}){}
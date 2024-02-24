/**
 * always used ===
 * equal comparison dos'nt work for non-primitive
 */
// const first = 2;
// const first = 1;
// const first = 0;
const first = '0';

// const second = 2;
// const second = '2';
// const second = true;
const second = false;

/** double equal */
if(first == second){
    console.log('double equal values are equal');
}
else {
    console.log('double equal values are not equal');
}

/** triple equal */
if(first === second){
    console.log('triple equal values are equal');
}
else {
    console.log('triple equal values are not equal');
}

// const third = {};
// const fourth = {};

// const third = {x: 5};
// const fourth = {x: 5};

// const third = [];
// const fourth = [];

// const third = [];
// const fourth = third;

const third = [45, 54, 98];
const fourth = [45, 54, 98];

if(third == fourth) {
    console.log('double equal values are equal third & fourth value');
}
else {
    console.log('double equal values are not equal third & fourth value');
}

if(third === fourth) {
    console.log('triple equal values are equal third & fourth value');
}
else {
    console.log('triple equal values are not equal third & fourth value');
}

/** 
 * type coercion.
 * type conversion.
 * type casting.
 */
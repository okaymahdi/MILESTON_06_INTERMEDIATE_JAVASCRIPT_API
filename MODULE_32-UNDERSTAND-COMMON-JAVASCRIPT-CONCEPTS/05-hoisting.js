print5();
print10();
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside', i);


for (let i = 0; i < 5; i++){
    console.log(i);
}

print5();
function print5 () {
    console.log('inside print',5);
}

const print10(){
    console.log('inside print10', 10);
}
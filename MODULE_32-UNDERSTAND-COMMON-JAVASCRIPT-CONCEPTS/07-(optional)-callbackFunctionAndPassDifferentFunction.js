function greeting(greetingHandler, name) {
    greetingHandler(name);
}


function greetingHandler(name){
    console.log('Good MOrning', name);
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');

function greetEvening(name){
    console.log('Good Evening', name);
}
greeting(greetEvening, 'Tom Soliman')
greeting(greetEvening, 'Tom Salman')

function greetNight(name){
    console.log('Good Night', name);
}
greeting(greetNight, 'Mahdi');
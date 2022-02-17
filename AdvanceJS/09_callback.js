/* ..................................
    Callback in js
    => Simply callback means calling a function into another function.
...................................... */


const order = (call_production) => {
    console.log("Order is ready, call production");
    call_production();
}

const production = ( ) => {
    console.log("Order received, startting production");
}


order(production);
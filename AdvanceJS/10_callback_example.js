const stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "penauts"]
};

const order = (fruit_name, call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    },2000);

}

const production = () => {
    setTimeout(() => {
        console.log("Production was started");
        setTimeout(()=>{
            console.log("The fruit has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log("The machine was started");
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.topping[1]} was added as toppings`);
                            setTimeout(()=>{
                                console.log("Serve Ice Cream :)");
                            },2000);
                        },3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}

order(0,production);


/*
    Callback hell is a phenomenon also known as Pyramid of Doom, 
    is an anti-pattern seen in code of asynchronous programming
    that afflicts a JavaScript developer 
    when he tries to execute multiple asynchronous operations one after the other. 
    By nesting callbacks in such a way, 
    we easily end up with error-prone, 
    hard to read, 
    and hard to maintain code
*/
/* ..................................
    A Promise is made
            |
            v
         Pending
           /  \         
        /        \ 
    Resolve    Reject
       |          |
       |          |
    .then         |
       |          |
    .then        .catch
        \        /
         .finlly
..................................... */


const stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "penauts"]
};

let is_shop_open = true;

const order = (time, work) => {
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            }, time);
            
        }else{
            reject(console.log("Our shop is closed"))
        }
    })
}


order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`));
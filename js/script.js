


// // Scrivi un programma che stampi in console i numeri da 1 a 100.
// // stampiamo caselle di numeri da uno a 100

const container = document.querySelector("div.main");

for ( i = 1; i <= 100; i++ ) {
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
       const element = `<div class="items fizzBuzz">FizzBuzz</div>` ;
       container.innerHTML += element ;
       
    }

    else if ( i % 3 === 0 ) {
        const element = `<div class="items fizz">Fizz</div>` ;
        container.innerHTML += element ;
        
    }
    
    else if ( i % 5 === 0 ) {
        const element = `<div class="items buzz">Buzz</div>` ;
        container.innerHTML += element ;
       
        
    
    } else {
        const element = `<div class="items number">${i}</div>` ;
        container.innerHTML += element ;
        
    }
}



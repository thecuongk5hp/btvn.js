for(let i=0; i<10; i++){
    console.log(i);
}


// Tính tổng các số từ 1 đến 10

let so = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);
    // so = so + i;
    so += i;
}
    // console.log(so);


    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {    
            console.log( `Khi i = ${i} thì j = ${j}`);   
        }
    }


    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    
    
    let n = 0;
    do {
        n++;
        console.log(n);
    } while (n <= 10);
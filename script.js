//////////////////////////////
//. Closures
const dani = function () {
    let pasager = 0;
    return function () {
        pasager++;
        console.log(`${pasager} acesta este passaportul `);
    }
}
const booker = dani();
booker();
booker();
booker();
booker();
booker();
booker();
booker();  

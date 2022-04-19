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
// style 
// this is style begginer  , I like 

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'blue'

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'black'
    })
})();

// // function x(){
// //     for(var i = 1 ;i<=5; i++){
// //         function closure(x){
// //             setTimeout(function(){
// //                 console.log(x);
// //             },x*1000)
// //         }
// //         closure(i)
// //     }
// // }
// // x()

// function y(){
//     for(let i=1; i<=5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }
// y()

function x() {
    console.log(`Hello world`);

    function y(x) {
        console.log(x());
    }
    y()
}
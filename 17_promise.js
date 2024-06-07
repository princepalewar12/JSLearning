// const promiseNotes = new Promise(function (resolve, reject) {

//     console.log('Promise in pending state');

//     const isNotesPrepared = false;

//     if (isNotesPrepared) {

//         resolve('Notes is prepared and here is the notes guys...')

//     } else {

//         reject("Sorry guys, I din't get time, Please prepare notes your self");
//     }

// })

// promiseNotes
//     .then(function(success) {

//         console.log(`========= then() ============`);

//         console.log(success);

//         console.log('Thank you....');

//     }).catch(function(failure) {

//         console.log(`========= catch() ============`);

//         console.log(failure);

//         console.log(`Are yar.... `);

//     }).finally(function () {

//         console.log(`========= finally block ============`);

//         console.log('I must have notes... ');

//         console.log("05_conversion.js In case Sir won't share it, will prepare my self");

//     })

const homeworkReady = new Promise(function (resolve, reject) {
  console.log(`Promise is in Pending mode`);

  const isReady = false;
  if (isReady) {
    resolve (`The Home work is ready, You can copy..`);
  } else {
    reject (`Sorry it's not Ready`);
  }
});

homeworkReady
  .then(function (success) {
    console.log(`===When promise gets resolve===`);
    console.log(success);
    console.log(`That's Great`);
  })
  .catch(function (failure) {
    console.log(`===When promise gets rejected===`);
    console.log(failure);
    console.log(`Ohh No..`);
  })
  .finally(function () {
    console.log(`I must have notes`);
    console.log(
      `The Finally block will run in both the cases weather the promise gets resolve or reject`
    );
  });

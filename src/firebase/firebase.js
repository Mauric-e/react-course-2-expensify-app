 import * as firebase from 'firebase';
import expenses from '../selectors/expenses';
import configureStore from '../store/configureStore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();

  export { firebase, database as default}

  // //child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // //child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // //child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // database.ref('expenses')
  //   .on('value',(snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       })
  //     })
  //     console.log(expenses)
  //   })


  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       })
  //     })
  //     console.log(expenses)
  //   })

    


  // database.ref('expenses').push({
  //   description: 'Expense 3',
  //   amount: '60',
  //   createdAt: '2021',
  //   notes: 'This is a second note'
  // })

  // database.ref('expenses/-MbXyPHqX-c-WtSSMCM8').remove()
   

  // database.ref('notes').push({
  //   title: 'Course topics',
  //   body: "React Native, Vue, Angular"
  // })

  // const firebaseNotes  = {
  //   notes: {
  //     asdf:{
  //       title: 'first note!',
  //       body: 'This is my note'
  //     },
  //     sdfghjk:{
  //       title: 'second note!',
  //       body: 'This is my second note'
  //     }
  //   }
  // }

  // const notes = [{
  //   id: '12',
  //   title: 'first note!',
  //   body: 'This is my note'

  // },{
  //   id: '13mlp3',
  //   title: 'second note!',
  //   body: 'This is my second note'
  // }];

  // database.ref('notes').set(notes);

  // database.ref('location/city')
  //         .once('value')
  //         .then((snapshot) => {
  //           const val = snapshot.val();
  //           console.log(val)
  //         }).catch((e) => {
  //           console.log('Error fetching data', e)
  //         })



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, (e) => {
//       console.log('Error with data fetchindg', e)
//   });
  
//   setTimeout(() => {
//     database.ref('age').set(25)
//   }, 5000);

//   setTimeout(() => {
//     database.ref().off(onValueChange)
//   }, 10000);

//   setTimeout(() => {
//     database.ref('age').set(26)
//   }, 15000);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// FETCHING DATA USING ONCE

//   database.ref('location/city')
//           .once('value')
//           .then((snapshot) => {
//              const val = snapshot.val();
//              console.log(val)
//           }).catch((e) => {
//               console.log('Error fetching data')
//           })

//   database.ref().set({
//       name: "Maurice Anani",
//       age: 23,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Accra',
//           country: 'Ghana'
//       }
//   }).then(() => {
//       console.log('Data saved!')
//   }).catch(() => {
//       console.log('This failed')
//   })

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   })

//   database.ref()
//           .remove()
//           .then(() => {
//               console.log('Data Deleted');
//           }).catch((e) => {
//               console.log('An error occured', e)
//           })

  //database.ref().set("This is my data")
  // database.ref().update({
  //   'location/country' : 'USA'
  // })

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: '244332',
  //   createdAt: 49489200
  // })



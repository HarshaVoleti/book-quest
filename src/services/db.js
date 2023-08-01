// import db from './db';

// export const getBooks = () => {
//   return db.collection('books').get()
//     .then((querySnapshot) => {
//       const books = [];
//       querySnapshot.forEach((doc) => {
//         books.push({ id: doc.id, ...doc.data() });
//       });
//       return books;
//     })
//     .catch((error) => {
//       console.error('Error fetching books:', error);
//       return [];
//     });
// };

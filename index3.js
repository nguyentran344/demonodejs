// function sum(a, b, fun) {
//   let c = 0;
//   setTimeout(() => {
//     c = a + b;
//     fun(c);
//   }, 0);
// }

// let a = sum(1, 4, function (data) {
//   console.log(data);
// });

// function getUserID(fn) {
//   setTimeout(() => {
//     let userID = 10;
//     fn(userID);
//   });
// }

function getUserID() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let UserID = 10;
      resolve(UserID);
    });
  });
}

function getPostUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let post = { id: "12", nam: "nguyen" };
      resolve(post);
    });
  });
}

function getCommentPostUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let comment = { id: "13", name: "bao" };
      resolve(comment);
    });
  });
}

// function getPostUser(userID, fun) {
//   setTimeout(() => {
//     let post = { id: "12", nam: "nguyen" };
//     fun(post);
//   });
// }
// function getCommentPostUser(post, fun) {
//   setTimeout(() => {
//     let comment = { id: "13", name: "bao" };
//     fun(comment);
//   });
// }

// getUserID(function (userID){
//     getPostUser(userID, function(post){
//         getCommentPostUser(post, function(comment){
//             console.log(comment)
//         })
//     })
// })

// let abc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     getUserID((data) => {
//       resolve(data);
//     });
//   }, 0);
// });
// abc
//   .then((data) => {
//     console.log(data);
//     getPostUser(data, function (post) {
//       console.log(post);
//       return post;
//     });
//   })
//   .then((post) => {
//     getCommentPostUser(post, function (comment) {
//       console.log(comment);
//     });
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

async function xyz() {
  let UID = await getUserID();
  let post = await getPostUser(UID);
  let comment = await getCommentPostUser(post);
  return [comment, post, UID];
}
xyz().then((data) => {
  console.log("ASYNC", data);
});

Promise.all([getUserID(), getPostUser(), getCommentPostUser()], (data) => {
  console.log(data);
});

console.clear ();
// let User = {
//   name: '',
//   age: 0,
//   email: '',
//   gender: '',
//   agreed: false,
//   update (key, value) {
//     User[key] = value;
//   },
// };
const users = [];

/**
 * 
 * @param {User} user Data about user.
 */
const createUser = user => {
  const errors = validateForm (user);
  const errArr = Object.entries (errors);
  // console.log (Object.entries (errors).length);
  if (errArr.length > 0) {
    errArr.forEach (err => console.log (`${err[0]} : ${err[1]} `));
  } else {
    users.push (user);
    console.log (`${user.email} is added to the list.`);
  }
};

/**
 * 
 * @param {String} id email address as an ID.
 * @description Prints user info.
 * @returns {Object} user object
 */
const readUser = id => {
  const user = users.find (user => user.email === id);
  return user;
};

/**
 * 
 * @param {String} key key of an User to be changed.
 * @param {String} value Value to be chabged.
 * @param {String} id Email to update the user with email.
 */
const updateUser = (key, value, id) => {
  const currentUser = users.find (user => user.email === id);
  currentUser[key] = value;
  const errors = validateForm (currentUser);
  // console.log (errors);
  const errArr = Object.entries (errors);
  // console.log (users.findIndex (user => user.email === id), '33');

  if (errArr.length > 0) {
    errArr.forEach (err => console.log (`Error in '${err[0]}' : ${err[1]} `));
  } else {
    users.splice (users.findIndex (user => user.email === id), 1, currentUser);
  }
};

/**
 *
 * @param {User} user   Object of user 
 * @description funciton to validate added user fields.
 * @returns {Object} Returnrs object of errors.
 */
const validateForm = user => {
  const errors = {};
  const {name, email, age, gender, agreed} = user;
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  if (!regEmail.test (email)) {
    errors['email'] = 'Enter the valid email.';
  }
  if (!regName.test (name)) {
    errors['name'] = 'Enter valid name.';
  }
  if (age < 0 && age >= 125) {
    errors['age'] = 'Enter valid age.';
  }
  if (
    !(gender.toLowerCase () === 'female' || gender.toLowerCase () === 'male')
  ) {
    errors['gender'] = 'Enter valid gender.';
  }
  if (!(agreed.toLowerCase () === 'yes' || agreed.toLowerCase () === 'no')) {
    errors['agreed'] = 'Enter yes or no';
  }

  return errors;
};

/** 
 * 
 * @param {String} id emailId of a user to delete.
 * @description deletes an user with email
 * @returns {Object}  deleted user object
 */
const deleteUser = id => {
  const deletedUser = users.find (user => user.email === id);
  users.splice (users.indexOf (deleteUser), 1);
  return deletedUser;
};

const sortBy = key => {
  const sortedUsers = users.slice ();
  return sortedUsers.sort (
    (a, b) => (a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1)
  );
};

//CRUD methods call
//Create
createUser ({
  name: 'Deep',
  age: 16,
  email: 'deep25@gmail.com',
  gender: 'male',
  agreed: 'yes',
});
createUser ({
  name: 'Abc',
  age: 20,
  email: 'abc25@gmail.com',
  gender: 'male',
  agreed: 'yes',
});
createUser ({
  name: 'Efg',
  age: 18,
  email: 'Efg25@gmail.com',
  gender: 'male',
  agreed: 'yes',
});

//Read

(() => {
  const {name, age, email, gender, agreed} = readUser ('deep25@gmail.com');
  console.log (`User info:
              Name\t:\t${name}
              age\t:\t${age}
              email\t:\t${email}
              gender\t:\t${gender}
  Agreed to the terms\t:\t${agreed}
`);
}) ();
//Update
updateUser ('agreed', 'no', 'abc25@gmail.com');
// Delete
// const del = deleteUser ('abc25@gmail.com');
// console.log (`${del.email} is removed`);
// console.log ('abc');

//Sort
console.log (sortBy ('name'));
// console.log (users);

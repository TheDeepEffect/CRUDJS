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
  let errArr = Object.entries (errors);
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
  let user = users.find (user => user.email === id);

  const {name, age, email, gender, agreed} = user;
  console.log (`User info:
                Name\t:\t${name}
                age\t:\t${age}
                email\t:\t${email}
                gender\t:\t${gender}
    Agreed to the terms\t:\t${agreed}
  `);
  return user;
};

/**
 * 
 * @param {String} key key of an User to be changed.
 * @param {String} value Value to be chabged.
 * @param {String} id Email to update the user with email.
 */
const updateUser = (key, value, id) => {
  let currentUser = users.find (user => user.email === id);
  currentUser[key] = value;
  const errors = validateForm (currentUser);
  // console.log (errors);
  let errArr = Object.entries (errors);
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

  if (!regEmail.test (email) && 'email' in user) {
    errors['email'] = 'Enter the valid email.';
  }
  if (!regName.test (name) && 'name' in user) {
    errors['name'] = 'Enter valid name.';
  }
  if (age < 0 && age >= 125 && 'age' in user) {
    errors['age'] = 'Enter valid age.';
  }
  if (
    !(gender.toLowerCase () === 'female' || gender.toLowerCase () === 'male') &&
    'gender' in user
  ) {
    errors['gender'] = 'Enter valid gender.';
  }
  if (
    !(agreed.toLowerCase () === 'yes' || agreed.toLowerCase () === 'no') &&
    'agreed' in user
  ) {
    errors['agreed'] = 'Enter yes or no';
  }

  return errors;
};

const deleteUser = id => {
  let deletedUser = users.find (user => user.email === id);
  users.splice (users.indexOf (deleteUser), 1);
  return deletedUser;
};

//CRUD methods call
createUser ({
  name: 'Deep',
  age: 20,
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

//Read
readUser ('deep25@gmail.com');
//Update
updateUser ('agreed', 'no', 'abc25@gmail.com');
// Delete
let del = deleteUser ('abc25@gmail.com');
console.log (`${del.email} is removed`);
// console.log ('abc');

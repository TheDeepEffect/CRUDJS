console.clear ();
let User = {
  name: '',
  age: 0,
  email: '',
  gender: '',
  agreed: false,
};
const users = [];

/**
 * 
 * @param {User} user Data about user.
 * @returns {String} Added user | Error if any.
 */
const createUser = user => {
  const errors = validateForm (user);

  if (Object.entries (errors).length > 0) {
    return errors;
  } else {
  }
};

/**
 *
 * @param {User} user   Object of user 
 * @description funciton to validate added user fields.
 */
const validateForm = user => {
  const errors = {};
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regName = /\w/;
  const {name, email, age, gender, agreed} = user;
  if (!regEmail.test (email)) {
    errors['email'] = 'please enter the valid email.';
  }

  return errors;
};

createUser ({
  name: 'Deep',
  age: 20,
  email: 'deep25@gmail.com',
  gender: 'Male',
  agreed: false,
});

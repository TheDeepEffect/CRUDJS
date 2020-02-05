function User(name, age, email, gender, agreed = false) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.agreed = agreed;
}
User.prototype = {
  setName(name) {
    this.name = name;
  },
  getName () { this.name},
  setAge(age){
    this.age = age;
  },
  getAge(){ this.age },
  setEmail(email) {this.email = email},
  getEmail(){this.email}
  setGender(gender) {
    this.gender = gender;
  },
  getGender(){this.gender}

};



UserListA = () => {
  new User ('Maulik');
};
let list = UserListA ();
console.log (list);

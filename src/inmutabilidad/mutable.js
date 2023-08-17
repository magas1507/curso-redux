//Mutable
// const updateAge = (userInfo) =>{
//   userInfo.age = userInfo.age + 1;
//   return userInfo;
// };

//Inmutable: Object.assign
  // const updateAge = (userInfo) =>{
  //   return Object.assign({}, userInfo, { age: userInfo.age + 1})
  // };
//Inmutable: Spread Operator

  const updateAge = (userInfo) =>{
    return { ...userInfo, age: userInfo.age + 1}
  }; 

const userInfo = {
  name: 'Eddie',
  age: 22,
  email: 'ed@mail.com',
}

console.log('userInfo before', userInfo);

const updateUserInfo = updateAge(userInfo);

console.log('userInfo After', userInfo);
console.log('updatedUser', updateUserInfo);
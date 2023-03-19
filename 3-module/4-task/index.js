function showSalary(users, age) {
  // ваш код...
  let eligibleUsers = users.filter(user => user.age <= age);
  let formattedUsers = eligibleUsers.map(user => `${user.name}, ${user.balance}`);
  return formattedUsers.join('\n');
}

let users = [
  { "balance": "$1,825.65", "picture": "https://placehold.it/32x32", "age": 21, "name": "Golden Branch", "gender": "male", "greeting": "Hello, Golden Branch! You have 7 unread messages.", "favouriteFruit": "banana" },
  { "balance": "$1,490.15", "picture": "https://placehold.it/32x32", "age": 28, "name": "Duncan Randall", "gender": "male", "greeting": "Hello, Duncan Randall! You have 3 unread messages.", "favouriteFruit": "banana" },
];

let maxAge = 26;
let result = showSalary(users, maxAge);
console.log(result);
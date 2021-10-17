function showSalary(users, age) {
  let values = [];
  users.forEach(function(item) {
    if (item.age <= age) {
      values.push(`${item.name}, ${item.balance}\n`);
    }
  });
  return values.join('').slice(0, -1);
};

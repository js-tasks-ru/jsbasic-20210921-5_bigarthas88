function makeFriendsList(friends) {
  const fullNames = friends.map(person => `${person.firstName} ${person.lastName}`);
  const friendsList = document.createElement('ul');
  let listItem;
  for (let i = 0; i < fullNames.length; i++) {
    let item = fullNames[i];
    listItem = document.createElement("li");
    listItem.innerHTML = item;
    friendsList.appendChild(listItem);
  }
  return friendsList;
}

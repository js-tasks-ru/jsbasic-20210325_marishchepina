function makeFriendsList(friends) {
  const ul = document.createElement("ul");
  friends.map((friend) => {
    const li = document.createElement("li");
    li.textContent = friend.firstName + friend.lastName;
    ul.append(li);
  });
  return ul;
}

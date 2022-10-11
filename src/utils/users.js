const users = [];

//addUser, removeUser, getUser, getUsersInRoom

//----1 addUser
const addUser = ({ id, username, room }) => {
  //clean the Data
  username: username.trim().toLowerCase();
  room: room.trim().toLowerCase();

  //validate the Data
  if (!username || !room) {
    return {
      error: "userName & room are required!",
    };
  }

  //check existing User
  const existingUser = users.find((user) => {
    user.username === username && user.room === room;
  });

  //validate userName
  if (existingUser) {
    return {
      error: "userName is in use!",
    };
  }

  //storeUser
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//----2 removeUser
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//----3 getUser
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//----4 getUsersInRoom
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

const subject = {};
const subscribeToFriendStatus = (id, callback) => {
  if (!subject[id]) {
    subject[id] = { isOnline: false, callbacks: [] };
  }
  console.log("subject[id]", subject[id]);
  subject[id].callbacks.push(callback);
};
const unsubscribeFromFriendStatus = (id, callback) => {
  subject[id].callbacks = subject[id].callbacks.filter(
    item => item !== callback
  );
};

setInterval(() => {
  for (let key in subject) {
    subject[key].isOnline = !subject[key].isOnline;
    subject[key].callbacks.forEach(callback => {
      callback({ isOnline: subject[key].isOnline });
    });
  }
}, 1000);
export default { subscribeToFriendStatus, unsubscribeFromFriendStatus };

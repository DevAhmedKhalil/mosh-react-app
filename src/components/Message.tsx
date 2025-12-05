let count = 0;

const Message = () => {
  // This is impure component
  // The strict mode run the message twice in dev mode only
  console.log("message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;

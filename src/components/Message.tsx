let count = 0;

const Message = () => {
  // This is impure component
  count++;
  return <div>Message {count}</div>;
};

export default Message;

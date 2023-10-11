const Child = ({ handleGreet }) => {
  return (
    <div>
      <button onClick={() => handleGreet("Child from props.")}>
        Handle Greeting
      </button>
    </div>
  );
};
export default Child;

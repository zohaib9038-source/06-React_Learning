import AppleCounter from "./component/AppleCounter.jsx";
const App = () => {
  return (
    <div>
      <AppleCounter
        onClick={() => {
          console.log("Onclick event");
        }}
      />
    </div>
  );
};

export default App;

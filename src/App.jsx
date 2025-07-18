import "./App.css"; // Import global styles for the app.
import Lottery from "./Lottery"; // Import the Lottery component.

// The main App component.
function App() {
  return (
    <>
      {/* Render the Lottery component with custom props. */}
      {/* You can create multiple lotteries with different rules. */}
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
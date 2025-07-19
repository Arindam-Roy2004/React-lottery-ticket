import "./App.css"; // Import global styles for the app.
import Lottery from "./Lottery"; // Import the Lottery component.
import { sum } from "./helper"; // Import the sum helper function.

// The main App component.
function App() {
  // A winning condition where all numbers in the ticket must be the same.
  const allNumbersSame = (tickets) => {
    return tickets.every((ticket) => ticket === tickets[0]);
  };

  return (
    <>
      {/* A lottery where you win if all three numbers are the same. */}
      <Lottery
        title="Mini Daily"
        n={3}
        winCond={allNumbersSame}
      />

      {/* The original lottery where the sum must be 15. */}
      {/* We don't need to pass winCond here because it uses the default. */}
      <Lottery title="Lottery" n={3} winningSum={15} />
    </>
  );
}

export default App;
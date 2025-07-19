import { useState } from "react"; // Import useState hook for state management.
import { genTickets, sum } from "./helper"; // Import helper functions.
import Ticket from "./Ticket"; // Import the Ticket component with tumbler animation.
import "./Lottery.css"; // Import styles for the Lottery component.

// The main Lottery component.
export default function Lottery({
  title = "Lottery",
  n = 3,
  winningSum = 15,
  // Add a new prop for the winning condition function.
  // The default condition checks if the sum of tickets equals the winningSum.
  winCond = (tickets) => sum(tickets) === winningSum,
}) {
  // State to hold the array of ticket numbers.
  let [tickets, setTickets] = useState(genTickets(n));
  // State to manage the rolling animation.
  let [isRolling, setIsRolling] = useState(false);

  // Use the passed-in winCond function to determine if the user has won.
  // The win is only shown after the rolling animation is complete.
  const isWinning = winCond(tickets) && !isRolling;

  // Function to generate a new set of tickets and trigger the animation.
  const buyNewTicket = () => {
    // Generate the new tickets first. This is crucial.
    // The animation needs to know the destination number before it starts.
    setTickets(genTickets(n));
    // Set isRolling to true to trigger the animation on the new numbers.
    setIsRolling(true);
  };

  // A function for the Ticket component to call when all animations are finished.
  const onAnimationComplete = () => {
    setIsRolling(false);
  };

  return (
    // The main container for the lottery game.
    <div className="Lottery">
      {/* Display the title of the lottery game. */}
      <h1>{title}</h1>
      {/* Render the Ticket component, passing the current tickets and rolling state. */}
      <Ticket
        tickets={tickets}
        isRolling={isRolling}
        onAnimationComplete={onAnimationComplete}
      />
      {/* A button to trigger buying a new ticket. It's disabled during animation. */}
      <button onClick={buyNewTicket} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Buy New Ticket"}
      </button>
      {/* Display a congratulatory message if the user wins. */}
      {isWinning && (
        <h3 className="Lottery-result">Congratulations, you won!</h3>
      )}
    </div>
  );
}
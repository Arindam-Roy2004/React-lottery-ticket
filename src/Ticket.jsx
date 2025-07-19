import { useEffect, useRef } from "react"; // Import hooks for side effects and references.
import TicketNum from "./TicketNum"; // Import the new TicketNum component.
import "./Ticket.css"; // Import styles for the ticket.

// The Ticket component now manages a collection of TicketNum components.
export default function Ticket({ tickets, isRolling, onAnimationComplete }) {
  // A ref to count how many tumblers have finished animating.
  const completedAnimations = useRef(0);

  // This effect runs whenever the 'isRolling' state changes.
  useEffect(() => {
    // If we are not rolling, reset the counter for the next round.
    if (!isRolling) {
      completedAnimations.current = 0;
      return;
    }
  }, [isRolling]);

  // This function is called by each TicketNum when its animation ends.
  const handleAnimationEnd = () => {
    // Increment the counter for completed animations.
    completedAnimations.current += 1;
    // If all tumblers have finished, notify the parent Lottery component.
    if (completedAnimations.current === tickets.length) {
      onAnimationComplete();
    }
  };

  return (
    <div className="Ticket">
      {/* Map over the tickets array and render a TicketNum for each one. */}
      {tickets.map((ticket, idx) => (
        <TicketNum
          key={idx}
          num={ticket}
          isRolling={isRolling}
          delay={idx * 0.3} // Pass the sequential delay.
          onAnimationEnd={handleAnimationEnd} // Pass the handler function.
        />
      ))}
    </div>
  );
}
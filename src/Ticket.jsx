import { useEffect, useRef } from "react"; // Import hooks for side effects and references.
import "./Ticket.css"; // Import styles for the ticket.

// The Ticket component now handles the animation end event.
export default function Ticket({ tickets, isRolling, onAnimationComplete }) {
  // A ref to count how many tumblers have finished animating.
  const completedAnimations = useRef(0);

  // This effect runs whenever the 'isRolling' state changes.
  useEffect(() => {
    // If we are not rolling, reset the counter and do nothing.
    if (!isRolling) {
      completedAnimations.current = 0;
      return;
    }
  }, [isRolling]);

  // This function is called by each tumbler when its animation ends.
  const handleAnimationEnd = () => {
    // Increment the counter for completed animations.
    completedAnimations.current += 1;
    // If all tumblers have finished, notify the parent component.
    if (completedAnimations.current === tickets.length) {
      onAnimationComplete();
    }
  };

  return (
    <div className="Ticket">
      {tickets.map((ticket, idx) => (
        <div className="Ticket-num-container" key={idx}>
          <div
            className={`Ticket-num-reel ${isRolling ? "rolling" : ""}`}
            style={{
              "--final-pos": `translateY(-${ticket * 10}%)`,
              animationDelay: `${idx * 0.3}s`, // This ensures sequential start.
            }}
            onAnimationEnd={handleAnimationEnd} // Call function when animation finishes.
          >
            {[...Array(10)].map((_, i) => (
              <div className="Ticket-num" key={i}>
                {i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
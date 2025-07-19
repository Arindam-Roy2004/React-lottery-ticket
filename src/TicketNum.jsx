import "./Ticket.css"; // It shares the same styles as the Ticket component.

// The TicketNum component displays a single animated number tumbler.
export default function TicketNum({ num, isRolling, delay, onAnimationEnd }) {
  return (
    // This is the viewport for the number tumbler.
    <div className="Ticket-num-container">
      {/* 
        This is the reel that contains all 10 numbers and moves vertically.
        The 'rolling' class is applied to trigger the animation.
      */}
      <div
        className={`Ticket-num-reel ${isRolling ? "rolling" : ""}`}
        style={{
          // This CSS variable tells the animation where to stop.
          "--final-pos": `translateY(-${num * 10}%)`,
          // This staggers the animation start time for each tumbler.
          animationDelay: `${delay}s`,
        }}
        onAnimationEnd={onAnimationEnd} // Call the passed function when animation finishes.
      >
        {/* Create a reel of numbers from 0 to 9 for the tumbler effect. */}
        {[...Array(10)].map((_, i) => (
          <div className="Ticket-num" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
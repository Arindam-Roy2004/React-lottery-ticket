// This function generates an array of 'n' random numbers between 0 and 9.
export function genTickets(n) {
  // Create an array of a specified length 'n'.
  const arr = new Array(n);
  // Loop 'n' times to fill the array.
  for (let i = 0; i < n; i++) {
    // Generate a random integer from 0 to 9 and place it in the array.
    arr[i] = Math.floor(Math.random() * 10);
  }
  // Return the array of random numbers.
  return arr;
}

// This function calculates the sum of all numbers in a given array (tickets).
export function sum(tickets) {
  // Use the reduce method to sum up all elements in the tickets array.
  return tickets.reduce((acc, ticket) => acc + ticket, 0);
}
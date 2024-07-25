const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// Function to find the minimum cost to connect all ropes
function mincost(arr) {
  // Initialize a min-heap (priority queue)
  const minHeap = new MinPriorityQueue();
  
  // Add all rope lengths to the min-heap
  arr.forEach(length => minHeap.enqueue(length));

  let totalCost = 0;

  // While there is more than one rope in the heap
  while (minHeap.size() > 1) {
    // Extract the two smallest ropes
    const first = minHeap.dequeue().element;
    const second = minHeap.dequeue().element;
    
    // Calculate the cost to connect these two ropes
    const cost = first + second;
    
    // Add the cost to the total cost
    totalCost += cost;
    
    // Add the new rope length back to the min-heap
    minHeap.enqueue(cost);
  }

  return totalCost;
}

// Example usage
const ropes = [4, 3, 2, 6];
console.log(mincost(ropes));  // Output should be 29

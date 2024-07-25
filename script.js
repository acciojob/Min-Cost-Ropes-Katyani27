function mincost(arr) {
    if (arr.length < 2) {
        return 0; // No ropes or only one rope, no cost to connect
    }
    
    // Initialize a min-heap priority queue
    const minHeap = new MinHeap(arr);
    let totalCost = 0;

    // Continue until only one rope remains
    while (minHeap.size() > 1) {
        // Extract the two shortest ropes
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();

        // Calculate the cost to connect these two ropes
        const currentCost = first + second;

function heapSort(array) {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(array, size, i);
  }

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    heapify(array, i, 0);
  }
}

  let max = i; 
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && array[left] > array[max]) {
    max = left;
  }
  if (right < size && array[right] > array[max]) {
    max = right;
  }

  /* TODO: Possible to reliably assess if the current element is a duplicate here and remove it?
   * if (array[left] === array[right] && !isNaN(array[left]) && array[left] != null) {
   *   console.log(`Duplicate!
   *     size: %d left: %d, right: %d,
   *     i: %d max: %d i-val: %d left: %s right: %s`,
   *     size, left, right,
   *     i, max, array[i], array[left], array[right]
   *   );
   *
   *   array[right] = null;
   *   // delete(array[right]);
   * }
   */

  if (max != i) {
    let temp = array[i];
    array[i] = array[max];
    array[max] = temp;

    heapify(array, size, max);
  }
}

export const dblLinear = function(n) {
  
  const calculatePairs = (x) => {    
    const y = (x) => 2 * x + 1;
    const z = (x) => 3 * x + 1;
    
    return [y(x), z(x)];
  }
 
  // TODO: This seems very inefficient. Find a better method to get calculations needed (always n-based?)
  const commonFactorRate = 9/10; // rate of common values and "overlap"
  const calculationCount = Math.ceil(n / (1 - commonFactorRate));

  let u = [1];
  let cursor = 0;
  
  while (cursor < calculationCount) {
    let yz = calculatePairs(u[cursor]);
    u.push(...yz);
    cursor ++;
  }


/* NOTE: Naieve Solution
 * TODO: Possible to use this clean syntax and implement the heapSort function into .sort closure?
 *  const unique = u
 *   .sort((a,b) => a - b)
 *   .filter((curr, idx, arr) =>  {
 *     return idx > 0 ? arr[idx-1] !== curr : true;
 *   });
 */

  heapSort(u);
  u = u.filter((x, idx, arr)=> x != arr[idx+1]);

  return u[n];
}

export default dblLinear;

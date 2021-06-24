export function lemonade(queue: (5 | 10 | 20)[]) {
  let cash = 0;
  const cost = 5;

  for (const costumer of queue) {
    const change = costumer - cost;
    if (change > cash) return false;
    else cash += cost - change;
  }

  return true;
}

export function lemonade(queue: (5 | 10 | 20)[]) {
  let cash = 0;
  const cost = 5;

  for (const customer of queue) {
    const change = customer - cost;
    if (change > cash) return false;
    else cash += cost - change;
  }

  return true;
}

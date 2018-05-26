function reachDestination(distance, speed) {
  let time = distance / speed; 
  let r = time % 1;
  r = r < 0.25 ? 0 : r < 0.75 ? 0.5 : 1;
  time = Math.floor(time) + r;
  let s = time !== 1 ? 's' : '';
  return `The train will be there in ${time} hour${s}.`;
}
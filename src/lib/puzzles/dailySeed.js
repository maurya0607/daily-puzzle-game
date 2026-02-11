// export function getDailySeed() {
//   return new Date().toISOString().split("T")[0];
// }


export function getDailySeed() {
  const today = new Date();
  const dateString = today.toISOString().split("T")[0];
  return generateHash(dateString);
}

// export function generateHash(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   return Math.abs(hash);
// }

export function generateHash(seed) {
  let hash = 0;
  const str = seed.toString();
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}


import { ArrayImages } from "./imagesImporter";

export const Items = () => {
  let items = [];

  for (let i = 0; i < 10; i++) {
    let item = { id: i, image: ArrayImages[i] };

    items.push(item);
    items.push(Object.assign({}, item));
  }

  shuffle(items);

  return items;
};

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

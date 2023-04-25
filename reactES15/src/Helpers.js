import React from "react";

function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  console.log(idx);
  return items[idx];
}

const remove = (items, item) => {
  const idx = items.indexOf(item);
  if (idx > -1) {
    items.splice(idx, 1);
  }
  return items;
};

export { choice, remove };

let idCounter = () => {
  let id = 0;
  return function() {
    return id++;
  };
};

const idUp = idCounter();

export const notes = [
  {
    id: idUp(),
    title: "Note 1",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Note 2",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Note 3",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Note 4",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  }
];

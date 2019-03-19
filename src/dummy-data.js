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
    title: "Functional Components I",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Functional Components II",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Class Components I",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  },
  {
    id: idUp(),
    title: "Class Components II",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae ad aut assumenda ab? Odit quisquam nulla magnam quos maiores."
  }
];

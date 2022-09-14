const plants = [
  {
    id: 1,
    icon: require("../assets/images/cactus.jpg"),
    name: "Stranded Cactus",
    isSelected: false,
    qty: 1,
    amount: 900,
    discount: 0,
    desc: "require four to six hours of bright",
  },
  {
    id: 2,
    icon: require("../assets/images/plant2.png"),
    name: "Leafy Cactus",
    isSelected: false,
    qty: 1,
    amount: 700,
    discount: 0,
    desc: "This gorgeous group of vine-like plants. ",
  },
  {
    id: 3,
    icon: require("../assets/images/plant3.png"),
    name: "Sago Palm",
    isSelected: false,
    qty: 1,
    amount: 500,
    discount: 0,
    desc: "Natural, organic house plant",
  },
  {
    id: 4,
    icon: require("../assets/images/plant4.png"),
    name: "Potted Cactus ",
    isSelected: false,
    qty: 1,
    amount: 200,
    discount: 0,
    desc: "Cacti require four hours sunlight daily",
  },
  {
    id: 5,
    icon: require("../assets/images/plant5.png"),
    name: "Dragon Cactus ",
    isSelected: false,
    qty: 1,
    amount: 1000,
    discount: 0,
    desc: "Known for its leathery skin"
  },
  {
    id: 6,
    icon: require("../assets/images/plant6.png"),
    name: "Potted Pictus ",
    isSelected: false,
    qty: 1,
    amount: 200,
    discount: 0,
    desc: "Known for its colourfulness",
  },
];

const myCart = [];

export default {
  myCart,
  plants,
};

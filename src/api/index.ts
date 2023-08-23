import uuid from "react-uuid";

export interface CoffeeProps {
  _id: string;
  name: string;
  description: string;
  category: string[];
  img: string;
  price: number;
  quantity: number;
}

export const Coffes: CoffeeProps[] = [
  {
    _id: uuid(),
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    category: ["Tradicional"],
    img: "Image-1.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    category: ["Tradicional"],
    img: "Image-2.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    category: ["Tradicional"],
    img: "Image-3.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    category: ["Tradicional"],
    img: "Image-4.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    category: ["gelado"],
    img: "Image-5.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    category: ["com leite"],
    img: "Image-6.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    category: ["especial", "gelado"],
    img: "Image-7.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    category: ["especial", "com leite"],
    img: "Image-8.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    category: ["especial"],
    img: "Image-9.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    category: ["especial", "gelado"],
    img: "Image-10.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    category: ["Tradicional", "com leite"],
    img: "Image-11.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    category: ["Tradicional", "gelado"],
    img: "Image-12.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    category: ["gelado", "com leite"],
    img: "Image.svg",
    price: 9.9,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    category: ["gelado", "com leite"],
    img: "Type=Expresso.svg",
    price: 9.9,
    quantity: 0,
  },
];

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export const productList = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://picsum.photos/200/300",
  },
];

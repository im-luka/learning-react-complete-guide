import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "PS5",
    price: 500,
    description: "The best console in the world",
  },
  {
    id: "p2",
    title: "Monitor",
    price: 300,
    description: "You can see everything here",
  },
  {
    id: "p3",
    title: "T-Shirt",
    price: 20,
    description: "Dont walk naked please",
  },
  {
    id: "p4",
    title: "Microwave",
    price: 100,
    description: "For the delicious food",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

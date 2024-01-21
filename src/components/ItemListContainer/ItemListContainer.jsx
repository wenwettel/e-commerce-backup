import './styled.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../mocks';
function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // getProducts()
    //   .then((res) => setItems(res))
    //   .catch((err) => console.log(err.message));

    const fetchData = async () => {
      try {
        const res = await getProducts();
        setItems(res);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      {/* componente contenedor */}
      <div className="listItems">
        {error && error}
        {items.map((item) => {
          const { name, category, stock, img, description, id } = item;
          return (
            <div className="item" key={id}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{`stock: ${stock} `}</p>
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;

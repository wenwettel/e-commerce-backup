import React from 'react';
import { getProductById } from '../../mocks';
import { useEffect, useState } from 'react';

function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    getProductById(1).then((res) => setProductDetail(res));
  }, []);
  console.log(productDetail);
  return <div>Dettale del producto</div>;
}

export default ItemDetailContainer;

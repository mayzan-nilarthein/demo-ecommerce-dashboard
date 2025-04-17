import React, { useEffect } from 'react';
import { Table } from 'antd';


const data = Array.from({ length: 10 }, (_, i) => ({
  key: i,
  name: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
}));


const columns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
];

const fetchData =async()=> {
    const result = await fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      query GetProducts {
        products_by_pk(id: 1) {
    category
    created_at
    currency
    name
    price_mm
    updated_at
  }
      }
    `,
    variables: {},
  }),
});

const json = await result.json();
console.log(json);

}



const Products = () => {
    useEffect(()=> {
    fetchData();
}, [])
  return (
    <div style={{ padding: 24 }}>
      <h2>Products</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Products;

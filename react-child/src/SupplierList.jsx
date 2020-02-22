import React from 'react';

export default function SupplierList() {
  const list = [
    {
      id: 5,
      name: '好又多水果商',
      level: 'A级',
      phone: '18478343322',
      address: '浙江衢州',
    },
    {
      id: 6,
      name: '大海水果经销商',
      level: 'A级',
      phone: '17473823288',
      address: '江苏南通',
    }
  ]

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.level}</p>
          <p>{item.phone}</p>
          <p>{item.address}</p>
        </li>
      ))}
    </ul>
  )
}
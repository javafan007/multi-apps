import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SupplierList from './SupplierList';

export default function Supplier() {
  const supplier = {
    name: '每日鲜水果商',
    level: 'A级',
    phone: '15723288039',
    address: '上海市闵行区XXX',
  };
  return (
    <div>
      <h2>{supplier.name}</h2>
      <p>{supplier.level} <Link to="/supplier/others">其他{supplier.level}水果商</Link></p>
      <p>{supplier.phone}</p>
      <p>{supplier.address}</p>

      <div>
        <Switch>
          <Route path="/supplier/others" component={SupplierList} />
        </Switch>
      </div>
    </div>
  )
}
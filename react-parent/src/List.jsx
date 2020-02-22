import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import dataList from './datasource';
import Detail from './Detail';
import ProductForm from './ProductForm';

export default function List() {
  return (
    <div style={{ display: 'flex' }}>
      <ul style={{ width: 200 }}>
        {dataList.map(item => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.name}</Link>
          </li>)
        )}
      </ul>
      <div>
        <div><Link to="/product/add">+新增产品</Link></div>
        <Switch>
          <Route exact path="/product/add" component={ProductForm}></Route>
          <Route exact path="/product/:id" component={Detail}></Route>
        </Switch>
      </div>
    </div>
  )
}
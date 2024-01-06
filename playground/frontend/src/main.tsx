import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carousel from './Carousel'
import Table from './Table'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Carousel />
    <Table />
  </React.StrictMode>,
)

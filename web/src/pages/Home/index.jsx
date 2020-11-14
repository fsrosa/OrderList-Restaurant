import React from 'react'

import './styles.css'

import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className="page-home">
            <h1>OrderList</h1>
            <h2>Sistema de Gestão de Pedidos Individuais</h2>

            <div className="buttons-container">
                <Link to="/products">
                    Gestão de Produtos
                </Link>
                <Link to="/orders">
                    Pedidos
                </Link>
            </div>
        </div>

    )
}
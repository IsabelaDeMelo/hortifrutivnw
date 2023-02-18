import React, { Component } from 'react';
import styles from './App.css'
import alface from './imgs/alface.png'
import laranja from './imgs/laranja.png'
import cereja from './imgs/cereja.png'
import cenoura from './imgs/cenoura.png'
import manga from './imgs/manga.png'
import limao from './imgs/limao.png'
import beterraba from './imgs/beterraba.png'
import tomate from './imgs/tomate.png'
import shoppingCart from './imgs/shopping-cart.png'
import minusCircle from './imgs/MinusCircle.png'
import plusCircle from './imgs/PlusCircle.png'

class Hortifruti extends Component {

    state = {
        carrinho: [
            { imagem: `${alface}`, nome: "Alface" },
            { imagem: `${laranja}`, nome: "Laranja" },
            { imagem: `${cereja}`, nome: "Cereja" },
            { imagem: `${cenoura}`, nome: "Cenoura" },
            { imagem: `${manga}`, nome: "Manga" },
            { imagem: `${limao}`, nome: "Limão" },
            { imagem: `${beterraba}`, nome: "Beterraba" },
            { imagem: `${tomate}`, nome: "Tomate" }
        ]
    }

    render() {
        return (
            <div className='principal'>
                <header>
                    <h1>HORTIFRUTI</h1>
                    <h2>VnW</h2>
                </header>

                <main>
                    <section className='products-container'>
                    <h2>Nossos produtos</h2>
                        <div className='products'>
                            {this.state.carrinho.map((item) => (
                                <div className='products-square'>
                                    <img className='productsImg' src={item.imagem} alt={item.nome} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className='shopp-container'>
                        <div className='shopp-rectangle'>
                            <div className='shopp-square'>
                            <img className='cart-icon' src={shoppingCart} alt="Shopping cart"/>
                                <p>Arraste o seu produto aqui para colocar no carrinho</p>
                            </div>
                            <div className='shopp-btn'>
                            <img className='plus-circle' src={plusCircle} alt="Plus circle"/>
                            <img className='minus-circle' src={minusCircle} alt="Minus circle"/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Hortifruti;
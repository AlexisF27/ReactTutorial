import React, { useState } from 'react'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

const ProductCard = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))

    }

    return (
        <>
            <div style={{ display: 'flex' }} >
                <div className={styles.productCard}>
                    <img src='./coffee-mug.png' alt="Coffe Mug" className={styles.productImg} />
                    <span className={styles.productDescription}> Coffe Mug</span>
                    <div className={styles.buttonsContainer}>
                        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
                        <div className={styles.countLabel}>{counter}</div>
                        <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
                    </div>
                </div>

                <div className={styles.productCard}>
                    <img src={noImage} alt="Coffe Mug" className={styles.productImg} />
                    <h1>Product Card</h1>
                </div>
            </div>
        </>
    )
}

export default ProductCard

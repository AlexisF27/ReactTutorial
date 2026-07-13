import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'

interface ProductCardProps {
    image: string;
    title: string;
}


const ProductCard = ({ image, title }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct(0);


    return (
        <>
            <div style={{ display: 'flex' }} >
                <div className={styles.productCard}>
                    <img src={image} alt={title} className={styles.productImg} />
                    <span className={styles.productDescription}> {title}</span>
                    <div className={styles.buttonsContainer}>
                        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
                        <div className={styles.countLabel}>{counter}</div>
                        <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard

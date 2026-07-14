import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'

export interface ProductCardProps {
    id: string;
    image: string;
    title: string;
}

interface Props {
    product: ProductCardProps;
}

const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct(0);


    return (
        <>
            <div style={{ display: 'flex' }} >
                <div className={styles.productCard}>
                    <img src={product.image} alt={product.title} className={styles.productImg} />
                    <span className={styles.productDescription}> {product.title}</span>
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

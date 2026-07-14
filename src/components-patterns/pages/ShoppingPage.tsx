import ProductCard, { ProductCardProps } from "../components/ProductCard"
import noImage from '../assets/no-image.jpg'

const product1: ProductCardProps = {
    id: '1',
    image: '/coffee-mug.png',
    title: 'Coffe Mug'
}

const product2: ProductCardProps = {
    id: '2',
    image: noImage,
    title: 'Product Card'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <span></span>
            <div style={{ display: 'flex' }}>
                <ProductCard product={product1}></ProductCard>
                <ProductCard product={product2}></ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage

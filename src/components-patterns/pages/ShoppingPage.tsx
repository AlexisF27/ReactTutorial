import ProductCard from "../components/ProductCard"
import noImage from '../assets/no-image.jpg'

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <span></span>
            <div style={{ display: 'flex' }}>
                <ProductCard image="/coffee-mug.png" title="Coffe Mug"></ProductCard>
                <ProductCard image={noImage} title="Product Card"></ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from "./Item";

const ItemList = ({products=ReactNode}) => {
return (
    <>
        <Container fluid>
            <Row>
                <ul className='list-unstyled'>
                    <Container fluid>
                        <Row>
                            {products.map((product) => (
                                    <li key={product.id} className='col-4'>
                                            <Item id={product.id} urlImage={product.image} title={product.title} details={product.details} price={product.price} stock={product.stock}/>
                                    </li>
                            ))}
                        </Row>
                    </Container>
                </ul>
            </Row>
        </Container>
    </>
);
}

export default ItemList;
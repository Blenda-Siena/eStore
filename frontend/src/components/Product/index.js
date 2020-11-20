import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ProductConsumer } from "../../contextAPI";
import "./styles.css";

function Product(props) {
    const { id, nome, img, preco, inCart } = props.product;
    return (
        <div className="col-9 mx-auto col-md-6 col-lg-3">
            <ProductConsumer>
                {(value) => (
                    <Card onClick={()=>{value.handleDetails(id)}} style={{ width: "18rem", height: "18rem"}}>
                        <Link to="/details">
                            <Card.Img variant="top" src={img} />
                        </Link>
                        <Card.Body>
                            <Card.Title id="nome">{nome}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <Button size="sm" disabled={inCart} onClick={()=> {value.addToCart(id)}} variant="secondary">
                                    { inCart === true ? (<span>No carrinho</span>):  (<span>Adicionar ao carrinho</span>)}
                                    </Button>
                                </Col>
                                <Col>
                                    <span id="preco" className="text-muted text-right">{"R$ " + preco}</span>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                )}
            </ProductConsumer>
        </div>
    )


    // return (
    //     <div className="product" >
            
    //         <h3>{props.nome}</h3>
    //         <ul>
    //             <li>{props.descricao}</li>
    //             <li>Preço: R$ {props.preco}</li>
    //         </ul>
            
    //     </div>
            
    // )
       
}

export default Product;
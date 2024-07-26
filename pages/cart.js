import styled from "styled-components";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useContext, useEffect} from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import { useState } from "react";
import Table from "@/components/Table";
//import { Product } from "@/models/Product";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const ProductInfoCell = styled.td`
    img{
        max-width: 150px;
        max-height: 150px;
    }
`;

export default function CartPage(){
    const {cartProducts} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (cartProducts.length > 0){
            axios.post('/api/cart', {ids:cartProducts}).then(
                response => {
                    setProducts(response.data);
                }
            )
        }
    }, [cartProducts])
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {products.map(product => (
                                            <tr>
                                                <ProductInfoCell>
                                                    <img src={product.images[0]} alt=""/>
                                                    {product.title}
                                                </ProductInfoCell>
                                                <td>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </td>
                                                <td>
                                                    price
                                                </td>
                                            </tr>
                                        ))}                  
                                </tbody>
                            </Table>
                        )}
                    </Box>
                        {!!cartProducts?.length && (
                            <Box>
                            <h2>Order information</h2>
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder="Address 2"/>
                            <Button black block>Continue to payment</Button>
                        </Box>
                        )}
                </ColumnsWrapper>
            </Center>
        </>
    );
}
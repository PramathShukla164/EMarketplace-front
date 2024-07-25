import styled from "styled-components";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Button from "@/components/Button";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

export default function CartPage(){
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>1</Box>
                    <Box>
                        <h2>Order information</h2>
                        <Button block primary>Continue to payment</Button>
                    </Box>
                </ColumnsWrapper>
            </Center>
        </>
    );
}
import Center from "./Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size: 3rem;
`;
const Desc = styled.p`
    color:#aaa;
    font-size: .Brem;
`;

const ColumnsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;    
    }
`;
const column = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Featured({product}){
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button primary>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                    </svg>
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </column>
                    <column>
                        <img src="https://pramath-ecommerce.s3.amazonaws.com/1721846950206.png"/>
                    </column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}
import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
`;
const Desc = styled.p`
    color:#aaa;
    font-size: .Brem;
`;

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
        max-width: 100%;    
    }
`;
export default function Featured(){
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>
                            Lorem ipsum dolar sit amet,
                        </Desc>
                    </div>
                    <div>
                        <img src="https://pramath-ecommerce.s3.amazonaws.com/1720400079153.png"/>
                    </div>
                </Wrapper>
            </Center>
        </Bg>
    );
}
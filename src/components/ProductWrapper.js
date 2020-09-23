import styled from 'styled-components';
export const ProductWrapper = styled.div`
.card{
    border-color:0.01rem gray;
    transition:all 1s linear;
    box-shadow:1px 1px lightblue;

}
.card-footer{
    background:transparent;
    border-top:none;
    transition:all 1s linear;
    font-weight:bold;
}
&:hover{
    .card{
        box-shadow:2px 2px gray;
    }
}
.img-container{
    positon:relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    transform:scale(1.1);
    transition:all 1s linear;
}
.cart-btn{
    position:absolute;
    bottom:5rem;
    right:0;
    background-color:orange;
    border:none;
    padding:0.3rem 0.6rem;
    line-height:1rem;
    cursor:pointer;
    font-weight:bold;
    color:black;
    &:hover{
        box-shadow:1px 1px gray;
        transform:scale(1.1);
    }
}
`;
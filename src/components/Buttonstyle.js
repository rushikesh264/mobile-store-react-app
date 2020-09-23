import styled from 'styled-components'

export const ButtonContainer = styled.button
`
font-size:1.2rem;
background-color:${props=>(props.cart ? "rgb(226, 175, 7)" : (props.back ? "blue" : "white"))};
border:none;
margin:1rem;
font-weight:bold;

color:${props=>props.back ? "white" : (props.cart ? "white" : "black" )};
padding:0.5rem 0.8rem;
border-radius:5px;
line-height:2rem;
&:focus{
    cursor:pointer;
    outline:none;
}
&:hover{
    background-color:${props=>(props.cart ? "rgba(226, 175, 7,0.9)" : (props.back ? "rgba(0,0,255,0.8)" : "rgba(255,255,255,0.9)"))};
    cursor:pointer; 
}
`
import React from "react";
import styled from "styled-components";
import Home_02 from '../images/Home_02.JPG';

const Img = styled.img`
        width: 100vw;
        height: 500px;
        object-fit: cover;
        object-position: 0% 35%;
    `;

export default class Banner extends React.Component { 
    
    render(){
        return(
            <>
                <Img src={Home_02} />
            </> 
        );
    }
}
import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: #212236;
  color: white;
  padding: 2% 0;
`
const TextData = props =>{
    return(
            <Footer>
                <p>copyright @marcowhyte</p>
            </Footer> 
    )
}
export default TextData;
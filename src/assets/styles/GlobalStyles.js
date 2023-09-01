import { createGlobalStyle } from 'styled-components';
import girlboy from '../img/girlboy.gif'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family:'Poppins', sans-serif;
};

html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    background-image: url(${girlboy});
    background-size: cover;
    background-position: center;
}
body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
}
`;
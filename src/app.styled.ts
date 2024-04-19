import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 1rem;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: no-repeat center 120%, linear-gradient(#F9FFFF 0%,  100%);;  
  background-size: auto;
}

#root {
  max-width: 960px;
  width: 100%;
  margin: auto 0;
  padding: 0 1rem;
}
`;
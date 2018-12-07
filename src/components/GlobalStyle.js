import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Text+Me+One');

* {
  box-sizing: border-box; 
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dc310134cdefd68cbb1fc7c6ab2049d&auto=format&fit=crop&w=1500&q=80');
  -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
  font-family: 'Text Me One', sans-serif;
  object-fit: cover;

  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
}
p {
  font-size: 20px;
}
`

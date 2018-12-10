import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Text+Me+One');
@import url('https://fonts.googleapis.com/css?family=Antic');

* {
  box-sizing: border-box; 
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://images.unsplash.com/photo-1519770340285-c801df5ff3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
 font-family: 'Antic', sans-serif;
 color: darkgray;
 
  /*font-family: 'Text Me One', sans-serif;
  object-fit: cover;*/

  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
}
p {
  font-size: 19px;
  line-height: 23px;

}
`

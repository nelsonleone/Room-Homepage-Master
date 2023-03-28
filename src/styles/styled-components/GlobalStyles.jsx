import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root{
     --dark-Gray:hsl(0, 0%, 63%);
     --Black: hsl(0, 0%, 0%);
     --White: hsl(0, 0%, 100%);
     --very-dark-Gray: hsl(0, 0%, 27%);
  }

  *,
  *::before,
  *::after{
    box-sizing:border-box;
    padding:0;
    margin:0;
  }

   body{
      font-family: 'League Spartan', sans-serif;
   }

   button{
      font-family: inherit;
      background:none;
      border:none;
      cursor: pointer;
      
      &:hover,
      &:focus{
         border:none;
         outline:none;
      }
   }

   li,
   a{
      list-style-type:none;
      text-decoration: none;
   }

   img{
      max-width: 100%;
      object-fit:cover
   }
`
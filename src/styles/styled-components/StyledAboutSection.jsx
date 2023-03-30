import styled from "styled-components";
import { flexObj } from "./Utils";

export const StyledAboutSection = styled.section`
  position: relative;
  top:12em;
  display:grid;
  grid-template-rows: repeat(3,42%);

  p{
    color:var(--dark-Gray);
    line-height:24px;
  }

  h4{
   font-size:1rem;
   letter-spacing: 4px;
   margin-block:.6em;
   text-transform:uppercase;
  }

  div > img{
     width:100%;
     height:100%;
  }
  
  .about-text-content{
     max-width:90%;
     margin:auto;
     grid-row:2;
     margin-block:1em;
  }
  .aboutSection-image-container:last-of-type{
      grid-row:1;
  }

  @media (min-width:50rem) {
      grid-template-rows: unset;
      grid-template-columns: 30% 42% 28%;
      gap:0;
      top:35em;

      .about-text-content{
         grid-row:unset;
         width:auto;
         margin-block:0;
         padding:2em 1.5em;
      }

      h4{
         font-size:1.1rem;
         letter-spacing: 6px;
      }
  }
`
import styled from "styled-components";
import { activeTabStyling, flexObj } from "./Utils";


export const StyledTabAreaContainer = styled.div`
   position:relative;
   min-height: inherit;
`


export const StyledTabPanel = styled.div`
  ${activeTabStyling};
  position: absolute;

  .tab-image-container{
      position: relative;
      width:100%;
      height:22.5em;
      margin-bottom:2em;

      img{
         position: absolute;
         width:100%;
         height:100%;
      }

      @media (min-width:50rem) {
         flex-basis:60%; 
         height:35em;

         img{
            width:100%;
            height:100%;
         }
      }
   }

  .text-area{
      max-width:90%;
      margin-inline:auto;

      h3{
       font-size: 2.1rem;
       margin-bottom:.3em;
      }

      p{
         line-height: 24px;
         color:var(--dark-Gray);
      }

      @media (min-width:50rem) {
         flex-basis:37%;
         padding-inline:1em 2em;
         
         h3{
            font-size:3.2rem;
            line-height: 47px;
         }

         p{
            font-size:1.1rem;
         }
      }
   }



   /* StyledPanel Media query for larger screen sizes */
   @media (min-width:50rem) {
      ${flexObj};
      gap:5%;
   }
`


export const StyledTabList = styled.div`
   background-color:var(--Black);
   top:19.15em;
   right:0;
   z-index:110;
   position: absolute;
   width:7em;
   ${flexObj({justify:"space-around"})};

   button{
      width:50%;
      height:4em;
      img{
         width:.8em;
      }

      &:hover{
         background-color: var(--very-dark-Gray);
      }
   }

   @media (min-width:50rem) {
      left:53%;
      top:31.69em;
      width:9em;

      button{
         height:4em;
         img{
            width:1em;
         }
      }
   }

   @media (min-width:60rem) {
      left:58.7%;
      top:30.85em;
      width:9.5em;

      button{
         height:5em;
         img{
            width:1em;
         }
      }
   }
`



export const StyledCallToActionBtn = styled.div`
   margin-block:2em;
   a{
      letter-spacing: 8px;
      text-transform: uppercase;
      color:var(--Black);
      font-size:.9rem;
   }

   
   &:hover{
      svg{
         path{
            fill:var(--dark-Gray);
         }
      }
      a{
         color:var(--dark-Gray);
      }
   }
`
import styled from "styled-components";
import { flexObj } from "./Utils";

export const StyledHeader = styled.header`
  position: absolute;
  z-index:100;
  padding-top:2.8em;
  padding-inline:1em;
  ${flexObj};
  width:100%;

  
  .show-nav{
    visibility: visible;
  }
  

  nav{
    position: fixed;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    margin:auto;
    right:0;
    overflow:hidden;
    backdrop-filter: brightness(60%);
    left:0;
    top:0;
    z-index:100;
    visibility: hidden;

    ul{
      background-color:var(--White);
      height:3em;
      ${flexObj({justify:"flex-end"})};
      padding-right:2em;
      gap:20px;
      padding-block:3em;
    }
  }

  .logo{
    flex-basis: 60%;
  }

  a{
    color:var(--Black);
    font-weight: 600;
    text-transform: lowercase;
  }

  .toggle-menu-btn{
    z-index:110;
    position: relative;
  }



  /* Media query for larger screen sizes */
  @media (min-width:50rem) {
    left:0;
    width: 65%;
    margin:0;
    padding-left:2em;

    .toggle-menu-btn{
      display:none;
    }

    nav{
      position: unset;
      backdrop-filter: none;
      margin:0;

      ul{
        background:none;
        width:unset;
        height:unset;
        padding:unset;
        padding:0;
        justify-content: flex-start ;
        gap:40px;
      }
    }

    .logo{
      flex-basis:20%;
    }


    a{
      color:var(--White);
      font-size:1.1rem;
    }
  }

`
import styled from "styled-components";
import { ATonly } from "./Utils";

export const StyledMain = styled.main`
  position: relative;
  min-height:100vh;
  .AT-only{
     ${ATonly};
  }

  @media (min-width:50rem) {
    min-height:unset;
  }
`
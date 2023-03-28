import styled, { css } from "styled-components"

export const flexObj = ({align = "center",justify = "space-between",direction = "row"}) => `
   display:flex;
   align-items:${align};
   justify-content: ${justify};
   flex-direction: ${direction};
`

export const activeTabStyling = css`
   visibility: ${({isActive}) => isActive ? "visible":"hidden"};
`

export const ATonly = `
   position: absolute;
   left: -10000px;
   top: auto;
   width: 1px;
   height: 1px;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   white-space: nowrap;
`
import { PortableText } from '@portabletext/react'
import { useEffect } from 'react';
import { components } from '../../lib/portableTextContent';
import { StyledTabPanel } from '../styles/styled-components/StyledTabContents';
import CallToActionBtn from './CallToActionBtn';

export default function TabPanel(props){

   const {
      tabData:{
         serviceOverview,
         overviewImages:{
            largeImage,
            smallImage
         },
      },
      index,
      isLargeScreen,
      activeTabIndex
   } = props;


   return(
      <StyledTabPanel 
         role="tabpanel" 
         id={`tab-${index}`} 
         isActive={index === activeTabIndex ? true : false} 
         tabIndex="0"
         aria-hidden={index !== activeTabIndex}
        >
         <div className='tab-image-container'>
           <PortableText value={isLargeScreen ? largeImage : smallImage} components={components} />
         </div>
         <div className="text-area">
           <PortableText value={serviceOverview} components={components} />
           <CallToActionBtn />
         </div>
      </StyledTabPanel>
   )
}
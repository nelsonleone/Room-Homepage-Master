import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { useEffect } from "react";
import { components } from "../../lib/portableTextContent";
import client from "../../lib/sanityClient";
import { StyledAboutSection } from "../styles/styled-components/StyledAboutSection";

export default function AboutSection(){

   const [aboutSectionContent,setAboutSectionContent] = useState([])

   useEffect(() => {
      const fetchAboutSectionData = async () => {
         try{
            const data = await client.fetch('*[_type == "aboutSectionContent"]')
            setAboutSectionContent(data[0])
         }
         catch(err){
            alert('error occured reload this page')
         }
      }

      fetchAboutSectionData()
   },[])

   return(
      <StyledAboutSection>
         {
            aboutSectionContent.aboutSectionImages  ?
            <>
              <div className="about-text-content">
                  <PortableText value={aboutSectionContent.aboutProducts} components={components} />
               </div>

               <div className="aboutSection-image-container">
                  <PortableText value={aboutSectionContent.aboutSectionImages[0]} components={components} />
               </div>
               
               <div className="aboutSection-image-container">
                  <PortableText value={aboutSectionContent.aboutSectionImages[1]} components={components} />
               </div>
            </>
            :
            <p>Network Error,please reload</p>
         }
      </StyledAboutSection>
   )
}
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import client from "../../lib/sanityClient"
import { StyledTabAreaContainer, StyledTabList } from "../styles/styled-components/StyledTabContents"
import TabPanel from "./TabPanel"

export default function TabSection({ isLargeScreen }){

   const [tabsData,setTabsData] = useState([])
   const [activeTabIndex,setActiveTabIndex]  = useState(0)
   const [error,setError] = useState()

   const checkIndex = (index) => {
      if(index > 2){
         return 0
      }else if(index < 0){
         return 2
      }else {
         return index
      }
   }

   const handleTabChange = (number) => {
      setActiveTabIndex(prevIndex => {
         const newIndex = prevIndex + number;
         return checkIndex(newIndex)
      })
   }

   useEffect(() => {
      const fetchTabsData = async() => {
         try{
            const data = await client.fetch('*[_type == "tabContents"]')
            setTabsData(data)
         }
         catch(err){
            setError(err.message)
         }
      }
      fetchTabsData()
   },[])

   return(
      <StyledTabAreaContainer>
         <h2 id="tabsContainer-label" className="AT-only">Service Overview</h2>
         
         <StyledTabList role="tablist">
            <button 
               role="tab" 
               aria-controls="tab-0 tab-1 tab-2" 
               onClick={() => handleTabChange(1)}
              >
               <span className="AT-only">Previous Tab</span>
               <img src="/images/icon-angle-left.svg" alt="" aria-hidden="true" />
            </button>
            <button 
               role="tab" 
               aria-controls="tab-0 tab-1 tab-2" 
               onClick={() => handleTabChange(-1)}
              >
               <span className="AT-only">Next Tab</span>
               <img src="/images/icon-angle-right.svg" alt="" aria-hidden="true" />
            </button>
         </StyledTabList>

         <div  aria-labelledby="tabsContainer-label">
            {
               tabsData.length ? tabsData.map((tabData,index) => {
                  return <TabPanel 
                     tabData={tabData}
                     key={nanoid()} 
                     index={index}
                     isLargeScreen={isLargeScreen}
                     activeTabIndex={activeTabIndex}
                  />
               })
               :
               ""
            }
         </div>
      </StyledTabAreaContainer>
   )
}
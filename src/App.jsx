import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import Header from './components/Header'
import TabSection from './components/TabSection'
import { StyledMain } from './styles/styled-components/StyledMain'


function App() {

  const [openNav,setOpenNav] = useState(null)
  const [isLargeScreen,setIsLargeScreen] = useState(null)

  function handleResize() {
    setIsLargeScreen(window.innerWidth >= 800 ? true : false)
    setOpenNav(window.innerWidth >= 800 ? true : false)
  }
  
  useEffect(() => {
    window.addEventListener('resize',handleResize)

    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <StyledMain>
        <h1 className='AT-only'>Room Homepage Master</h1>
        <TabSection isLargeScreen={isLargeScreen}/>
        <AboutSection />
      </StyledMain>
    </div>
  )
}

export default App

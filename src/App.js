import React from 'react';
import Nav from './components/nav/Nav';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

const App=() =>{ 
    return (<>
    
       <div> <Nav/></div>
       <div> <Body/></div> 
       <div  class="h-5"> <Footer/></div> 
        
    </>  
    )
}

export default App
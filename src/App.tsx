
import React from 'react';
// Importando componentes exportados pelo arquivo components/index.tsx
import {Navbar,Footer} from './components';


const App = () => {
return(
  <div className="App">
    <div className="gradient_bg" >
    <Navbar />
    <Footer /> 
    </div>  
  </div>
)
}
export default App
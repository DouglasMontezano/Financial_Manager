
import React from 'react';
// Importando componentes exportados pelo arquivo components/index.tsx
import {Navbar,Footer} from './components';

const App = () => {
return(
  <div className="App">
    <div>
    <Navbar />
    <Footer /> 
    </div>  
  </div>
)
}
export default App
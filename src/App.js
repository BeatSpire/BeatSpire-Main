import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseProvider } from './BackendConfig/FirebaseConfig';
import { BlockchainProvider } from './BackendConfig/BlockchainConfig';
import { Main } from './Pages/main';
import './index.css'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <BlockchainProvider>
        <FirebaseProvider>
          <Main/>
          </FirebaseProvider>
        </BlockchainProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;

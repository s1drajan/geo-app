import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MapsPage from './MapsPage';
import FlagsPage from './FlagsPage';
import EasyFlags from './EasyFlags';
import MediumFlags from './MediumFlags';
import HardFlags from './HardFlags';
import EasyMaps from './EasyMaps';
import MediumMaps from './MediumMaps';
import HardMaps from './HardMaps';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/maps" element={<MapsPage />} />
                <Route path="/flags" element={<FlagsPage />} />
                <Route path="/easyflags" element={<EasyFlags />} /> 
                <Route path="/mediumflags" element={<MediumFlags/>} /> 
                <Route path="/hardflags" element={<HardFlags/>}/>
                <Route path="/easymaps" element={<EasyMaps />} /> 
                <Route path="/mediummaps" element={<MediumMaps/>} /> 
                <Route path="/hardmaps" element={<HardMaps/>}/>
                
              
            </Routes>
        </Router>
    );
}

export default App;

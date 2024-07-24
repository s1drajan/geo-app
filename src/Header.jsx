import { useNavigate } from 'react-router-dom';
import pic from './assets/brazil.png';
import pic2 from './assets/flag.png';

function Header() {
    const navigate = useNavigate();

    return (   
        <div className="container">
            <div className="title">
                <h1>Guess The Country</h1>
            </div>
            <div className="buttons">
                <div className="lcon">
                    <img className="brazil" src={pic} alt="pic" />
                    <button className="left" onClick={() => navigate('/maps')}>Maps</button>
                </div>
                <div className="rcon"> 
                    <img className="flag" src={pic2} alt="pic2" />
                    <button className="right" onClick={() => navigate('/flags')}>Flags</button>
                </div>
            </div>
        </div>
    );
}

export default Header;

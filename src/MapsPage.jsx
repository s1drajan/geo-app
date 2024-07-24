import { useNavigate } from 'react-router-dom';

function MapsPage() {
    const navigate = useNavigate();

    return (
        <div className="three">
            <button className="diff" onClick={() => navigate('/easymaps')}>Easy</button> 
            <button className="diff medium" onClick={() => navigate('/mediummaps')}>Medium</button> 
            <button className="diff hard" onClick={() => navigate('/hardmaps')}>Hard</button>
        </div>
    );
}

export default MapsPage;

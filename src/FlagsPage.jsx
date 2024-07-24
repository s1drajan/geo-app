import { useNavigate } from 'react-router-dom';

function FlagsPage() {
    const navigate = useNavigate();

    return (
        <div className="three">
            <button className="diff" onClick={() => navigate('/easyflags')}>Easy</button> 
            <button className="diff medium" onClick={() => navigate('/mediumflags')}>Medium</button> 
            <button className="diff hard" onClick={() => navigate('/hardflags')}>Hard</button>
        </div>
    );
}

export default FlagsPage;

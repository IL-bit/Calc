import { useSelector } from 'react-redux'
import './Display.css';

const Display = () => {
    const value = useSelector((state) => state.value);
    const count = useSelector((state) => state.count);
    return (
        <div className="display">
            <textarea value={value ? value : count} readOnly></textarea>
        </div>
    )
}

export default Display;
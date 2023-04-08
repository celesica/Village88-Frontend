import { useContext } from 'react';
import PetContext from './PetContext';

function PetName() {
    const { petName } = useContext(PetContext);

    return <h2>Hello, I'm <span className="petName">{petName}</span></h2>;
}

export default PetName;

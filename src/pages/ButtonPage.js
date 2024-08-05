import Button from "../components/Button";
import { GoBell, GoDatabase, GoRadioTower } from 'react-icons/go';

function ButtonPage (){

    const handleClick = () => {
        alert("Button Clicked");
    }

    return (
        <div>
            <h1>My React App!</h1>
            <p>Here is some content</p>
            <div>
                <Button primary onClick={handleClick} className='mb-5'>
                    <GoBell></GoBell>
                    Click Button
                </Button>
            </div>
            <div>
                <Button secondary >
                    <GoDatabase></GoDatabase>
                    Click Test</Button>
            </div>
            <div>
                <Button warning outline>
                <GoRadioTower></GoRadioTower>
                    Click Demo</Button>
            </div>
            <div>
                <Button danger rounded outline>Click me</Button>
            </div>
            <div>
                <Button success rounded >Click me</Button>
            </div>
        </div>

    );
}

export default ButtonPage;
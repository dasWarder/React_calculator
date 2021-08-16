import './Calculator.css';
import DeterminationBar from "./DeterminationBar";
import OperationBlock from "./OperationBlock";
import NumberBlock from "./NumberBlock";
import { useState } from "react";

const CalculatorPanel = () => {

    const[view, setView] = useState('');

    const changeView = (button) => {

        console.log('Button:', button);

        switch (button) {

            case '=':
                setView( () => {
                    return '' + eval(view);
                })
                break;

            case 'C':
                setView( () => {
                    return '';
                })
                break;

            default:
                setView((prev) => {
                    console.log('View. Button not != \'=\' ', prev + button);
                    return prev + button
                })
                break;
        }
    };


    return (
        <div className='Calculator-panel'>
            <DeterminationBar view={ view } />
            <div className='Button-panel'>
                <OperationBlock view={ view } onButtonClick={ changeView } />
                <NumberBlock view={ view } onButtonClick={ changeView } />
            </div>
        </div>
    )
};

export default CalculatorPanel;
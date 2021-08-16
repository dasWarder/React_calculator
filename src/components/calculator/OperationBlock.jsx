import { useState } from "react";

const OperationBlock = (props) => {

    const [operations, setOperations] = useState(['+', '-', '*', '/', '=', 'C']);

    const commonOperations = ['+','-','*','/'];
    const view = props.view;

    const changeHandler = (event) => {
        const value = event.target.value;

        if(view === '' && value !== '-') {

            console.log('Value is empty ', value)
            props.onButtonClick('');

        } else if(value !== '=') {

            console.log('Value is not empty and = ', value);

            const check = commonOperations.map(op => view.endsWith(op));

            check.includes(true)? props.onButtonClick('') : props.onButtonClick(value);

        } else {

            console.log('Value is = ', value);
            props.onButtonClick('=');

        }
    };

    const clearView = () => {
        props.onButtonClick('C');
    }

    const getOperations = () => {
        return operations.map(operation => {
                if(operation !== 'C') {
                    return (
                        <button key = { operation } value={ operation } onClick={ changeHandler } className='Calculator-button'>
                            { operation }
                        </button>
                    )
                } else {
                    return (
                        <button key = { operation } onClick={ clearView } className='Calculator-button Calculator-button-reset'>
                            { operation }
                        </button>
                    );
                }
            }
        );
    };

    return (
        <div className='Calculator-panel-operation-block'>
            { getOperations() }
        </div>
    )
};

export default OperationBlock;
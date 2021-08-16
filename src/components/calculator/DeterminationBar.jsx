

const DeterminationBar = (props) => {

    const view = props.view;

    return(
        <div className='Calculator-determination-bar'>
            { view === 'Infinity'? 'Division by 0 not possible' : view }
        </div>
    )
};

export default DeterminationBar;
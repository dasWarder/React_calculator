const NumberBlock = (props) => {

    const nums = ['.',0,1,2,3,4,5,6,7,8,9].reverse();
    const view = props.view;

    const changeHandler = (event) => {

        const value = event.target.value;
        const sliced = view.split(/[+\-*/]/);
        const lastElement = sliced[sliced.length - 1];

        if(((view === '0') && (value === '0')) ||
            ((value === '.') && (lastElement.match(/\./) !== null)) ||
            ((lastElement.match(/^0$/) != null) && value === '0')) {
            props.onButtonClick('');
        } else {
            props.onButtonClick(value);
        }
    }

    const getNumbers = () => {
        return nums.map(num =>
        <button value={ num } onClick={ changeHandler } key = { num } className='Calculator-button'>
            { num }
        </button>
        );
    };

    return(
        <div className='Calculator-panel-number-block'>
            { getNumbers() }
        </div>
    )
};

export default NumberBlock;
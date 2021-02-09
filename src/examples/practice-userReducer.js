import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const PracticeUserReducer = ({ initStates }) => {

    const [state, dispatch] = useReducer(reducer, initStates);

    function handleChange(event) {
        dispatch(event.target);
    }

    return (
        <div>
            {
                initStates.map((item, index) => (
                    <React.Fragment key={index}>
                        <span>{item.name}: </span><input type={'text'} name={item.name} value={state[item.value]} onChange={handleChange}/>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default PracticeUserReducer;
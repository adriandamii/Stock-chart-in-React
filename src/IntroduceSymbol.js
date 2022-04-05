import React, {useState} from 'react';

export default function IntroduceSymbol(props) {
    const [inputValue, setInputValue] = useState("");

    function onEnterButton(e) {
        if (e.keyCode === 13) {
            onClickButton();
        }
    }

    function onClickButton() {
        props.setStocksTicker(inputValue.toUpperCase());
        props.setShowGraphStatus(true);
    }

    return (
        <div>
            <div>
                <span>Please type a symbol!</span>
                <input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => onEnterButton(e)} />
            </div>
                <button onClick={onClickButton}>Show chart</button>
            <div>
            </div>
        </div>
    )
}


import tick from './tick.png'

const Option = (props) => {
    const answerId = 'answer-' + props.answer
    const checkboxId = 'answer-checkbox-' + props.answer

    return (
        <div className="answer" id={answerId}>
            <button className="answer-checkbox" id={checkboxId} onClick={props.click}></button>
            <h3>{props.answer}</h3>
        </div>
    )
}

export default Option
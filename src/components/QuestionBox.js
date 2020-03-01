import React, { useState } from 'react'

const QuestionBox = ({question,options, selected}) => {
    const [answer, setAnswer] = useState(options)
    function clickAnswer(text) {
        if (answer.length > 1) {
          setAnswer([text]);
          selected(text);
        }
      }

    return(
        <div className="questionBox">
            <div className="question">{question}</div>
                {answer.map((text, index) => (
                    <button
                        key={index} 
                        className="answerBtn" 
                        onClick={() => {
                            clickAnswer(text);
                            }
                        }>
                    {text}
                    </button>
                ))}
        </div>
    )
}

export default QuestionBox
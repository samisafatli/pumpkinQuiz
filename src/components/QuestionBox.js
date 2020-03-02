import React, { useState } from 'react'

const QuestionBox = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options)
    const [answered, checkAnswers] = useState(false)
    
    function clickAnswer(text) {
        if (answered === false) {
          setAnswer([text]);
          selected(text);
          checkAnswers(true)
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
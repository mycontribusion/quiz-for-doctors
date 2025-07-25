import { useState } from "react"

function QuestionGenerator(){
    const[indexQuestion, setIndexQuestion] = useState(0)
    const[buttonText,setButtonText] = useState('Next')
    const[ansObject, setAnswerObject] = useState({})
    console.log(ansObject)
    /*const qArray = [
        ['Which among these nurses are the most troublesome?', 'radio', 'opt1', 'troublesome_nurses', 'clinics', 'The nurses in the clinics', 'opt2', 'wards', 'The nurses in the wards', 'opt3', 'theater',  'The nurses in the theater'],
        ['Which among these nurses are the most troublesome?', 'radio', 'opt1', 'troublesome_nurses', 'clinics', 'The nurses in the clinics', 'opt2', 'wards', 'The nurses in the wards', 'opt3', 'theater',  'The nurses in the theater']
    ];*/

    

    const qsArray = [
        {
            id : 'q1',
            question : 'Which among these nurses are the most troublesome?',
            type : 'radio',
            name : 'troublesome',
            options: [
                {id: 'opt1', value: 'clinic', label: 'The nurses in the clinics'},
                {id: 'opt2', value: 'ward', label: 'The nurses in the ward'},
                {id: 'opt3', value: 'theater', label: 'The nurses in the theater'}
            ]
        },
        {
            id : 'q2',
            question : 'Which would you prefer, As an Houseofficer?',
            type : 'radio',
            name : 'calls',
            options: [
                {id: 'opt1', value: 'weekdays', label: 'Two weekday calls'},
                {id: 'opt2', value: 'weekends', label: 'One weekend call'},
                {id: 'opt3', value: 'same', label: 'All the same'}
            ]
        },
        {
            id : 'q3',
            question : 'Do you get angry when the nurses call you Houseofficer?',
            type : 'radio',
            name : 'ho',
            options: [
                {id: 'opt1', value: 'yes', label: 'Yes, I get angry'},
                {id: 'opt2', value: 'no', label: 'No, I like it'},
                {id: 'opt3', value: 'indifferent', label: 'No, I dont care'}
            ]
    }
    ];

    const sendAnswer = (questionId,pickedOption) => {
        setAnswerObject(preAnswer =>  ({
            ...preAnswer,
            [questionId]: pickedOption
        }))
    }

    const currentQuestion = qsArray[indexQuestion]

    const handlePrevClick = () => {

        if (indexQuestion > 0) {
            setIndexQuestion(preValue => preValue -1)
            setButtonText('Next')
        } 
    }
    const handleNextClick = () => {
        if (indexQuestion < qsArray.length - 1) {
            setIndexQuestion(preValue => preValue +1)
        }

        if (indexQuestion === qsArray.length - 2 && !qsArray.length-2 <0) {
            setButtonText('Submit')
        }
    }


    /*const qElements = qArray.map(([ques, typein, id1, namein, value1, opt1, id2, value2, opt2, id3, value3, opt3]) => (
        <div key={id1}>
            <form action="">
                <p>
                {ques}
                </p>
                <input type={typein} id={id1} name={namein} value={value1}/>
                <label htmlFor={id1}>{opt1}</label><br/>

                <input type={typein} id={id2} name={namein} value={value2}/>
                <label htmlFor={id2}>{opt2}</label><br/>

                <input type={typein} id={id3} name={namein} value={value3}/>
                <label htmlFor={id3}>{opt3}</label><br/>
            </form>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    ))*/
    return (
        <div>
            <div key={currentQuestion.id}>
            <form action="">
                <p>
                {currentQuestion.question}
                </p>
                {currentQuestion.options.map((data) => (
                    <div key={data.id}>
                        <input 
                        type={currentQuestion.type} 
                        id={data.id} 
                        name={currentQuestion.name} 
                        value={data.value}
                        onChange={() => {sendAnswer(currentQuestion.id, data.value)}}
                        checked = {ansObject[currentQuestion.id]===data.value}
                        />
                        <label htmlFor={data.id}>{data.label}</label><br/>
                    </div>
                ))}
            </form>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>{buttonText}</button>
        </div>            
        </div>
        );
};

export default QuestionGenerator;
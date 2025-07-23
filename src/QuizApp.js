
import Questions from "./Questions"; 
import WelcomePage from "./WelcomePage";
import SorryPage from "./SorryPage";
import QuestionGenerator from "./QuestionGenerator";

function QuizApp({displayed,forDoctors,forNonDoctors}) {
  //const[displayed, setDisplayed] = useState('welcome')

  //const forDoctors = () => {
  //  setDisplayed('display_quiz')
//  }

 // const forNonDoctors = () => {
 //   setDisplayed('sorry')
 // }

  return(
    <div>
      {displayed==='welcome' && (
        <WelcomePage 
        yesADoctor={forDoctors} 
        notADoctor={forNonDoctors}
        />
        )}

      {displayed === 'display_quiz' && (
        <QuestionGenerator />
      )}

      {displayed === 'sorry' && (
        <SorryPage />
      )}
    </div>
  )

}


export default QuizApp;

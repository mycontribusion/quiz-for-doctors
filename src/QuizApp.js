import React, { useState } from "react";
import Questions from "./Questions"; 
import WelcomePage from "./WelcomePage";
import SorryPage from "./SorryPage";

function QuizApp() {
  const[displayed, setDisplayed] = useState('welcome')

  const forDoctors = () => {
    setDisplayed('display_quiz')
  }

  const forNonDoctors = () => {
    setDisplayed('sorry')
  }

  return(
    <div>
      {displayed==='welcome' && (
        <WelcomePage 
        yesADoctor={forDoctors} 
        notADoctor={forNonDoctors}
        />
        )}

      {displayed === 'display_quiz' && (
        <Questions />
      )}

      {displayed === 'sorry' && (
        <SorryPage />
      )}
    </div>
  )

}


export default QuizApp;

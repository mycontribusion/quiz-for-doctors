import Header from "./Header";
import Footer from "./Footer";
import QuizApp from "./QuizApp";
import { useState } from "react";

function App() {
    const[displayed, setDisplayed] = useState('welcome')

    const forDoctorsa = () => {
     setDisplayed('display_quiz')
  }

  const forNonDoctorsa = () => {
    setDisplayed('sorry')
  }

  const returnHome = () => {
    setDisplayed('welcome')
  }
    
    return (
        <div>
            <Header
            returnHome = {returnHome}/>

            <QuizApp
            displayed = {displayed}
            forDoctors = {forDoctorsa}
            forNonDoctors = {forNonDoctorsa}
            />

            <Footer/>
        </div>
        
    );
}

export default App;
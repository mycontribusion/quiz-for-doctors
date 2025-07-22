

function WelcomePage({yesADoctor, notADoctor}) {
    
    return(
        <div className="header">
            <h1>Welcome to Quiz for Doctors</h1>
            <p>Are do a doctor?</p>
            <button value='yes' onClick={() => yesADoctor()}>Yes</button>
            <button value='no' onClick={() => notADoctor()}>No</button>            
        </div>
        )
}
export default WelcomePage;
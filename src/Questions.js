
function Questions(){
    return (
        <div>
            <form action="">
                <p>
                Which among these nurses are the most troublesome?
                </p>
                <input type="radio" id="opt1" name="troublesome_nurses" value="clinics"/>
                <label for="opt1">The nurses in the clinics</label><br/>

                <input type="radio" id="opt2" name="troublesome_nurses" value="wards"/>
                <label for="opt2">The nurses in the wards</label><br/>

                <input type="radio" id="opt3" name="troublesome_nurses" value="theater"/>
                <label for="opt3">The nurses in the theater</label>

            </form>
            <form action="">
                <p>
                Which would you prefer?
                </p>
                <input type="radio" id="opt1" name="calls" value="weekdays"/>
                <label for="opt1">Two weekdays call</label><br/>

                <input type="radio" id="opt2" name="calls" value="weekends"/>
                <label for="opt2">One weekend call</label><br/>

            </form>
            <form action="">
                <p>
                Do you get andry when they call you Houseofficer?
                </p>
                <input type="radio" id="opt1" name="ho" value="yes"/>
                <label for="opt1">Yes</label><br/>

                <input type="radio" id="opt2" name="ho" value="no"/>
                <label for="opt2">No</label><br/>
            </form>
        </div>
        );
};

export default Questions;
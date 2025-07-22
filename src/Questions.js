
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
        </div>
        );
};

export default Questions;
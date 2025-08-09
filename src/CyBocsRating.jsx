 import { useState } from "react";

const CyBocsRating = () => {
const [questionScore15, setQuestionScore15] = useState(Array(5).fill(0))
const [questionScore610, setQuestionScore610] = useState(Array(5).fill(0))
const [subTotalScore1_5,setSubTotalScore1_5] = useState(0);
const [subTotalScore6_10,setSubTotalScore6_10] = useState(0);
const [totalScore, setTotalScore] = useState(0);
 
     const handleScoreChange15 = (index, value) => {
     const updatedScores = [...questionScore15]; 
     updatedScores[index] = value;  
    setQuestionScore15(updatedScores); 
  };

   const handleScoreChange610 = (index, value) => {
    const updatedScores = [...questionScore610]; 
    updatedScores[index] = value; 
    setQuestionScore610(updatedScores); 
  };

 
 const handleScore1_5 = ()=>{
    setSubTotalScore1_5(questionScore15.reduce((sum,score)=>{
     return (sum+score)
   },0))
  }

  const handleScore6_10 = ()=>{
   setSubTotalScore6_10(questionScore610.reduce((sum,score)=>{
    return (sum+score)
     },0))
   }

   const handleTotalScore = ()=>{
       return setTotalScore(Number(subTotalScore1_5)+Number(subTotalScore6_10))
   }



  return (
    <div style={{backgroundColor:"white", color:"black", margin:"10px", padding:"5px"}}>
     <h2>CY-BOCS Severity Rating</h2>
     <h3>Children’s Yale-Brown Obsessive Compulsive Scale</h3>
     <h3>Administering the CY-BOCS Symptom Checklist and CY-BOCS Severity Ratings</h3>
     <div>
        <p>1. Establish the diagnosis of obsessive-compulsive disorder.</p>
        <p>2. Using the CY-BOCS Symptom Checklist (other form), ascertain current and past symptoms.</p>
        <p>3. Next, administer the 10-item severity ratings (below) to assess the severity of the OCD during the last week.</p>
        <p>4. Readminister the CY-BOCS Severity Rating Scale to monitor progress.</p>
      </div>
     <div>
        <h3>Obsession Rating Scale (circle appropriate score)</h3>
        <p>Note: Scores should reflect the composite effect of all of the patient’s obsessive-compulsive symptoms.</p>
        <p>Rate the average occurrence of each during the prior week up to and including the time of interview.</p>
       </div>
       <div style={{border:"1px solid black"}}>
        <p style={{fontWeight:"bold", textAlign:"center"}}>Score</p>
        <p style={{textAlign:"center"}}>None=0,  Mild=1,  Moderate=2,  Severe=3,  Extreme=4</p>
        <p style={{textAlign:"center"}}>Complete Control=0,  Much Control=1,  Moderate Control=2,  Little Control=3, No Control=4</p>
      </div>
      <div>
        <h3 style={{fontWeight:"bold"}}>QUESTIONS ON OBSESSIONS (ITEMS 1-5)</h3>
        <p style={{fontFamily:"Arial"}}>"I AM NOW GOING TO ASK YOU QUESTIONS ABOUT THE THOUGHTS YOU CANNOT STOP THINKING ABOUT
        " (Review for the informant(s) the Target Symptoms and refer to them while asking question 1-5)</p>
        <div style={{marginLeft:"30px"}}>

        <div style={{ borderBottom: "2px solid black", borderTop: "2px solid black" }}>
         <h4>1. Time Occupied by Obsessive Thoughts</h4>
         <p>(Be sure to exclude rumination and preoccupation which, unlike obsession, are ego-syntonic and rational (but exaggerated))</p>

         <div style={{ display: "flex", borderTop: "1px solid black", margin:"10px" }}>
          <label style={{ marginLeft: "10px",marginTop:"10px" }}>
           <input type="radio" name="question1" value={0}
               onClick={() => handleScoreChange15(0,0)}/> None
               <br></br>
          </label>
         <label style={{ marginLeft: "10px",marginTop:"10px" }}>
          <input type="radio" name="question1" value={1}
           onClick={() => handleScoreChange15(0,1)}/> Mild-
               (less than 1hr/day
            or occasional intrusion)
          </label>
          <label style={{ marginLeft: "10px",marginTop:"10px" }}>
           <input type="radio" name="question1" value={2}
            onClick={() => handleScoreChange15(0,2)}/> Moderate- (1 to 3 hrs/day or frequent intrusion)
          </label>
          <label style={{ marginLeft: "10px",marginTop:"10px" }}>
           <input type="radio" name="question1" value={3}
           onClick={() => handleScoreChange15(0,3)}/> Severe
          </label>
          <label style={{ marginLeft: "10px",marginTop:"10px" }}>
           <input type="radio" name="question1" value={4}
            onClick={() => handleScoreChange15(0,4)}/> Extreme
          </label>
        </div>
      </div>

          <div style={{ borderBottom: "2px solid black"}}>
            <h4>2. Interference Due to Obsessive Thoughts</h4>
            <ul>
              <li>How much do these thoughts get in the way of school or doing things with friends?</li>
              <li>Is there anything that you dont't do because of them? (If currently not in school, determine how much performance would be affected if patient were in school)</li>
            </ul>
          <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
           <label style={{ marginLeft: "10px",marginTop:"10px" }}>
             <input type="radio" name="question2" value={0}
               onClick={() => handleScoreChange15(1,0)}/> None
               </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question2" value={1} 
              onClick={() => handleScoreChange15(1,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question2" value={2}
              onClick={() => handleScoreChange15(1,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question2" value={3}
              onClick={() => handleScoreChange15(1,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question2" value={4} 
              onClick={() => handleScoreChange15(1,4)}/> Extreme
             </label>
         </div>
           
         </div>
         <div style={{ borderBottom: "2px solid black"}}>
            <h4>3. Distress Associated with Obsessive Thoughts</h4>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question3" value={0}
              onClick={() => handleScoreChange15(2,0)}/> None
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question3" value={1}
              onClick={() => handleScoreChange15(2,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question3" value={2}
              onClick={() => handleScoreChange15(2,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question3" value={3}
              onClick={() => handleScoreChange15(2,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question3" value={4}
         onClick={() => handleScoreChange15(2,4)}/> Extreme
             </label>
         </div>
         </div>
         <div style={{ borderBottom: "2px solid black"}}>
            <h4>4. Resistance Against Obsessions</h4>
            <ul>
              <li>
                How hard do you try to stop the thoughts or ignore them? (only rate effort made to resist, not success or failure in actually controlling the obsessions.If the obsessions are minimal the patient may not feed the need to resist them. In such cases, a rating of '0' should be given)
              </li>
            </ul>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question4" value={0}
              onClick={() => handleScoreChange15(3,0)}/> None
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question4" value={1}
              onClick={() => handleScoreChange15(3,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question4" value={2}
              onClick={() => handleScoreChange15(3,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question4" value={3}
              onClick={() => handleScoreChange15(3,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question4" value={4}
              onClick={() => handleScoreChange15(3,4)}/> Extreme
             </label>
            </div>
           
         </div>
         <div style={{ borderBottom: "2px solid black" }}>
            <h4>5. Degree of Control Over Obsessive Thoughts</h4>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question5" value={0}
              onClick={() => handleScoreChange15(4,0)}/> Complete Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question5" value={1}
              onClick={() => handleScoreChange15(4,1)}/> Much Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question5" value={2}
              onClick={() => handleScoreChange15(4,2)}/> Moderate Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question5" value={3}
              onClick={() => handleScoreChange15(4,3)}/> Little Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question5" value={4}
              onClick={() => handleScoreChange15(4,4)}/> No Control
             </label>
            </div> 
         </div>
         </div>
         <div style={{float:"right", fontWeight:"bold", marginTop:"5px"}} >
          <button onClick={handleScore1_5}>Obsession subtotal (add items 1-5)</button> 
          <p>{subTotalScore1_5}</p>
         </div>
      </div>


      <div style={{marginTop:"80px"}}>
         <h3 style={{fontWeight:"bold"}}>QUESTIONS ON COMPULSIONS (ITEMS 6-10)</h3>
         <p style={{fontFamily:"Arial"}}>"I AM NOW GOING TO ASK YOU QUESTIONS ABOUT THE HABITS YOU CAN'T STOP
" (Review for the informant(s) the Target Symptoms and refer to them while asking question 1-5)</p>

        <div style={{marginLeft:"30px"}}>
         <div style={{ borderBottom: "2px solid black", borderTop:"2px solid black" }}>
            <h4>6. Time Spent Performing Compulsive Behaviors</h4>
             <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question6"
              onClick={() => handleScoreChange610(0,0)}/> None
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question6"
              onClick={() => handleScoreChange610(0,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question6"
              onClick={() => handleScoreChange610(0,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question6"
              onClick={() => handleScoreChange610(0,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question6"
              onClick={() => handleScoreChange610(0,4)}/> Extreme
             </label>
            </div> 
           
         </div>
         <div style={{ borderBottom: "2px solid black"}}>
            <h4>7. Interference Due to Compulsive Behaviors</h4>
            <ul>
              <li>How much do these thoughts get in the way of school or doing things with friends?</li>
              <li>Is there anything that you dont't do because of them? (If currently not in school, determine how much performance would be affected if patient were in school)</li>
            </ul>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question7"
              onClick={() => handleScoreChange610(1,0)}/> None 
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question7"
              onClick={() => handleScoreChange610(1,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question7"
              onClick={() => handleScoreChange610(1,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question7"
              onClick={() => handleScoreChange610(1,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question7"
              onClick={() => handleScoreChange610(1,4)}/> Extreme
             </label>
            </div> 
           
         </div>
         <div style={{ borderBottom: "2px solid black"}}>
            <h4>8. Distress Associated with Compulsive Behavior</h4>
            <ul>
              <li>
                How would you feel if prevented from carrying out your habits? How upset would you become?
              </li>
            </ul>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question8"
              onClick={() => handleScoreChange610(2,0)}/> None 
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question8"
              onClick={() => handleScoreChange610(2,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question8"
              onClick={() => handleScoreChange610(2,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question8"
              onClick={() => handleScoreChange610(2,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question8"
              onClick={() => handleScoreChange610(2,4)}/> Extreme
             </label>
            </div> 
           
         </div>
         <div style={{ borderBottom: "2px solid black"}}>
            <h4>9. Resistance Against Compulsions</h4>
            <ul>
              <li>
                How much do you try to flight the habits?(Only rate effort made to resist, not success or failure in actually controlling the compulsions)
              </li>
            </ul>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question9"
              onClick={() => handleScoreChange610(3,0)}/> None 
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question9"
              onClick={() => handleScoreChange610(3,1)}/> Mild
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question9"
              onClick={() => handleScoreChange610(3,2)}/> Moderate
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question9"
              onClick={() => handleScoreChange610(3,3)}/> Severe
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question9"
              onClick={() => handleScoreChange610(3,4)}/> Extreme
             </label>
            </div> 
           
         </div>
         <div style={{ borderBottom: "2px solid black" }}>
            <h4>10. Degree of Control Over Compulsive Thoughts</h4>
            <ul>
              <li>How Strong is the feeling that you have to carry out the habit(s)?</li>
              <li>When you try to fight them, what happens?</li>
            </ul>
            <div style={{ display: "flex", borderTop: "1px solid black",margin:"10px" }}>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question10"
              onClick={() => handleScoreChange610(4,0)}/> Complete Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question10"
              onClick={() => handleScoreChange610(4,1)}/> Much Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question10"
              onClick={() => handleScoreChange610(4,2)}/> Moderate Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question10"
              onClick={() => handleScoreChange610(4,3)}/> Little Control
             </label>
             <label style={{ marginLeft: "10px",marginTop:"10px" }}>
              <input type="radio" name="question10"
              onClick={() => handleScoreChange610(4,4)}/> No Control
             </label>
            </div> 
         </div>
         </div>
         <div style={{float:"right", fontWeight:"bold", marginTop:"5px"}}>
           <button  onClick={handleScore6_10}>Compulsion subtotal (add items 1-5)</button> 
           <p>{subTotalScore6_10}</p>
           <button style={{fontWeight:"bold"}} onClick={handleTotalScore}>CY-BOCS total (add items 1-10)</button>
          <p>{totalScore}</p>
         </div>
         <div>
          <p style={{fontWeight:"bold"}}>Total CY-BOCS score: range of severity for patients who have both obsessions and compulsions:-</p>
           <ul style={{listStyleType:"none"}}>
            <li style={{fontWeight:"bold"}}>0-7 Subclinical</li>
            <li style={{fontWeight:"bold"}}>8-15 Mild</li>
            <li style={{fontWeight:"bold"}}>16-23 Moderate</li>
            <li style={{fontWeight:"bold"}}>24-31 Severe</li>
            <li style={{fontWeight:"bold"}}>32-40 Extreme</li>
           </ul>
           </div>
        <div>           
      </div>
      </div>
    </div>
  )
}

export default CyBocsRating;


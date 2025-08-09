import { useState } from "react"

const PsychiatricRating = () => {

  const [score,setScore] = useState(Array(18).fill(0));
  const [totalScore, setTotalScore] = useState(0);

    const handleScoreChange = (index, value) => {
    const updatedScores = [...score];  
    updatedScores[index] = value;       
    setScore(updatedScores);           
  };

 const handleTotalScore = ()=>{
       setTotalScore( score.reduce((sum,score)=>{
          return (sum+score)
        },0))
  }



  return (
    <div style={{margin:"6px",color:"black",backgroundColor:"white"}}>
      
     <h2 style={{textAlign:"center"}}>Brief Psychiatric Rating Scaale</h2>
     <div style={{ borderTop: "2px solid black", borderBottom: "2px solid black" }}>
       <p style={{textAlign:"center"}}>Please enter the score for the term which best describes the patient's condition.</p>
       <p style={{textAlign:"center"}}>0 = not assessed, 1 = not present, 2 = very mild, 3 = mild, 4 = moderate, 5 = moderately severe, 6 = severe, 7 = extremely severe</p>
     </div>
     
     <div style={{display:"flex", margin:"8px"}}>
        <div style ={{border:"2px solid black"}}>
          <div style={{display: "flex", borderBottom:"2px solid black"}}>
            <div style={{margin:"4px", width:"50%", borderRight:"2px solid black"}}>
            <h3>1. SOMATIC CONCERN</h3>
            <p>Degree of concern over present bodily health. Rate the degree to which physical health is perceived as a problem by the patient, whether complaints have a realistic basis or not.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[0]}
               onChange={(e) => handleScoreChange(0, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px", width:"50%"}}>
            <h3>10. HOSTILITY</h3>
            <p>Animosity, contempt, belligerence, disdain for other people outside the interview situation. Rate solely on the basis of the verbal report of feelings and actions of the patient toward others; do not infer hostility from neurotic defenses, anxiety, nor somatic complaints. (Rate attitude toward interviewer under "uncooperativeness")</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[9]}
               onChange={(e) => handleScoreChange(9, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}> 
            <div style={{margin:"4px", width:"50%",borderRight:"2px solid black"}}>
            <h3>2. ANXIETY</h3>
            <p>Worry, fear, or over-concern for present or future. Rate solely on the basis of verbal report of patient’s own subjective experience. Do not infer anxiety from physical signs or from neurotic defense mechanism.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[1]}
               onChange={(e) => handleScoreChange(1, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px",width:"50%"}}>
            <h3>11. SUSPICIOUSNESS</h3>
            <p>Distrust (delusional or otherwise) that others have now, or have had in the past, malicious or discriminatory intent toward the patient. On the basis of verbal report only, and not on actions which are currently held whether they concern past or present circumstances.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[10]}
               onChange={(e) => handleScoreChange(10, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
           <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>3. EMOTIONAL WITHDRAWAL</h3>
            <p>Deficiency in relating to the interviewer and to the interview situation. Rate only the degree to which the patient gives the impression of failing to be in emotional contact with other people in the interview situation.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[2]}
               onChange={(e) => handleScoreChange(2, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px",width:"50%"}}>
            <h3>12. HALLUCINATORY BEHAVIOR</h3>
            <p>Perceptions without normal external stimulus correspondence. Rate only those experiences which are reported to have occurred within the last week and which are described as distinctly different from the thought and perceptual processes of normal people.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[11]}
               onChange={(e) => handleScoreChange(11, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>4. CONCEPTUAL DISORGANIZATION</h3>
            <p>Degree to which thought processes are confused, disconnected, or disorganized. Rate on the basis of speech. Do not rate as disorganized if the patient’s speech is impaired due to educational or cultural background.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[3]}
               onChange={(e) => handleScoreChange(3, Number(e.target.value))}
               />
            </div>
          </div>
            <div style={{margin:"4px",width:"50%"}}>
            <h3>13. MOTOR RETARDATION</h3>
            <p>Reduction in energy level evidenced in slowed movements. Rate on the basis of observed behavior of the patient only; do not rate on the basis of patient’s subjective impressions of his own energy level.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[12]}
               onChange={(e) => handleScoreChange(12, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>5. GUILT FEELINGS</h3>
            <p>Over-concern or remorse for past behavior. Rate on the basis of the patient’s subjective experiences of guilt as evidenced by verbal report with appropriate affect; do not infer guilt feelings from depression, anxiety or neurotic defenses.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[4]}
               onChange={(e) => handleScoreChange(4, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px",width:"50%"}}>
            <h3>14. UNCOOPERATIVENESS</h3>
            <p>Evidence of resistance, unfriendliness, resentment, and lack of readiness to cooperate with the interviewer. Rate only on the basis of the patient’s attitude and responses to the interviewer and the interview situation; do not rate on the basis of reported resentment or uncooperativeness outside the interview situation.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[13]}
               onChange={(e) => handleScoreChange(13, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>6. TENSION</h3>
            <p>Physical and motor manifestations of tension "nervousness", and heightened activation level. Tension should be rated on the basis of physical signs and motor behavior and not on the basis of subjective experiences of tension reported by the patient.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[5]}
               onChange={(e) => handleScoreChange(5, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px",width:"50%"}}>
            <h3>15. UNUSUAL THOUGHT CONTENT</h3>
            <p>Unusual, odd, strange or bizarre thought content. Rate the degree of unusualness, not the degree of disorganization of thought processes.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[14]}
               onChange={(e) => handleScoreChange(14, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>7. MANNERISMS AND POSTURING</h3>
            <p>Unusual and unnatural motor behavior, the type of motor behavior which causes cultural embarrassment, or is not socially appropriate among normal people. Rate only abnormality of movements. Do not rate simple heightened motor activity.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[6]}
               onChange={(e) => handleScoreChange(6, Number(e.target.value))}
               />
            </div>
          </div>
          <div style={{margin:"4px",width:"50%"}}>
            <h3>16. BLUNTED AFFECT</h3>
            <p>Reduced emotional tone, apparent lack of normal feeling or involvement.</p> 
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[15]}
               onChange={(e) => handleScoreChange(15, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex",borderBottom:"2px solid black"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>8. GRANDIOSITY</h3>
            <p>Exaggerated self-opinion, conviction of unusual ability or sense of self-importance. Rate only on the basis of patient’s statements about himself or self-relation-to-others, not on the basis of his manner in the interview situation.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[7]}
               onChange={(e) => handleScoreChange(7, Number(e.target.value))}
               />
            </div>
          </div>
           <div style={{margin:"4px",width:"50%"}}>
            <h3>17. EXCITEMENT</h3>
            <p>Heightened emotional tone, agitation, increased reactivity.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[16]}
               onChange={(e) => handleScoreChange(16, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          <div style={{display:"flex"}}>
            <div style={{margin:"4px",width:"50%",borderRight:"2px solid black"}}>
            <h3>9. DEPRESSIVE MOOD</h3>
            <p>Despondency and gloom, sadness. Rate only degree of concerning depression based upon general retardation and somatic complaints.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[8]}
               onChange={(e) => handleScoreChange(8, Number(e.target.value))}
               />
            </div>
          </div>
           <div style={{margin:"4px",width:"50%"}}>
            <h3>18. DISORIENTATION</h3>
            <p>Confusion or lack of proper association for person, place or time.</p>
            <div>
              <label htmlFor="score" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
               Score:
              </label>
              <input
               type="number"
               id="score"
               name="score"
               min="0"
               max="7"
               style={{ width: "100px", height: "40px", padding: "8px", fontSize: "16px", border: "2px solid black",borderRadius: "5px", textAlign: "center"}}
               placeholder="0 - 7"
               value={score[17]}
               onChange={(e) => handleScoreChange(17, Number(e.target.value))}
               />
            </div>
          </div>
          </div>
          
        </div>     
     </div>

     <div style={{textAlign:"center"}}>
      <button onClick={handleTotalScore}>Give total Score</button>
      <p>{totalScore}</p>

     </div>

    </div>
  )
}

export default PsychiatricRating
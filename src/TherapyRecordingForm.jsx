/* import React from 'react';

// Main App component for the Therapy Session Recording Form
const App = () => {
  return (
    // Main container with full screen height and width, centered content, and a very light gray background
    <div style={{ backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', maxWidth: '56rem', width: '100%' }}>
        
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
          <div style={{ backgroundColor: '#f3f4f6', padding: '0.5rem', textAlign: 'center', fontSize: '1.125rem', fontWeight: 'bold', borderBottom: '1px solid #d1d5db', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            Therapy Session Recording Form
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 2 / span 2', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="session-no-date">Session No.& date</label>
            <input type="text" id="session-no-date" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="duration">Duration of session</label>
            <input type="text" id="duration" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem' }}></div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="participants">Session Participants</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="participants" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="therapy-method">Therapy method</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem', color: '#000000' }}>
            <input type="text" id="therapy-method" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} defaultValue="Individual/Family/Couple/Group" />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
          <div style={{ padding: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem', color: '#000000' }}>Objectives of the session:</div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-1">Objective-1</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-1" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-2">Objective-2</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-2" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-3">Objective-3</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-3" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="key-issues">Key issues/themes discussed</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem', color: '#000000' }}>
            <input type="text" id="key-issues" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} defaultValue="Psychosocial stressors/ Interpersonal problems/ Intrapsychic conflicts/ Crisis situations/ Conduct difficulties/ Behavioural difficulties/ Emotional difficulties/ Developmental difficulties/ Adjustment issues/ Addictive behaviours/Others" />
          </div>
        </div>

       
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="techniques">Therapy techniques used</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="techniques" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ padding: '0.5rem', fontWeight: 'bold', color: '#000000' }}>
            <label htmlFor="observations">Therapist observations and reflections</label>
          </div>
          <div style={{ padding: '0.5rem' }}>
            <textarea id="observations" style={{ minHeight: '16rem', width: '100%', border: 'none', outline: 'none', resize: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }}></textarea>
          </div>
        </div>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="next-plan">Plan for next session</label>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', padding: '0.5rem' }}>
            <input type="text" id="next-plan" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

       
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="next-date">Date for next session</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="next-date" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        

      </div>
    </div>
  );
};

*/

const TherapyRecordingForm = () => {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', maxWidth: '56rem', width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
          <div style={{ backgroundColor: 'white', padding: '0.5rem', textAlign: 'center', fontSize: '1.125rem', fontWeight: 'bold', borderBottom: '1px solid #d1d5db', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            Therapy Session Recording Form
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 2 / span 2', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="session-no-date" style={{ marginRight: '0.5rem', whiteSpace: 'nowrap' }}>Session No.& date</label>
            <input type="text" id="session-no-date" style={{ flex: '1', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="duration" style={{ marginRight: '0.5rem', whiteSpace: 'nowrap' }}>Duration of session</label>
            <input type="text" id="duration" style={{ flex: '1', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="participants">Session Participants</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="participants" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="therapy-method">Therapy method</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem', color: '#000000' }}>
            <input type="text" id="therapy-method" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} defaultValue="Individual/Family/Couple/Group" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
          <div style={{ padding: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem', color: '#000000' }}>Objectives of the session:</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-1">Objective-1</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-1" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-2">Objective-2</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-2" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="objective-3">Objective-3</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="objective-3" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="key-issues">Key issues/themes discussed</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem', color: '#000000' }}>
            <textarea type="text" id="key-issues" style={{ width: '100%',height:'4rem', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} defaultValue="Psychosocial stressors/ Interpersonal problems/ Intrapsychic conflicts/ Crisis situations/ Conduct difficulties/ Behavioural difficulties/ Emotional difficulties/ Developmental difficulties/ Adjustment issues/ Addictive behaviours/Others" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="techniques">Therapy techniques used</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="techniques" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ padding: '0.5rem', fontWeight: 'bold', color: '#000000' }}>
            <label htmlFor="observations">Therapist observations and reflections</label>
          </div>
          <div style={{ padding: '0.5rem' }}>
            <textarea id="observations" style={{ minHeight: '16rem', width: '100%', border: 'none', outline: 'none', resize: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }}></textarea>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="next-plan">Plan for next session</label>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', padding: '0.5rem' }}>
            <input type="text" id="next-plan" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderBottom: '1px solid #d1d5db', fontSize: '0.875rem' }}>
          <div style={{ gridColumn: 'span 1 / span 1', padding: '0.5rem', borderRight: '1px solid #d1d5db', color: '#000000' }}>
            <label htmlFor="next-date">Date for next session</label>
          </div>
          <div style={{ gridColumn: 'span 3 / span 3', padding: '0.5rem' }}>
            <input type="text" id="next-date" style={{ width: '100%', border: 'none', outline: 'none', padding: '0.25rem', color: '#000000', backgroundColor: '#ffffff' }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TherapyRecordingForm;

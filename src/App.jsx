import React, { useState } from 'react';
import './App.css'
import { Botoncito, ColourChanger } from  './components/botoncito/botoncito.jsx';

function App() {
const [botoncitoColor, setBotoncitoColor] = useState("blue");
return (
<>
<div>
<h1>First React app</h1>
<Botoncito text="CLICK ME!" color={botoncitoColor} onClick={()=>console.log("HAHA, GOT YOU!")}/>
<Botoncito text="CLICK ME, INSTEAD!" color={botoncitoColor} onClick={()=>console.log("PHEW, THANKS FOR NOT CLICKING ON THAT GUY!")}/>
<Botoncito text="what the f am i even doing here?" color={botoncitoColor} onClick={()=>console.log("OUCH! WHY ME?")}/>
</div>
<div>
<h2>Change our colours!</h2>
<ColourChanger colourtext="Change ts to a different colour!" onChangeColor={()=>setBotoncitoColor("green")}/>
</div>
</>
);
}

export default App;


//notes to self: remember that on lcick is FOR BOTH
//not just aapp jsx but also for botoncito whatever , why is it in spanish
//remember to like duplicate stuff for both exports and imports
//cards are going to fucking kill me and give me a heart attack, if this simlple
//as hell shi t is making me feel like this
//PS: fuck ai but like what am i going to do at this poin t
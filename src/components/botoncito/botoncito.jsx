import { createRoot } from 'react-dom/client';
import React from "react";
import "./botoncito.css";
export function Botoncito(props)
{
return <button className="botoncito"
style={{backgroundColor:props.color}}
onClick={props.onClick}
>
<p className="textyshit">
{props.text}
</p>
</button>
}
export function ColourChanger(props)
{
return <button
className="colourbotoncito"
onClick={props.onchangecolor}>
<p
className="colourtextyshit"
>
{props.colourtext}
</p>
</button>
}

//fuck this shit i am so fuckin tired of this shit what
//the fuck am i look aat
//1 whole fikin hour
//eatin shit like a kings feast on a diamnod-plated ruby studed silver platter
//adorned with mythic runes of days old and past
//tldr this sucks, but ig its necesarry to know
import React  , {useState} from 'react';

export default function TextConvertrer(props) {

    const[text,setText] = useState("");

    function onTexting(event){ 
        setText(event.target.value);
    }

      function convertUp(){ 
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted to UpperCase" , "info")
    }

      function convertLow(){ 
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been converted to LowerCase" , "info")
    }

    function clearText(){
      setText("")
      props.showAlert("Text has been cleared" , "info")
    }

    function copyText(){
      navigator.clipboard.writeText(text)
      props.showAlert("Text has been copied" , "info")
    }
    
    function reverseText(){
      setText(text.split("").reverse().join(""))
      props.showAlert("Text has been Reversed" , "info")
    }

  return (
<>
<div className='my-2 mx-2'>

<div className='d-flex justify-content-center'><h1 style={props.theme} >Text Converter</h1></div>

<div className="mb-3" >
  <textarea className="form-control border-3 border-info" rows="8" placeholder="Enter Text here.." id="floatingTextarea" value={text} onChange={onTexting} style={props.theme}/>
</div>

<button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertUp}>To UpperCase</button>
<button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertLow}>To LowerCase</button>
<button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>  
<button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>  
<button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={reverseText}>Reverse Text</button>  
<br/><br/>
<p style={props.theme}><b>{ text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> words & <b>{text.length}</b> characters</p>
<p style={props.theme}><b>{(0.006 * text.split(" ").filter((element)=>{return element.length !== 0}).length)}</b> minutes takes to read </p>

</div>
</>
  )
}

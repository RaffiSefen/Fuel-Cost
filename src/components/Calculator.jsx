import { useState } from "react"

const Calculators = ()=> {

    const [formValues, setFormValues] = useState("")
const [finalPrice, setFinalPrice] = useState()

    const handleFormValues = (e)=> {
      setFormValues({...formValues,   [e.target.name] : e.target.value })
    }

    const handleFormula = (e)=> {
e.preventDefault()
        
const res1 = formValues.distance / formValues.mpg
const res2 = res1 * 3.8
const res3 = res2 * formValues.price 

setFinalPrice(res3)
    }

    console.log(formValues)
return (
    <>
    <div className="form">
<form action="">
<div className="form-group">
<label htmlFor="" className="text-success">Distance(miles)</label>
<input type="number" name="distance" id="distance" className="form-control" onChange={(e)=> handleFormValues(e)} />

</div>
<div className="form-group">
<label htmlFor="" className="text-danger">MPG(miles per galon)</label>
<input type="number" name="mpg" id="mpg" className="form-control" onChange={(e)=> handleFormValues(e)}/>

</div>
<div className="form-group">
<label htmlFor="" className="text-warning"> Price(per litre)</label>
<input type="number" name="price" id="price" className="form-control" onChange={(e)=> handleFormValues(e)}/>
 
</div>

<div className="form-group">
    <button className="btn btn-info" onClick={ (e)=> handleFormula(e)} >Submit</button>
<h3 className="text-success">Your payment will be £{finalPrice}</h3>
</div>

</form>
</div>

    </>
)
}


export default Calculators
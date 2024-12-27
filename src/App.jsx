
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [Interest,setInterest] = useState(0)
  const [Principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)


  const [invalidPrinciple,setinvalidPrinciple] = useState(false)
  const [invalidRate,setinvalidRate] = useState(false)
  const [invalidYear,setinvalidYear] = useState(false) 
  const validateInput =(inputTag) =>{
    console.log(inputTag, typeof inputTag);
    const{name,value} = inputTag
    console.log( value.match(/^\d+(\.\d+)?$/));
    console.log( value.match(/^\d+(\.\d+)?$/));
    // expression supports decimal only: /^\d+(\.\d+)?$/

    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidPrinciple(false)
      }else{
        setinvalidPrinciple(true)
      }

    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }
    }else if(name=='year'){
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }

    }
   
    

    
  }

    const handleCalculate = (e)=>{
      e.preventDefault()
      console.log("button clicked");
    if(Principle && rate && year){
      setInterest(Principle*rate*year/100)
    }else{
      alert("please fill the form completely")
    }
    }
    
    const handleReset = ()=>{
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setinvalidPrinciple(false)
      setinvalidRate(false)
      setinvalidYear(false)
    }
  return (
    <>
      <div style={{ width: '100%', minHeight: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded' style={{width:'40%'}}>
          <h3>Simple Interest Calculator</h3>
          <p>calculate your simple Interesteasily!</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {Interest}</h1>
            <p className='fw-bolder'>Total simple Interest</p>

          </div>
          <form className='mt-5'>
            <div className='mb-3'>
              {/* principle amount*/}
              <TextField value={Principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="principal amount" variant="outlined" />
            </div>
           {/*invalid principle */}
           {invalidPrinciple && <div className='text-danger mb-3 fw-bolder'>
            invalid Principle amount
           </div>}
            <div className='mb-3'>
              {/* rate*/}
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% rate" variant="outlined" />
            </div>
              {/*invalid rate */}
              {invalidRate && <div className='text-danger mb-3 fw-bolder'>
            invalid  Rate
           </div>}
            <div className='mb-3'>
              {/* year*/}
              <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="time period (yr)" variant="outlined" />
            </div>

            {/*invalid year */}
            {invalidYear && <div className='text-danger mb-3 fw-bolder'>
            invalid year
           </div>}
            {/* stack to arrange buttons in row form */}
            <Stack direction="row" spacing={2}>
              {/* buttons */}
              
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%', height:'50px'}} className='bg-dark'>CALCULATE</Button>
              <Button onClick={handleReset} variant="outlined" style={{width: '50%' , height: '50px'}} className='border border-dark text-dark'>RESET</Button>
            </Stack>


            {/* buttons */}
            

          </form>
        </div>
      </div>

    </>
  )
}

export default App

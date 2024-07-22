import { useEffect, useState } from "react"


export const RegisterComp = () => {
  const [check, setCheck] = useState(false)

  const [Lodge, setCheckLodge] = useState(false)

  //full name state 
  const [name, setName] = useState("")

  // Phone number state
  const [number, setNumber] = useState("")

  //Marital state
  const [maritalstatus, setMaritalstatus] = useState("")

  //gender state
  const [gender, setGender] = useState("")

  //school state
  const [school, setSchool] = useState("")
  //state
  const [state, setState] = useState("")

  // course of study 
  const [coures, setCoures] = useState("")

  // Lodge 
  const [lodge, setLodge] = useState()

  //level
  const [level, setLevel] = useState("")

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (school === "unizik" || school === "others") {

      if(school === "unizik"){
        setCheckLodge(true)
      }else{
        setCheckLodge(false)
      }
      setCheck(true)
    }else{
      setCheck(false)

    }

    



  }, [school])





  let Error;



  const validate = async () => {


    Error = "";
    if (name.trim() === "" || number.trim() === "" || maritalstatus.trim() === "" || gender.trim() === "" || school.trim() === "") {
      Error = "All fields are Required"
    }


    if (isNaN(number)) {
      Error = "Phone number must be a number"
    }


      if (school === "unizik" || school === "others") {
        if (coures.trim() === "" || level.trim() === "") {
          Error = "All fields are Required"
        }
      }
    alert(Error)

    if (Error.trim() !== "") {
      return;
    }


    let checkcoures = coures ? coures : "Null"// check coursr of study value
    let checklevel = level ? level : "Null"// check level in school value
    let checklodge = lodge ? lodge : "Null"// check level in school value
    setLoading(true)

    try {
      let requestData = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: name,
          phonenumber: number,
          maritalstatus: maritalstatus,
          gender: gender,
          staetoforigin: state,
          nameofschool: school,
          courseofstudy: checkcoures,
          levelinschool: checklevel,
          lodge: checklodge
        })
      })
      const resData = await requestData.json()
      console.log(resData)

      if (requestData.ok) {
        alert(resData.message)
        setCheckLodge("")
        setName("")
        setNumber("")
        setMaritalstatus("")
        setGender("")
        setSchool("")
        setState("")
        setCoures("")
        setLodge("")
        setLevel("")
        

      } else {
        alert(resData.message)
      }
      console.log(Error)
      setLoading(false);



    } catch (e) {
      console.log(e)
      alert(e.message)
      setLoading(false);
    } finally {

      setLoading(false)

    }



  }





  return (
    <>
      <div className='w-full md:w-1/2 bg-slate-400/20 px-1 mx-auto mb-40'>
        <div   className=" flex flex-col gap-2 md:px-2 py-2">
          {/* nameinput */}
          <div className='flex flex-col'>
            <label htmlFor="fullname " className="text-sm font-bold">Full Name</label>
            <input id='fullname' value={name} onChange={(e) => setName(e.target.value)} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black  rounded-lg" placeholder='Full Name' />
          </div>

          {/* Phone number input */}
          <div className='flex flex-col '>
            <label htmlFor="phonenumber" className="text-sm font-bold">Phone Number</label>
            <input id='phonenumber' value={number} onChange={(e) => setNumber(e.target.value)} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Phone Number' />
          </div>

          {/* Marital Ststus input */}
          <div className='flex flex-col'>
            <label htmlFor="maritalstatus " className="text-sm font-bold">Marital Status</label>
            <select name="maritalstatus" value={maritalstatus} onChange={(e) => setMaritalstatus(e.target.value)} id="maritalstatus" className="p-2 bg-white outline-none border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>

          {/* Gender input */}
          <div className='flex flex-col'>
            <label htmlFor="gender" className="text-sm font-bold">Gender</label>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} id="gender" className="p-2 outline-none bg-white border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* State of origin input */}
          <div className='flex flex-col'>
            <label htmlFor="state " className="text-sm font-bold">State Of Origin</label>
            <input id='state' value={state} onChange={(e) => setState(e.target.value)} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='State Of Origin' />
          </div>

          {/* name of school input */}
          <div className='flex flex-col'>
            <label htmlFor="School " className="text-sm font-bold">Name Of School</label>
            <select name="gender" value={school} onChange={(e) => setSchool(e.target.value)} id="gender" className="p-2 bg-white outline-none border-2 text-sm font-semibold border-black rounded-lg">
              <option value="">Select School</option>
              <option value="unizik">Unizik</option>
              <option value="others">Others</option>
              <option value="notinschool">Not Yet in University</option>
              <option value="graduate">Graduate</option>
            </select>
          </div>
          {/* Lodge */}

          {Lodge && <div className='flex flex-col '>
            <label htmlFor="lodge" className="text-sm font-bold">Lodge Name</label>
            <input id='lodge' value={lodge} onChange={(e) => setLodge(e.target.value)} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Enter Name Of Lodge' />
          </div>}

          {/* coures of study input */}
          {check && <div className='flex flex-col '>
            <label htmlFor="course " className="text-sm font-bold">Coures Of Study</label>
            <input id='course' value={coures} onChange={(e) => setCoures(e.target.value)} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Coures Of Study' />
          </div>}


          {/* Level of study input */}
          {check && <div className='flex flex-col'>
            <label htmlFor="level " className="text-sm font-bold">Level</label>
            <select name="level" id="level" value={level} onChange={(e) => setLevel(e.target.value)} className="p-2 outline-none bg-white border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
            </select>
          </div>}


          <button disabled={loading} className="w-full p-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-orange-500 duration-300" onClick={validate}>{
            loading ? 'Loading' : 'Register'
          }</button>





        </div>
      </div>
    </>
  )
}

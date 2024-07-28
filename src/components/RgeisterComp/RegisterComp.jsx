import { useEffect, useState } from "react"
import { BiCheckCircle } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"



export const RegisterComp = () => {
  const [check, setCheck] = useState(false)

  const [Lodge, setCheckLodge] = useState(false)

  // Server Error
  const [serverError, setSeverError] = useState("")

  // succeswsfull State
  const [successfull, setSuccessfull] = useState("")

  //full name state 
  const [name, setName] = useState("")
  const [nameError, setNamerror] = useState("")//name Error

  // Phone number state
  const [number, setNumber] = useState("")
  const [numberError, setNumberError] = useState("")

  //Marital state
  const [maritalstatus, setMaritalstatus] = useState("")
  const [maritalstatusError, setmaritalstatusError] = useState("")

  //gender state
  const [gender, setGender] = useState("")
  const [genderError, setgenderError] = useState("")

  const [success, setSuccess] = useState(false)

  //school state
  const [school, setSchool] = useState("")
  const [schoolError, setschoolError] = useState("")

  //state
  const [state, setState] = useState("")
  const [stateError, setstateError] = useState("")

  // course of study 
  const [coures, setCoures] = useState("")
  const [courseError, setcourseError] = useState("")

  // Lodge 
  const [lodge, setLodge] = useState("")
  const [lodgeError, setlodgeError] = useState("")

  //level
  const [level, setLevel] = useState("")
  const [levelError, setlevelError] = useState("")

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (school === "unizik" || school === "others") {

      if (school === "unizik") {
        setCheckLodge(true)
      } else {
        setCheckLodge(false)
      }

      setCheck(true)
    } else {
      setCheck(false)
      setCheckLodge(false)

    }
    if (serverError === "") {
      setSeverError("")
    }


  }, [school])







  let checkcoures;
  let checklevel;
  let checklodge;

  const validate = async () => {


    if (name === "" || number === "" || state === "" || maritalstatus === "" || gender === "" || school === "") {

      setNamerror(name === "" ? "Please enter your full name" : "")
      setschoolError(school === "" ? "please select your school" : "")

      setNumberError(number === "" ? "Please input a valid phone number" : "")

      setmaritalstatusError(maritalstatus === "" ? "Please select your marital status" : "")

      setgenderError(gender === "" ? "Please select your Gender" : "")

      setstateError(state === "" ? "Please input your state of origin" : "")

      return


    }
    if (school === "unizik" && (lodge === "" || coures === "" || level === "")) {
      setlodgeError(lodge === "" ? "Input your lodge Loaction" : "")
      setcourseError(coures === "" ? "Select your course of study" : "")
      setlevelError(level === "" ? "Select your level" : "")
      return
    }

    if (school === "others" && (coures === "" || level === "")) {
      setcourseError(coures === "" ? "Select your course of study" : "")
      setlevelError(level === "" ? "Select your level" : "")
      return
    }














    let checkcoures = coures ? coures : "Null"// check coursr of study value
    let checklevel = level ? level : "Null"// check level in school value
    let checklodge = lodge ? lodge : "Null"// check level in school value


    setLoading(true)

    try {
      let requestData = await fetch("https://nifesscbackend.vercel.app/submit", {
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

      if (requestData.ok) {
        setSuccessfull(resData.message)
        setSeverError("")
        setSuccess(true)

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
        setSeverError(resData.message)
      }
      console.log(Error)
      setLoading(false);




    } catch (e) {
      console.log(e)
      setSeverError(e.message)


      setLoading(false);
    } finally {

      setLoading(false)

    }



  }






  return (
    <>
      {!success ? <div className='w-full md:w-1/2 bg-slate-400/20 px-1 mx-auto mb-40'>
        {
          serverError !== "" &&
          <p className="bg-red-500  text-center items-center text-sm font-semibold p-1 rounded-md mt-1" >{serverError}</p>
        }

        {
          successfull !== "" &&
          <p className="bg-green-500 p-2 rounded-lg items-center text-sm font-semibold  mt-1" > {successfull}</p>
        }
        <div className=" flex flex-col gap-2 md:px-2 py-2">
          {/* nameinput */}
          <div className='flex flex-col'>
            <label htmlFor="fullname " className="text-sm font-bold">Full Name</label>
            <input id='fullname' value={name} onChange={(e) => {
              setName(e.target.value)
              setNamerror("")
            }} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black  rounded-lg" placeholder='Full Name' />

            {
              nameError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold  mt-1" >{nameError}</p>
            }
          </div>

          {/* Phone number input */}
          <div className='flex flex-col '>
            <label htmlFor="phonenumber" className="text-sm font-bold">Phone Number</label>
            <input id='phonenumber' value={number} onChange={(e) => {
              setNumber(e.target.value)
              setNumberError("")
            }} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Phone Number' />
            {
              numberError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold  mt-1" >{numberError}</p>
            }
          </div>


          {/* Marital Ststus input */}
          <div className='flex flex-col'>
            <label htmlFor="maritalstatus " className="text-sm font-bold">Marital Status</label>
            <select name="maritalstatus" value={maritalstatus} onChange={(e) => {
              setMaritalstatus(e.target.value)
              setmaritalstatusError("")
            }} id="maritalstatus" className="p-2 bg-white outline-none border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>

            {
              maritalstatusError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{maritalstatusError}</p>
            }
          </div>

          {/* Gender input */}
          <div className='flex flex-col'>
            <label htmlFor="gender" className="text-sm font-bold">Gender</label>
            <select name="gender" value={gender} onChange={(e) => {
              setGender(e.target.value)
              setgenderError("")
            }} id="gender" className="p-2 outline-none bg-white border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {
              genderError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{genderError}</p>
            }
          </div>

          {/* State of origin input */}
          <div className='flex flex-col'>
            <label htmlFor="state " className="text-sm font-bold">State Of Origin</label>
            <input id='state' value={state} onChange={(e) => {
              setState(e.target.value)
              setstateError("")
            }} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='State Of Origin' />
            {
              stateError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{stateError}</p>
            }
          </div>

          {/* name of school input */}
          <div className='flex flex-col'>

            <label htmlFor="School " className="text-sm font-bold">Name Of School</label>
            <select name="school" value={school} onChange={(e) => {
              setSchool(e.target.value)
              setschoolError("")
            }} id="gender" className="p-2 bg-white outline-none border-2 text-sm font-semibold border-black rounded-lg">
              <option value="">Select School</option>
              <option value="unizik">Unizik</option>
              <option value="others">Others</option>
              <option value="notinschool">Not Yet in University</option>
              <option value="graduate">Graduate</option>
            </select>
            {
              schoolError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{schoolError}</p>
            }
          </div>

          {/* Lodge */}

          {Lodge && <div className='flex flex-col '>
            <label htmlFor="lodge" className="text-sm font-bold">Lodge Name</label>
            <input id='lodge' value={lodge} onChange={(e) => {
              setLodge(e.target.value)
              setlodgeError("")
            }} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Enter Name Of Lodge' />
            {
              lodgeError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{lodgeError}</p>
            }

          </div>}

          {/* coures of study input */}
          {check && <div className='flex flex-col '>
            <label htmlFor="course " className="text-sm font-bold">Coures Of Study</label>
            <input id='course' value={coures} onChange={(e) => {
              setCoures(e.target.value)
              setcourseError("")
            }} className="p-2 outline-none border-2 bg-white text-sm font-semibold border-black rounded-lg" placeholder='Coures Of Study' />
            {
              courseError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{courseError}</p>
            }

          </div>}


          {/* Level of study input */}
          {check && <div className='flex flex-col'>
            <label htmlFor="level " className="text-sm font-bold">Level</label>
            <select name="level" id="level" value={level} onChange={(e) => {
              setLevel(e.target.value)
              setlevelError("")
            }} className="p-2 outline-none bg-white border-2 text-sm font-semibold border-black rounded-lg">
              <option value=""></option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
            </select>
            {
              levelError !== "" &&
              <p className="bg-red-500 items-center text-sm font-semibold p-1 rounded-md mt-1" >{levelError}</p>
            }
          </div>}


          <button disabled={loading} className="w-full p-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-orange-500 duration-300" onClick={validate}>{
            loading ? 'Loading' : 'Register'
          }</button>







        </div>
      </div>
        :
        <div className="h-screen w-full items-center flex-col justify-center flex">
          <div className="text-green-500 flex flex-col items-center justify-center text-center">
            <BiCheckCircle className="text-6xl" />
            <p className="text-center text-2xl mt-5">You've been registered successfully</p>
          </div>
          <Link to={'/merchandise'} className="px-5 py-3 mt-6 shadow-md cursor-pointer bg-blue-600 text-white rounded-md">Click to go to the Merchandise Page</Link>
        </div>
      }
    </>
  )
}

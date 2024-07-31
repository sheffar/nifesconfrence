import { useEffect, useState } from "react"
import { FaArrowDown, FaTimes } from "react-icons/fa"
import { FaNairaSign } from "react-icons/fa6";
import { WhatsappIcon } from 'react-share';


export const SellSection = () => {

  const linkstag = [
    {
      "names": "T-shirts",
    },
    {
      "names": "Cap",
    },
    {
      "names": "NOTEPAD",
    },
    {
      "names": "QUITE TIME DIARY",
    }

  ]

  const [active, setActive] = useState(100)

  const [open, setOpen] = useState(false)
  // close icon 
  const [closeIcon, setCloseIcon] = useState(true)

  //review image state
  const [image, setImage] = useState("")




  const [products, setProducts] = useState([
    [
      {
        image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/fragrance%20of%20christ%20black-1.jpg",
        price: "8000",
        name: "Fragrance Of Christ Shirt",
        size: ["M", "L", "XL"],
        active: -1

      },
      {
        image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/men%20of%20exploit%20black.jpg",
        price: "8000",
        name: "The Men Of Exploit Shirt",
        size: ["M", "L", "XL"],
        active: -1


      }
    ],

    [{
      image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/singles%20conferene%20cap.jpg",
      name: "Fragrance Of Christ Cap",
      price: "3000",
      active: -1


    },

    {
      image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/singles%20conferene%20cap.jpg",
      name: "The Men Of EXploit Cap",
      price: "2000",
      active: -1


    }
    ],

    [{
      image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/notebook1.jpg",
      name: "Out for Christ Note",
      price: "2000",
      active: -1


    },

    {
      image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/notebook2.jpg",
      name: "Making Impact Note",
      price: "2500",
      active: -1

    }
    ],
    [{
      image: "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/diary.jpg",
      name: "Singles Confrence Diary",
      price: "4000",
      active: -1
    },


    ],
  ]
  )

  //Toggle the marchendize drop down
  const toggle = (index) => {
    if (index === active) {
      setActive(100)
    } else {
      setActive(index)
    }


  }

  //toggel size
  const toggleSize = (name) => {
    const newMap = products.map(el => {
      el.map(ell => {
        if (ell.name === name) {
          return {
            active: 0
          }
        }
        return ell
      })
      return el
    })
    setProducts(newMap)
    console.log(products)
  }

  // const productname = ;

  const getproduct = (e) => {
  }

  //review image in full screen
  const review = (url) => {
    setImage(url)
    setOpen(true)
  }

  //close review image Popup
  const closePop = () => {
    if (closeIcon) {
      setOpen(!open)
    }
  }


  let url
  const openWhatsApp = (obj) => {
    const message = encodeURIComponent(`Hi, I'll like to purchase: ${obj.name}`);
    url = `https://wa.me/2347025771623?text=${message}`;
    window.open(url, '_blank');
  };





  return (
    <>
      {open && <div className="w-full md:w-1/2 h-3/5 md:h-1/2 bg-orange-500 z-20 rounded-lg shadow-lg  mx-auto fixed -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2  md:right-80">
        <img src={image} alt="Review Image" className="w-full relative z-20 rounded-lg h-full object-cover" />
        <FaTimes onClick={closePop} className="text-black  border-2 z-50 border-black rounded-full absolute right-1 top-1 text-2xl cursor-pointer" />
      </div>}

      <div className=' hide w-full md:w-1/2 mx-auto px-2 md:px-4  flex flex-col gap-2 md:mb-60 '>
        {linkstag.map((el, index) => (
          <div key={index} className="" >
            <p onClick={() => toggle(index)} className="p-2 align-center flex justify-between group text-center border-2 rounded-xl border-black duration-300 cursor-pointer px-7 text-normal hover:bg-orange-500 font-bold"> {el.names} <FaArrowDown className="mt-0.5 group-hover:translate-y-2 duration-300" /> </p>
            <div className={` ${index === active ? 'h-fit' : 'h-0'}  overflow-hidden my-2 bg-white  duration-300`}>

              {products[active]?.map((ell, indexs) => (
                <div key={indexs} className="flex bg-slate-400/20 rounded-xl my-2 justify-between  py-2">
                  <div className=" relative w-fit h-fit">
                    <img src={ell.image} onClick={() => review(ell.image)} className=" cursor-pointer w-28 h-28 md:w-28 md:h-28  rounded-full md:rounded-full object-cover  bg-black" />
                    <p className="bg-white w-fit p-1 px-2.5  absolute top-0 text-sm md:text-lg  left-16  md:right-0 rounded-2xl text-orange-500 font-bold flex "> <FaNairaSign className="text-black pr-1 mt-1 " />  {ell.price}</p>
                  </div>

                  <div className=" flex flex-col gap-2 items-end md:items-center pr-3 md:pr-5 ">
                    <p className="text-sm md:text-lg font-semibold">{ell.name}</p>
                    <div className=" flex gap-2 md:gap-4 align-center justify-center">
                      <p onClick={() => toggleSize(ell.name)} className="bg-black rounded-full w-8 h-8 cursor-pointer"></p>
                      <p className="bg-white rounded-full w-8 h-8 border-2 p-1 cursor-pointer border-black"></p>
                    </div>
                    <p className="flex gap-4 justify-center ">
                      {ell.size && <span className="font-bold">Sizes: </span>}


                      {ell.size?.map((si, position) => (
                        <span key={position} className="font-semibold cursor-pointer">{si}</span>

                      ))}
                    </p>

                    <div className=" flex  cursor-pointer  w-full   gap-2  items-end md:items-center justify-center">

                      <WhatsappIcon
                        url={`${url}/`}
                        onClick={() => openWhatsApp(ell)}
                        separator=":"
                        className="h-8 w-8 cursor-pointer rounded-full"
                      />
                      <p className="text-xs font-semibold w-28 md:w-full">Click to purchase on whatsapp</p>
                    </div>

                  </div>
                </div>
              ))}


            </div>
          </div>
        ))}

      </div>
    </>
  )
}

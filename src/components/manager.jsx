import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
const Manager = () => {
    const [show, setShow] = useState(0);
    const [see, setSee] = useState("password")
    const [rough,setrough]=useState({site:false,name:false,pass:false})
    const [form, setForm] = useState({
        site: "", name: "",
        pass: ""
    })
    const [passwords, setPasswords] = useState([]);
    const handleedit = (id) => {
        // console.log("hi")
        let newform = passwords.find((item) => (item.id === id));
        setForm(newform);
        handledelete(id);
    }
    const handledelete = async (id) => {
        let newpass = passwords.find((item) =>  item.id === id )
        let res=await fetch("http://localhost:3000/",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(newpass)})
        // setPasswords(newpass);
        toast('Password Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        // localStorage.setItem("passwords", JSON.stringify(passwords))
    }
    const copyitem = (text) => {
        navigator.clipboard.writeText(text);
        toast('Copied to the Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
  
  useEffect(()=>{
        const getpass=async ()=>{
            let req=await fetch("http://localhost:3000/")
            let savedpasswords=await req.json();
            setPasswords(savedpasswords);
            
         }
         getpass();
    },[]);
    // let passwords=[];
    // useEffect(() => {
    //     // if(passwords.length>0)
    //     //      {
    //     let res=fetch("http://localhost:3000/",{method:"POST",header:{"Content-Type":"application/json"}},body:JSON.stringify({}))

    //     // localStorage.setItem("passwords", JSON.stringify(passwords))
    //     // console.log(passwords);
    // }, [passwords])
 
    const savepass = async () => {
         let unq=uuidv4();
        setPasswords([...passwords, { site: form.site, name: form.name, pass: form.pass, id: unq }])
        let res=await fetch("http://localhost:3000/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,id:unq})})

        toast('Password Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setForm({
            site: "", name: "",
            pass: ""
        })
        setrough({site:false,name:false,pass:false})
    }
    const handlechange = (e) => {
         if(e.target.value!==''){
        setForm({ ...form, [e.target.name]: e.target.value })
     setrough({...form,[e.target.name]:true})}
    }
    const showpass = () => {
        // alert("Show the password")
        if (show === 0) {
            setShow(1);
            setSee("text")
        }
        else {
            setShow(0);
            setSee("password");
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        
            <div className="flex justify-items-center min-w-fulljustify-center ">
                <div className='container m-auto flex flex-col justify-items-center  bg-green-100 mt-0 md:mt-5 '>
                    <h1 className='text-2xl m-auto font-bold'><span className='text-green-500'>&lt;</span><span>PassOP</span><span className='text-green-500'>/&gt;</span></h1>
                    <span className='m-auto text-slate-400'>Your Password Manager</span>
                    <input type="text" value={form.site} onChange={handlechange} placeholder='Enter website URL' name='site' className='h-8 border mt-3 border-green-900 rounded-3xl w-[95%] mx-auto pl-2' />
                    <div className=' flex gap mx-2 gap-2'>
                        <input onChange={handlechange} value={form.name}   className='h-8 border  mt-3 border-green-900 rounded-3xl w-[50%] mx-auto pl-2' type="text" name="name" id="" placeholder='Enter Username' />
                        <input onChange={handlechange} value={form.pass} className='h-8 relative left-2 border mt-3 border-green-900 rounded-3xl w-[50%] mx-auto pl-2 mr-2' type={see} placeholder='Enter Password' name='pass' />
                        {/* <span className='mt-3 h-2 relative right-12  ' onClick={showpass}> {show ? <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              stroke="bold"
              state="hover-look-around"
              colors="primary:#121331,secondary:#000000"
            >
            </lord-icon> : <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              stroke="bold"
              state="hover-cross"
              colors="primary:#000000,secondary:#000000"
            >
            </lord-icon>}</span> */}
                    </div>
                    <button onClick={savepass} disabled={!(rough.name&&rough.site&&rough.pass)}className=' hover:bg-green-4 00 flex bg-green-500 w-fit mx-auto rounded-3xl p-1 pr-3  justify-center mt-7 '><lord-icon
                        src="https://cdn.lordicon.com/sbnjyzil.json"
                        trigger="hover"
                        stroke="bold"
                    >
                    </lord-icon><span className='ml-2 hover:cursor-pointer text-lg '> Add Password</span></button>
                    <div>
                        <h1 className=' ml-3 mb-2 text-xl text-green-900'>
                            Your Passwords
                        </h1>
                        {
                            passwords.length === 0 && <div className='text-xl text-green-900 mx-auto relative left-[30%] '>No passwords to display</div>
                        }
                        {
                            passwords.length !== 0 && <div>
                                <table className="table-auto w-[100%] mx-auto  bg-green-200">
                                    <thead className='bg-green-600'>
                                        <tr  className='mt-2 '>
                                            <th className=' overflow-hidden max-w-[25%] '>URL</th>
                                            <th className=' text-nowrap'>Name</th>
                                            <th className=''>Password</th>
                                            <th className=''>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwords.length !== 0 && passwords.map((item, index) => (<tr key={index}>
                                            <td className=' text-center  text-wrap overflow-hidden max-w-[25%] '><div className='flex justify-center'><a href={item.site}>{item.site}</a>
                                                <img onClick={() => { copyitem(item.site) }} className="ml-2 hidden md:block hover:cursor-pointer" src="icons/copy.svg" height={10} width={18} alt="" /></div></td>
                                            <td className='text-cente text-nowrap'>
                                                <div className='flex justify-center   overflow-hidden '>{item.name}  <img onClick={() => { copyitem(item.name) }} className="  hidden md:block ml-2 hover:cursor-pointer" src="icons/copy.svg" height={10} width={18} alt="" /> </div> </td>
                                            <td className='text-center   overflow-hidden'><div className='flex justify-center'>{item.pass}  <img onClick={() => { copyitem(item.pass) }} className=" hidden md:block ml-2 hover:cursor-pointer" src="icons/copy.svg" height={10} width={18} alt="" /></div></td>
                                            <td className='text-center flex flex-row gap-2   overflow-hidden'><div className='mx-auto flex gap-3'><lord-icon
                                                onClick={() => { handleedit(item.id) }}
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                stroke="bold"
                                                state="hover-line"
                                                colors="primary:#000000,secondary:#000000"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                                <lord-icon onClick={() => { handledelete(item.id) }}
                                                    src="https://cdn.lordicon.com/hwjcdycb.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon></div></td>
                                        </tr>))}

                                    </tbody>
                                </table>
                            </div>
                        }


                    </div>

                </div></div></>
    )
}

export default Manager
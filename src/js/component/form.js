import React, { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


import { Context } from "../store/appContext";

export const Form = () => {
    const [data, setData] = useState({name:'', phone:'', address:'', email:''});
    const { actions, store } = useContext(Context);
    const { contactId } = useParams();
    const navigate = useNavigate();
    

    useEffect(()=>{
        if(contactId != undefined && store.contacts.length > 0){
            const contact =  actions.getContact(contactId);
            setData(contact);
        }
    }, [store.contacts])

    const setValue = (event)=>{
        setData({...data, [event.target.name]: event.target.value })
    }

    const onSubmit = async (event)=>{
        event.preventDefault();

        // TODO: Form Validation
        
        if(contactId != undefined ){
            await actions.updateContact(data);
        }else{
            await actions.createContact(data);
        }
        navigate('/');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                <input type="text" name="name" className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Full name" value={data.name} onChange={setValue} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter email" value={data.email} onChange={setValue} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="number" name="phone" className="form-control" 
                id="exampleInputPassword1" placeholder="Enter phone" value={data.phone} onChange={setValue}  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                <input type="text" name="address" className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter address" value={data.address} onChange={setValue} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <a type="button" className="btn btn-link" href="/">or get back to contact</a>
        </form>
    )
}
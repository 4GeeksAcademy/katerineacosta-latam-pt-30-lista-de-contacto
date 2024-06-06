import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const deleteContact = (contact)=>{
		const cont = confirm("Are you sure you want to delete " + contact.name)
		if(cont){
			actions.deleteContact(contact);
		}
	}

	return (<>
	<a type="button" className="btn btn-success" href="/demo"> Add new contacto</a>
	<div className="mt-5">
		{ store.contacts.map(contact => (<div className="card mb-3" style={{maxWidth: "540px"}}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src="https://th.bing.com/th/id/OIP.kyzzCvCkMXiLu4_tUP5hCAHaE8?w=284&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="img-fluid rounded-circle" alt="..."/>
				</div>
				<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">{contact.name}</h5>
					<p className="card-text">{contact.address}</p>
					<p className="card-text">{contact.phone}</p>
					<p className="card-text">{contact.email}</p>
				<div>
					<a class="btn btn-primary" href={'/contact-edit/'+contact.id} >Editar</a>
					<button type="button" class="btn btn-primary" onClick={()=> deleteContact(contact) }>Eliminar</button>
				</div>
				</div>
				</div>
			</div>
		</div>))}
		
		
	</div>
	</>)
};

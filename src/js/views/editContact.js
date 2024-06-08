import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Form } from "../component/form";

export const EditContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-center mt-4">Edit Contact</h1>
			<Form />
			
		</>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Form } from "../component/form";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<h1>Add a new contact</h1>
			<Form />
		</>
	);
};

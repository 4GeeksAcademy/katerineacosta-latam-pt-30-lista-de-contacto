const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactIdToDelete: null
		},
		actions: {
			loadSomeData: () => {
					const res = fetch('https://playground.4geeks.com/contact/agendas/kath')
					.then()
					.then(async data =>{
						if(data.status == 404){
							const actions = getActions()
							return actions.createAgenda();
						}
						const contacts = (await data.json()).contacts;
						const store = getStore();
						setStore({ ...store, contacts:contacts })
					})
					.catch(()=>{
						// TODO: check if 200
					})

				
			},
			createAgenda: async () => {
				const res = await fetch('https://playground.4geeks.com/contact/agendas/kath', {
					method:'POST'
				});
				const actions = getActions()
				actions.loadSomeData()
			},

			createContact: async (contact) =>{
				const res = await fetch('https://playground.4geeks.com/contact/agendas/kath/contacts', {
					method:'POST',
					body: JSON.stringify(contact),
					headers: {'content-type': 'application/json'}
				});
				// TODO: check if 200
				const actions = getActions();
				await actions.loadSomeData();
			},
			getContact:  (contactId) =>{
				const store = getStore();
				const found =  store.contacts.find(contact=> contact.id == contactId );
				return found;
			},
			updateContact: async (contact) => {
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/kath/contacts/${contact.id}`, {
					method:'PUT',
					body: JSON.stringify(contact),
					headers: {'content-type': 'application/json'}
				});
				// TODO: check if 200

				const actions = getActions();
				await actions.loadSomeData();
			},
			deleteContact: async (contactId)=>{
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/kath/contacts/${contactId}`, {
					method:'DELETE',
					headers: {'content-type': 'application/json'}
				});
				// TODO: check if 200

				const actions = getActions();
				await actions.loadSomeData();
			},
			setIdToDelete: (contactId)=>{
				const store = getStore();
				setStore({...store, contactIdToDelete: contactId})
			}
			
		}
	};
};

export default getState;

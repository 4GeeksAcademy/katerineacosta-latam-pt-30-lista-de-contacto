const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			loadSomeData: () => {
				
					const res = fetch('https://playground.4geeks.com/contact/agendas/kath')
					.then()
					.then(async data =>{
						const contacts = (await data.json()).contacts;
						const store = getStore();
						setStore({ ...store, contacts:contacts })
					})
					.catch(()=>{
						// TODO: check if 200
					})

				
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
			deleteContact: async (contact)=>{
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/kath/contacts/${contact.id}`, {
					method:'DELETE',
					headers: {'content-type': 'application/json'}
				});
				// TODO: check if 200

				const actions = getActions();
				await actions.loadSomeData();
			}
			
		}
	};
};

export default getState;

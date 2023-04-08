export const initialState = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || []
};

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            const newContacts = [...state.contacts, action.payload];
            localStorage.setItem('contacts', JSON.stringify(newContacts));
            return { ...state, contacts: newContacts };
        case 'DELETE_CONTACT':
            const filteredContacts = state.contacts.filter(
                (contact) => contact.email !== action.payload.email
            );
            localStorage.setItem('contacts', JSON.stringify(filteredContacts));
            return { ...state, contacts: filteredContacts };
        default:
            return state;
    }
};

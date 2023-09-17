export const selectContacts = state => state.contacts.items;


export const selectFilteredContacts = state => {
    const {filter, contacts} = state;
    console.log(contacts);

    if(!filter) {
        return contacts.items;
    }

    const filteredContacts = contacts.items.filter(
        ({name}) => 
        name.toLowerCase().includes(filter.toLowerCase())
        );

        return filteredContacts;
};

export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.isLoading;
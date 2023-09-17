export const selectContacts = state => state.contacts.items;


export const selectFilteredContacts = state => {
    const {filter, contacts} = state;
    // console.log(contacts.items);
    console.log(filter);

    if(!filter) {
        return contacts.items;
    }

    const filteredContacts = contacts.items.filter(
        ({name}) => 
        name.toLowerCase().icludes(filter.toLowerCase())
        );
        console.log('zzz',filteredContacts);
        return filteredContacts;
};

export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.isLoading;
export const selectContacts = state => state.contacts.items;


export const selectFilteredContacts = state => {
    const {filter, items} = state.contacts;
   console.log(filter, items)

    if(!filter) {
        return items;
    }

    const filteredContacts = items.filter(
        ({name}) => name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log('zzz',filteredContacts);
     return filteredContacts;
};

export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.isLoading;
export const getContacts = state => state.contacts.items;


// export const getFilteredContacts = state => {
//     const {filter, contacts} = state;
//     console.log(contacts);

//     if(!filter) {
//         return contacts.items;
//     }

//     const filteredContacts = contacts.items.filter(
//         ({name}) => 
//         name.toLowerCase().includes(filter.toLowerCase())
//         );

//         return filteredContacts;
// };

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.isLoading;
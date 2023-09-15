import {Container} from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import ContactList from '../components/ContactList/ContactList'
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';



const Phonebook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <h2>Phonebook</h2>
                <ContactForm />
                <SearchFilter />
                
                <ContactList />
        </Container>
    )
};

export default Phonebook;
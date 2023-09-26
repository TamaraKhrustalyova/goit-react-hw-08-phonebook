import {Container} from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import ContactList from '../components/ContactList/ContactList'
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

import { Heading } from '@chakra-ui/react'             

const Phonebook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <Heading as='h3' size='lg' color='lightsteelblue'>Phonebook</Heading>
            <ContactForm />
            <SearchFilter />
            <ContactList />
        </Container>
    )
};

export default Phonebook;
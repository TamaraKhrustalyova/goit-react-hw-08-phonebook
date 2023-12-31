import PropTypes from 'prop-types';
// import {Contact, Btn, Container} from './ContactList.styled';
import { Container } from 'components/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts} from 'redux/contacts/contactsSelectors';

const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
   

    const onContactDelete = contactId => {
        dispatch(deleteContact(contactId))
    };

    return (

       <Container>
            <h2>Contacts</h2>
        
            {contacts && contacts.map(({id, name, number}) => {
            return (
                <li key={id}>
                    {name}: {number}
                    <button 
                    type="button"
                    name="delete"
                    onClick={() => onContactDelete(id)}>Delete</button>
                </li> )
            })}
        </Container>
    )  
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })
      ),
      deleteContact: PropTypes.func,
    };

export default ContactList;
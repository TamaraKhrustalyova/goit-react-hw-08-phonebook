import PropTypes from 'prop-types';
// import {Input, SubTitle} from './SearchFilter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';

const SearchFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
//   console.log(filter)

    return (
    <>
      <tytle>Find contact by name</tytle>
      <input 
        type="text" 
        value={filter}
        onChange={e => {dispatch(filterContacts(e.currentTarget.value))}}/>
    </>
  )
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};

export default SearchFilter;
import PropTypes from 'prop-types';
// import {Input, SubTitle} from './SearchFilter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';

const styles = {
  div: {
    width: 320,
    marginTop: 45,
  },
  input: {
    marginTop: 5,
  }
};

const SearchFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  console.log(filter)

    return (
    <div style={styles.div}>
      <h2>Find contact by name</h2>
      <input style={styles.input}
        type="text" 
        value={filter}
        onChange={e => {dispatch(filterContacts(e.currentTarget.value))}}/>
    </div>
  )
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};

export default SearchFilter;
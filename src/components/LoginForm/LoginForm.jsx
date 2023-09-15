import { useDispatch } from 'react-redux';
import operations from 'redux/auth/Operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        operations.logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <>
        <h1>Please log in to use your phonebook</h1>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label style={styles.label}>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </>
     
    );
  };
  
import classes from './StartingPageContent.module.css';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  return (
    <section className={classes.starting}>
      {authCtx.isLoggedIn ? (
        <h1>Welcome on Board!</h1>
      ) : (
        <h1 style={{ whiteSpace: 'pre-line' }}>
          PLEASE LOGIN TO{'\n'} CONTINUE
        </h1>
      )}
    </section>
  );
};

export default StartingPageContent;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  container: any;
  label: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#000',
    color: '#fff',
  },
  label: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFD900',
    fontSize: '1.5rem',
    fontFamily: 'SegoeUI, sans-serif',
    marginTop: 60,
  },
}));

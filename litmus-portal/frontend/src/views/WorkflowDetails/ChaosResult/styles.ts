import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  modalRoot: {
    padding: theme.spacing(5),
  },
  logs: {
    overflowY: 'scroll',
    [theme.breakpoints.up('lg')]: {
      height: '35rem',
    },
    height: '25rem',
    background: theme.palette.common.black,
    color: theme.palette.text.secondary,
    textAlign: 'left',
  },
  closeButton: {
    borderColor: theme.palette.border.main,
  },
  crossMark: {
    color: theme.palette.common.white,
  },
  text: {
    fontSize: '1rem',
    padding: theme.spacing(2.5),
  },
}));

export default useStyles;

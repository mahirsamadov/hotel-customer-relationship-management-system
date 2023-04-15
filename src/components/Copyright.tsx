import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color={props.color} align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/home">
        Luxor Inn and Suites, Inc
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

export default Copyright;
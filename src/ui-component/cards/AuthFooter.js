// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://github.com/musamolla3131" target="_blank" underline="hover">
            Musa Molla
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://musamolla.com" target="_blank" underline="hover">
            &copy; https://musamolla.com
        </Typography>
    </Stack>
);

export default AuthFooter;

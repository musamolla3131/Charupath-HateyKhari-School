// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
      

        
        */
        <img src={logo} alt="CHS_Logo" width="100" />
    );
};

export default Logo;

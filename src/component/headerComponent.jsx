import * as React from 'react';
import { AppBar} from '@mui/material';

import './componentCss/headerComponent.css'

const HeaderComponent = (props) => {
   return (
      <>
         <AppBar
            color='secondary'
            sx={[
               {
                  height: '60px',
                  justifyContent: 'center',
                  position: 'relative'
               }
            ]}
         >
            <p className='headerTop'>Tekst przykładowy</p>
         </AppBar>
        
      </>
     
   // <p className='barTop'>test banera</p>
   )
}

export default HeaderComponent
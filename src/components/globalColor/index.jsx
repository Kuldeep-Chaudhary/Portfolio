import React from 'react'
import { GBButton, GBColor } from '../../style/globalColor'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const GlobalColor = () => {
  return (
    <>
        <GBColor>
            <GBButton><SettingsOutlinedIcon/></GBButton>
        </GBColor>
    </>
  )
}

export default GlobalColor
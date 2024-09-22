import React from 'react'
import { HeaderWrapper } from './style'
import { Avatar, Icon, Stack, Text } from '@chakra-ui/react'
import { PiPlaceholder } from 'react-icons/pi'

const Header : React.FC = () => {
  return (
    <HeaderWrapper>
        <Stack direction="row" gap={2}>
            <Text>Cajazeiras, PB</Text>
        </Stack>
        <Stack>
            <Avatar style={{width: "30px", height: "30px"}}>U</Avatar>
        </Stack>
    </HeaderWrapper>
  )
}

export default Header
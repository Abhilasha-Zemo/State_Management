import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems='center'
            spacing={2}
            paddingX={2}
        >
            <Stack direction='row' alignItems='center' spacing={2}>
                <Typography>10 out of 84 pages</Typography>
                <Button variant='outlined'>10 per page</Button>
            </Stack>
            <Stack direction='row' alignItems='center'>
                <Button>{'<'}</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>{'>'}</Button>
            </Stack>
        </Stack>
    )
}

export default Footer
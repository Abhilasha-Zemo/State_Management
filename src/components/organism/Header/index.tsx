import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import SearchBar from '../../atoms/SearchBar'
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface HearderProps{
    setSearchKey : React.Dispatch<React.SetStateAction<string | null>>
}

const Header = ({ setSearchKey }: HearderProps) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems='center'
            paddingX={2}
        >
            <Typography fontWeight="bold">Candidate Information</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
                <SearchBar searchBarKey={setSearchKey} />
                <Button
                    size='small'
                    variant='outlined'
                    sx={{
                        paddingX: "30px",
                        paddingY:"7.5px",
                        color: "grey",
                        borderRadius: "100px",
                        border: "1px solid grey",
                    }}
                    startIcon={<FilterListIcon />}
                >
                    Filter
                </Button>
                <IconButton
                    sx={{
                        paddingY:"7px",
                        color: "grey",
                        borderRadius: "10px",
                        paddingX: "2"
                    }}
                ><MoreVertIcon />
                    </IconButton>
            </Stack>
        </Stack>
    );
};

export default Header;

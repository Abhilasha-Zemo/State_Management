import React ,{useState} from 'react'
import { Box, Stack } from "@mui/material";
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import CandidateInfomationTable from '../../components/organism/TableOrg';

const CandidateInfoPage = () => {
  const [searchKey, setSearchKey] = React.useState<string | null>(null)
  return (
      <Box padding={7}>
          <Stack spacing={3}>
              <Header setSearchKey={setSearchKey} />
        <CandidateInfomationTable searchKey={searchKey} />
        <Footer/>
          </Stack>
    </Box>
  )
}

export default CandidateInfoPage

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import ButtonChip from '../../atoms/Button';
import {
    CandidateInfo, CandidateInfomation,
    TABLEHEADADJUDICATION,
    TABLEHEADDATE,
    TABLEHEADLOCATION,
    TABLEHEADNAME,
    TABLEHEADSTATUS } from '../../../data';

interface CandidateInfomationTableProps{
    searchKey: string | null;
}

const CandidateInfomationTable = ({ searchKey }: CandidateInfomationTableProps) => {
    
    
    const [candidateInfoArray, setCandidateInfoArray] = React.useState<CandidateInfomation[]>(CandidateInfo)
    React.useEffect(() => {
        let filteredCandidateArray = candidateInfoArray.filter((candidate) => {
            if (candidate.name.toLowerCase().includes(searchKey?.toLowerCase() ?? "")) {
                return candidate;
            } else {
                return null;
            }
        });

        if (searchKey === '' || searchKey == null) {
            filteredCandidateArray = CandidateInfo;
        }
        setCandidateInfoArray(filteredCandidateArray);
    }, [searchKey, candidateInfoArray]);
  return (
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{backgroundColor:"lightgrey"}}>
                  <TableRow>
                      <TableCell><Typography>{TABLEHEADNAME }</Typography></TableCell>
                      <TableCell><Typography>{TABLEHEADADJUDICATION}</Typography></TableCell>
                      <TableCell><Typography>{TABLEHEADSTATUS}</Typography></TableCell>
                      <TableCell><Typography>{TABLEHEADLOCATION}</Typography></TableCell>
                      <TableCell><Typography>{TABLEHEADDATE}</Typography></TableCell>

                  </TableRow>
              </TableHead>
              <TableBody>
                  {candidateInfoArray.map((row) => (
                      <TableRow
                          key={row.id}                      >
                          <TableCell sx={{color:"blue"}}>{row.name}</TableCell>
                          <TableCell>
                              <ButtonChip
                                  text={row.adjudication}
                                  onClickHandler={
                                      () => {
                                          if (row.adjudication === '-') {
                                              row.adjudication = 'ENGAGE'
                                          }
                                          else if (row.adjudication === 'ENGAGE') {
                                              row.adjudication = 'ADVERSE ACTION'
                                          }
                                          else if (row.adjudication === 'ADVERSE ACTION') {
                                              row.adjudication='-'
                                          }
                                          setCandidateInfoArray([...candidateInfoArray]);
                                      }
                                  }
                              /></TableCell>
                          <TableCell>
                              <ButtonChip
                                  text={row.status}
                                  onClickHandler={
                                      () => {
                                          if (row.status === 'CLEAR') {
                                              row.status='CONSIDER'
                                          } else {
                                              row.status='CLEAR'
                                          }
                                          setCandidateInfoArray([...candidateInfoArray]);
                                      }
                                  }
                              />
                          </TableCell>
                          <TableCell>{row.location}</TableCell>
                          <TableCell>{row.date}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default CandidateInfomationTable

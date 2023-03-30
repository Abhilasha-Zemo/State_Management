export const TABLEHEADNAME = "NAME";
export const TABLEHEADADJUDICATION = "ADJUDICATION";
export const TABLEHEADSTATUS = "STATUS";
export const TABLEHEADLOCATION = "LOCATION";
export const TABLEHEADDATE = "DATE";

export type CandidateInfomation = {
    //five properties
    id: number;
    name: string;
    adjudication: "-" | "ENGAGE" | "ADVERSE ACTION";
    status: "CLEAR" | "CONSIDER"
    location: string;
    date: string;

};

export const CandidateInfo: CandidateInfomation[] = [
    {
        //array of objects
        id: 0,
        name: "John Smith",
        adjudication: "-",
        status: "CLEAR",
        location: "New York City",
        date: "01/10/1999",
    },
    {
        id: 1,
        name: "Serene",
        adjudication: "-",
        status: "CONSIDER",
        location: "Texas",
        date: "13/11/2010",
    },
    {
        id: 2,
        name: "Walsh",
        adjudication: "ENGAGE",
        status: "CLEAR",
        location: "California",
        date: "20/01/2011",
    },
    {
        id: 3,
        name: "Kendre",
        adjudication: "-",
        status: "CLEAR",
        location: "Los Angeles",
        date: "27/04/2015",
    },
    {
        id: 4,
        name: "Jereme",
        adjudication: "ENGAGE",
        status: "CONSIDER",
        location: "Washington DC",
        date: "30/10/2019",
    },
    {
        id: 5,
        name: "John Smith",
        adjudication: "-",
        status: "CLEAR",
        location: "New York City",
        date: "01/10/1999",
    },
    {
        id: 6,
        name: "Serene",
        adjudication: "-",
        status: "CONSIDER",
        location: "Texas",
        date: "13/11/2010",
    },
    {
        id: 7,
        name: "Walsh",
        adjudication: "ENGAGE",
        status: "CLEAR",
        location: "California",
        date: "20/01/2011",
    },
    {
        id: 8,
        name: "Kendre",
        adjudication: "-",
        status: "CLEAR",
        location: "Los Angeles",
        date: "27/04/2015",
    },
    {
        id: 9,
        name: "Jereme",
        adjudication: "ENGAGE",
        status: "CONSIDER",
        location: "Washington DC",
        date: "30/10/2019",
    },
];
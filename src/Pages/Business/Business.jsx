import './Business.css'
import { useState } from 'react';
import DataTable from '../../Components/DataTable/DataTable';


function Business() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'avatar', headerName: 'Avatar', width: 100,
            renderCell: (params) => {
                return <img src={params.row.img || 'images/noavatar.png'} alt='' />
            }
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'businessName',
            headerName: 'Business',
            width: 150,
        },

        {
            field: 'email',
            headerName: 'Email',
            width: 160,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            width: 120,
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            width: 120,
        },
        {
            field: 'status', headerName: 'Status', width: 90, type: "boolean"
        },


    ];
    const data = [
        {
            id: 1,
            lastName: 'Snow',
            firstName: 'Jon',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 35,
            img: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg',
            status: true,
            businessName: "Tassaract"
        },

        {
            id: 2,
            lastName: 'Lannister',
            firstName: 'Cersei',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 42,
            status: true,
            businessName: "Tassaract"
        },
        {
            id: 3,
            lastName: 'Lannister',
            firstName: 'Jaime',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 45,
            businessName: "Tassaract"
        },
        {
            id: 4,
            lastName: 'Stark',
            firstName: 'Arya',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 16,
            businessName: "Tassaract"
        },
        {
            id: 5,
            lastName: 'Targaryen',
            firstName: 'Daenerys',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: null,
            businessName: "Tassaract"
        },
        {
            id: 6,
            lastName: 'Melisandre',
            firstName: null,
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 50,
            businessName: "Tassaract"
        },
        {
            id: 7,
            lastName: 'Clifford',
            firstName: 'Ferrara',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 44,
            businessName: "Tassaract"
        },
        {
            id: 8,
            lastName: 'Frances',
            firstName: 'Rossini',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 36,
            businessName: "Tassaract"
        },
        {
            id: 9,
            lastName: 'Roxie',
            firstName: 'Harvey',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 65,
            businessName: "Tassaract"
        },
        {
            id: 10,
            lastName: 'John',
            firstName: 'Ovey',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 43,
            businessName: "Tassaract"
        },
        {
            id: 11,
            lastName: 'Rachel',
            firstName: 'Ladies',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            age: 51,
            businessName: "Tassaract"
        },
    ];



    return (
        <div id="business">
            <h1 className="businessHeading">
                Business
            </h1>

            <DataTable slug='business' columns={columns} rowData={data} />

        </div>
    )
}

export default Business;

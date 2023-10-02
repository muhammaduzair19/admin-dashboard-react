import Single from '../../Components/Single/Single';
import './SingleBusiness.css'

const SingleBusiness = () => {


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
        <div className='singleBusiness'>
        {/* <Single Data={data} /> */}
    </div>
    )
}

export default SingleBusiness
import Single from '../../Components/Single/Single'
import './SingleUser.css'

const SingleUser = () => {
    const data = [
        {
            id: 1,
            lastName: 'Snow',
            firstName: 'Jon',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            img: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg',
            status: true
        },

        {
            id: 2,
            lastName: 'Lannister',
            firstName: 'Cersei',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
            status: true
        },
        {
            id: 3,
            lastName: 'Lannister',
            firstName: 'Jaime',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 4,
            lastName: 'Stark',
            firstName: 'Arya',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 5,
            lastName: 'Targaryen',
            firstName: 'Daenerys',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 6,
            lastName: 'Melisandre',
            firstName: null,
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 7,
            lastName: 'Clifford',
            firstName: 'Ferrara',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 8,
            lastName: 'Frances',
            firstName: 'Rossini',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 9,
            lastName: 'Roxie',
            firstName: 'Harvey',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 10,
            lastName: 'John',
            firstName: 'Ovey',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
        {
            id: 11,
            lastName: 'Rachel',
            firstName: 'Ladies',
            email: 'user@gmail.com',
            createdAt: '25/09/2023',
            phoneNumber: 924762423,
        },
    ];

    return (
        <div className='singleUser'>
            <Single Data={data} />
        </div>
    )
}

export default SingleUser
import './TopUsers.css'

function TopUsers() {
    const topUsers = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
        {
            id: 7,
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            name: "Angelina",
            email: "angelina@mail.com",
            earning: "300"
        },
    ]


    return (
        <div className='TopUsers'>
            <h3 className='topuserHeading'> 
                Top Users
            </h3>
            <div className="userData">
                {
                    topUsers.map((user) => {
                        return (
                            <div className='listitem' key={user.id}>
                                <div className="userdata">
                                    <img src={user.img} alt=""  className='userimg'/>
                                    <div className="usertexts">
                                        <span className="name">{user.name}</span>
                                        <span className="email">{user.email}</span>
                                    </div>
                                </div>
                                <div className="earning">${user.earning}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TopUsers
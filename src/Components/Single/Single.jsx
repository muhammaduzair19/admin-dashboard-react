import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Single.css'
import { useParams } from 'react-router-dom';

const Single = ({ Data }) => {

    const params = useParams()
    console.log(params.id);

    const user = Data.filter((x) => x.id == params.id)
    console.log(user);




    const data = [
        {
            name: 'BONUS',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'CLICKS',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        }
    ];



    return (
        <div id='single'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img className='displayPicture' src={user[0].img ? user[0].img : '/images/noavatar.png'} alt="User Picture" />
                        <h1>{`${user[0].firstName} ${user[0].lastName}`}</h1>
                        <button className='update'>Update</button>
                    </div>
                    <div className="details">
                        <div className="item">
                            <span className="itemTitle" >Username:</span>
                            <span className="itemValue" id='username'>@{user[0].firstName + user[0].lastName}</span>
                        </div>
                        {
                            user[0].businessName && (
                                <div className="item">
                                    <span className="itemTitle" >Business Name:</span>
                                    <span className="itemValue" id='username'>{user[0].businessName}</span>
                                </div>
                            )
                        }
                        <div className="item">
                            <span className="itemTitle">Email:</span>
                            <span className="itemValue">{user[0].email}</span>
                        </div>
                        <div className="item">
                            <span className="itemTitle">Phone Number:</span>
                            <span className="itemValue">{user[0].phoneNumber}</span>
                        </div>
                        <div className="item">
                            <span className="itemTitle">Status:</span>
                            <span className="itemValue">{user[0].status == true ? 'Verified' : 'Not Verified'}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="otherInfo">
                    <div className="packages">
                        <h3>
                            Packages
                        </h3>
                        <div className="categoriesSubscribed">
                            <ul className='packageList'>
                                <li className='packageListItem'>Monthly Premium</li>
                            </ul>
                        </div>
                    </div>

                    <div className="categories">
                        <h3>
                            Categories
                        </h3>
                        <div className="categoriesSubscribed">
                            <ul className='categoryList'>
                                <li className='categoryListItem'>Movies</li>
                                <li className='categoryListItem'>Garments</li>
                                <li className='categoryListItem'>Electronics</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="activities">
                <h2 className='activitiesHeading'>Payment History</h2>
                <ul className='activityUl'>
                    <li className='activityList'>
                        <div className='listContainer'>
                            <p className='activityDesc'>$100</p>
                            <time className='activityTime'>3 days ago</time>
                        </div>
                    </li>
                    <li className='activityList'>
                        <div className='listContainer'>
                            <p className='activityDesc'>$100</p>
                            <time className='activityTime'>3 days ago</time>
                        </div>
                    </li>
                    <li className='activityList'>
                        <div className='listContainer'>
                            <p className='activityDesc'>$100</p>
                            <time className='activityTime'>3 days ago</time>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Single
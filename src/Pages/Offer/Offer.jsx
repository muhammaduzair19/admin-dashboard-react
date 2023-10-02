import { useState } from 'react';
import './Offer.css'

function Offer() {

    const [seeOfferDetails, setSeeOfferDetails] = useState(false)
    const [addOfferSection, setaddOfferSection] = useState(false)
    const [editDetails, setEditDetails] = useState(false)


    const [addOfferData, setAddOfferData] = useState({
        platform: "",
        tagline: '',
        price: '',
        duration: '',
        launchedDate: '',
        endDate: ''

    })
    const [offerData, setOfferData] = useState(
        [
            {
                id: 1,
                platform: "Instagram",
                tagline: 'Post on instagram',
                price: 8,
                duration: '2 weeks',
                launchedDate: '09/02/2023',
                endDate: '09/29/2023'
            },
            {
                id: 2,
                platform: "Facebook",
                tagline: 'Story by bot on Facebook pages',
                price: 10,
                duration: '1 week',
                launchedDate: '10/01/2023',
                endDate: '10/20/2023'
            },
            {
                id: 3,
                platform: "X",
                tagline: 'Bot tweets',
                price: 5,
                duration: '5 weeks',
                launchedDate: '09/12/2023',
                endDate: '12/31/2023'
            },
            {
                id: 4,
                platform: "Instagram",
                tagline: 'Story on instagram through Whatsapp',
                price: 15,
                duration: '2 weeks',
                launchedDate: '06/05/2023',
                endDate: '12/31/2023'
            },
            {
                id: 5,
                platform: "Whatsapp",
                tagline: 'Post on whatsapp channels',
                price: 12,
                duration: '4 weeks',
                launchedDate: '08/14/2023',
                endDate: '11/14/2023'
            },
        ]
    )



    const [details, setDetails] = useState({})

    const [editOffer, setEditOffer] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
        // setEditOffer({ ...details, [name]: value })
    }


    const handleSubmit = () => {
        setSeeOfferDetails(false)
        setEditDetails(false)
        setSeeOfferDetails(false)

        const index = offerData.findIndex((item) => item.id == details.id);
        let temp = [...offerData]
        offerData[index] = details
        // // let abc=temp.splice(index, 1, editOffer)
        // console.log(offerData);
        // // setOfferData(abc)

    }

    const addOfferHandle = (e) => {
        const { name, value } = e.target
        setAddOfferData({ ...addOfferData, [name]: value })
    }
    const handleOfferSubmit = () => {
        setaddOfferSection(false)
        addOfferData['id'] = Date.now()
        let temp = [...offerData]
        temp.unshift(addOfferData)
        setOfferData(temp)


    }



    return (
        <div id='offer'>
            <div className="offerContainer">
                <div className="offerTop">
                    <h1 className="offerHeading">
                        Offers
                    </h1>
                    <button className="addOffer"
                        onClick={() => {
                            setaddOfferSection(true)
                            setSeeOfferDetails(false)
                            setEditDetails(false)
                        }}
                    >
                        Add Offer
                    </button>
                </div>
                <ul className="offersList">
                    {
                        offerData.map((offer) => (

                            <li key={offer.id} className="offerItem">
                                <div className="offerItemDetails">
                                    <span className="offerText">
                                        {
                                            offer.tagline
                                        }
                                    </span>
                                    <span className="offerPrice">
                                        ${offer.price} per week
                                    </span>
                                </div>
                                <div className="offerButtons">
                                    <div className="offerEditButton">
                                        <button onClick={() => {
                                            setSeeOfferDetails(false)
                                            setEditDetails(true)
                                            setaddOfferSection(false)
                                            setDetails(offer)
                                        }} className="editDetailButton">
                                            Edit Details
                                        </button>
                                        <button onClick={() => {
                                            setSeeOfferDetails(true)
                                            setaddOfferSection(false)
                                            setEditDetails(false)
                                            setDetails(offer)
                                        }} className="seeDetailsButton">
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <>
                {
                    seeOfferDetails && (
                        <div className="offerDetails">
                            <h1 className="offerHeading">
                                Offer Details
                            </h1>
                            <div className="offerDetail">
                                <h2 className="offerTag">
                                    {details.platform}
                                </h2>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Price
                                    </span>
                                    <span className="offerValue">
                                        ${details.price} per week
                                    </span>
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Description
                                    </span>
                                    <span className="offerValue">
                                        {details.tagline}
                                    </span>
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Duration
                                    </span>
                                    <span className="offerValue">
                                        {details.duration}
                                    </span>
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Launched Date
                                    </span>
                                    <span className="offerValue">
                                        {details.launchedDate}
                                    </span>
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        End Date
                                    </span>
                                    <span className="offerValue">
                                        {details.endDate}
                                    </span>
                                </div>
                                <div className="detailsCloseBtn">
                                    <button onClick={
                                        () => {
                                            setSeeOfferDetails(false)
                                            setDetails({})
                                        }
                                    } className="close">
                                        Close
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </>
            <>
                {
                    editDetails && (
                        <div className="editOfferDetails">

                            <h1 className="offerHeading">
                                Edit Details
                            </h1>
                            <div className="offerDetail">

                                <input className='offerInput' name='platform' onChange={(e) => handleChange(e)} defaultValue={details.platform}  />

                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Price
                                    </span>
                                    <input className='offerInput' name='price' onChange={(e) => handleChange(e)} defaultValue={details.price} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Description
                                    </span>
                                    <input className='offerInput' name='tagline' onChange={(e) => handleChange(e)} defaultValue={details.tagline} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Duration
                                    </span>
                                    <input className='offerInput' name='duration' onChange={(e) => handleChange(e)} defaultValue={details.duration} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Launched Date
                                    </span>
                                    <input className='offerInput' name='launchedDate' onChange={(e) => handleChange(e)} defaultValue={details.launchedDate} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        End Date
                                    </span>
                                    <input className='offerInput' name='endDate' onChange={(e) => handleChange(e)} defaultValue={details.endDate} />
                                </div>
                                <div className="buttons">
                                    <button onClick={
                                        handleSubmit
                                    } className="save">
                                        Save
                                    </button>
                                    <button onClick={
                                        () => {
                                            setSeeOfferDetails(false)
                                            setEditDetails(false)
                                            setaddOfferSection(false)
                                        }
                                    } className="close">
                                        Close
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                }


            </>
            <>
                {
                    addOfferSection && (
                        <div className="editOfferDetails">

                            <h1 className="offerHeading">
                                Add Offer
                            </h1>
                            <div className="offerDetail">

                                <input className='offerInput' placeholder='Platform' name='platform' onChange={(e) => addOfferHandle(e)} />

                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Price
                                    </span>
                                    <input className='offerInput' name='price' onChange={(e) => addOfferHandle(e)} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Description
                                    </span>
                                    <input className='offerInput' name='tagline' onChange={(e) => addOfferHandle(e)} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Duration
                                    </span>
                                    <input className='offerInput' name='duration' onChange={(e) => addOfferHandle(e)} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        Launched Date
                                    </span>
                                    <input className='offerInput' name='launchedDate' onChange={(e) => addOfferHandle(e)} />
                                </div>
                                <div className="offerDetailItem">
                                    <span className="offerKey">
                                        End Date
                                    </span>
                                    <input className='offerInput' name='endDate' onChange={(e) => addOfferHandle(e)} />
                                </div>
                                <div className="buttons">
                                    <button onClick={
                                        handleOfferSubmit
                                    } className="add">
                                        Add
                                    </button>
                                    <button onClick={
                                        () => {
                                            setSeeOfferDetails(false)
                                            setEditDetails(false)
                                            setaddOfferSection(false)
                                        }
                                    } className="close">
                                        Close
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                }


            </>

        </div>
    )
}

export default Offer;
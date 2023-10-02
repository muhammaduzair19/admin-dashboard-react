import { useState } from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import './Botfunctionalities.css'

function Botfunctionalities() {
    const [open, setOpen] = useState(false)
    const [categoryData, setCategoryData] = useState(
        [
            {
                id: 1,
                category: "Category 1",
            },

            {
                id: 2,
                category: "Category 1",
            },
            {
                id: 3,
                category: "Category 1",
            },
            {
                id: 4,
                category: "Category 1",
            },
            {
                id: 5,
                category: "Category 1",
            },
            {
                id: 6,
                category: "Category 1",
            },
            {
                id: 7,
                category: "Category 1",
            },
            {
                id: 8,
                category: "Category 1",
            },
            {
                id: 9,
                category: "Category 1",
            },
            {
                id: 10,
                category: "Category 1",
            },
            {
                id: 11,
                category: "Category 1",
            }
        ]
    )
    const [addCategoryData, setAddCategoryData] = useState(
        {
            id: '',
            category: '',
        }
    )



    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            type: "Number"
        },
        {
            field: 'category',
            headerName: 'Category Name',
            width: 200,
            type: "String"
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
            editable: true,
            type: "boolean"
        },


    ];

    const addCategoryHandle = (e) => {
        const { name, value } = e.target
        setAddCategoryData({ [name]: value })
    }

    const submitHandle = (e) => {
        e.preventDefault();
        addCategoryData['id'] = Date.now()
        let temp = [...categoryData]
        temp.unshift(addCategoryData)
        setCategoryData(temp)
        setOpen(false)
    }



    return (
        <div id='botfunctionalities'>
            <h1 className='botHeading'>
                Bot Functionalities
            </h1>
            <div className="midContainer">
                <DataTable className="dataGridBot" columns={columns} rowData={categoryData} slug='' />
                <div className="addCategorySection">
                    <button style={{ display: open ? 'none' : 'block' }} onClick={() => setOpen(true)} className="addCategory">
                        Add
                    </button>
                    {
                        open && (
                            <div id='add'>
                                <div className="modal">
                                    <span onClick={
                                        () => setOpen(false)} className="closeModal">X</span>
                                    <h2>Add Category</h2>
                                    <form onSubmit={submitHandle} className='categoryForm' >
                                        <div className="item">
                                            <label className='addCatLabel'>Category</label>
                                            <input name='category' onChange={(e) => addCategoryHandle(e)} className='addCatInput' type='String' placeholder='Category Name' />
                                        </div>
                                        <button type='submit' className='add'>Add</button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>



        </div>
    )
}

export default Botfunctionalities;
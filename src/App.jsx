import DataTable from "react-data-table-component"
import { data } from "./assets/data"

import './App.css'
import { useState } from "react"

const columns = [
  {
    name: "Title",
    selector: row => row.title
  },
  {
    name: "Director",
    selector: row => row.director
  },
  {
    name: "Year",
    selector: row => row.year,
    sortable : true
  },
  {
    name: "Action",
    // eslint-disable-next-line no-unused-vars
    cell: (row) => (
    <div>
      <button className="readBtn Btn">Read</button>
      <button className="editBtn Btn">Edit</button>
      <button className="deleteBtn Btn">Delete</button>
    </div>)
  },
]

function App() {

  const [records, setRecords] = useState(data)

  const handleChange = (e) => {
    let query = e.target.value;
    const newrecords = data.filter(item => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setRecords(newrecords)

  }
  
  const customStyles = {
    headCells : {
      style : {
        backgroundColor: "black",
        color: "white",
        fontSize: "17px",
        fontWeight: "bolder",
      }
    }
  }

  return (
    <>
    
      <div>

        <div className="search">
          <h2>Movie List</h2>
          <input type="text" placeholder="Enter the Name"  onChange={handleChange}/>
        </div>
        <DataTable 
        columns={columns} 
        data={records}
        customStyles={customStyles}
        pagination
        />
      </div>
    </>
  )
}

export default App

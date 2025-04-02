import DataTable from "react-data-table-component"
import { data } from "./assets/data"



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
        <DataTable 
        columns={columns} 
        data={data}
        customStyles={customStyles}
        />
      </div>
    </>
  )
}

export default App

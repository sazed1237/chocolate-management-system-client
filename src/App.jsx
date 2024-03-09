import { useState } from 'react'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

function App() {

  const loadedChocolates = useLoaderData()

  const [chocolates, setChocolates] = useState(loadedChocolates)

  const handleDelete = id => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`https://chocolate-management-system-server-beta.vercel.app/chocolates/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = chocolates.filter(choco => choco._id !== id)
              setChocolates(remaining)
            }
          })
      }
    });

  }

  return (
    <>
      <div className='md:w-[920px] mx-auto m-6 rounded-md bg-[#eee9e9]'>
        <div className=' flex justify-center items-center '>
          <h3 className=' text-center text-3xl rounded-md  mt-10 px-4 py-2 font-semibold text-white bg-[#91572B]'>Chocolate Management System : {chocolates.length} </h3>
        </div>

        <button className='h-[40px] px-3 text-white mt-12 ml-3 rounded-md bg-[#70371f]'>
          <Link to={'/addChocolate'}>Add New Chocolate</Link>
        </button>

        <div>
          <table className="table table-xs mt-6">
            <thead>
              <tr className='bg-[#DC8D48] text-xl text-white'>
                <th>Image</th>
                <th>Name</th>
                <th>Country</th>
                <th>Category</th>
                <th className='text-center' >Action</th>
              </tr>
            </thead>


            <tbody>
              {
                chocolates.map(chocolate => <tr
                  key={chocolate._id} className='md:h-[50px] '>
                  <td><img src={chocolate.photo} alt="" /></td>
                  <td>{chocolate.name}</td>
                  <td>{chocolate.country}</td>
                  <td>{chocolate.category}</td>
                  <td className='text-center'>
                    <button onClick={() => handleDelete(chocolate._id)} className='h-[30px] w-[30px] bg-[#DC8D48] rounded-md mr-2'>X</button>
                    <Link to={`/updateChocolate/${chocolate._id}`}>
                      <button className='h-[30px] w-[30px] bg-[#DC8D48] rounded-md mr-2'>edit</button>
                    </Link>
                  </td>

                </tr>)
              }
            </tbody>
            {/* #DC8D48, #D38745, #91572B, #5E3116, #3F1A0A, #331105 */}

          </table>

        </div>

      </div>
    </>
  )
}

export default App

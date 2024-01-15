import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {

    const chocolate = useLoaderData();
    const { _id, name, category, country, photo } = chocolate

    const handleUpdateChocolate = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;

        const updateChocolate = { name, country, category }
        console.log(updateChocolate)

        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateChocolate)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Chocolate Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='md:w-[920px] mx-auto m-6 rounded-md bg-[#eee9e9]'>
            <div className=' flex justify-center items-center '>
                <h3 className=' text-center text-3xl rounded-md  mt-10 px-4 py-2 font-semibold text-white bg-[#b89848]'>Update Existing Chocolate</h3>
            </div>

            <button className='h-[40px] px-3 text-white mt-12 ml-3 rounded-md bg-[#70371f]'>
                <Link to={'/'}>Back to Home</Link>
            </button>

            <form onSubmit={handleUpdateChocolate}>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Name</label>
                    <label>
                        <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Country</label>
                    <label>
                        <input type="text" name='country' defaultValue={country} placeholder="Country" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Category</label>
                    <label>
                        <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Photo URL</label>
                    <label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-8 pb-8'>
                    <input type="submit" className='btn bg-[#b89848] text-white text-xl btn-block' value="Update Chocolate" />
                </div>
            </form>




        </div>
    );
};

export default UpdateChocolate;
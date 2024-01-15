import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddChocolate = () => {

    const handleSubmitChocolate = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newChocolate = { name, country, category, photo }
        console.log(newChocolate)

        fetch('http://localhost:5000/chocolates', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Chocolate Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='md:w-[920px] mx-auto m-6 rounded-md bg-[#eee9e9]'>
            <div className=' flex justify-center items-center '>
                <h3 className=' text-center text-3xl rounded-md  mt-10 px-4 py-2 font-semibold text-white bg-[#b89848]'>Adding New Chocolate</h3>
            </div>


            <button className='h-[40px] px-3 text-white mt-12 ml-3 rounded-md bg-[#70371f]'>
                <Link to={'/'}>Back to Home</Link>
            </button>

            <form onSubmit={handleSubmitChocolate}>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Name</label>
                    <label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Country</label>
                    <label>
                        <input type="text" name='country' placeholder="Country" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Category</label>
                    <label>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-3'>
                    <label className='flex ml-2 text-xl '>Photo URL</label>
                    <label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered  w-full input-sm " />
                    </label>
                </div>
                <div className='md:mx-24 mt-8 pb-8'>
                    <input type="submit" className='btn bg-[#b89848] text-white text-xl btn-block' value="Add Chocolate" />
                </div>
            </form>




        </div>
    );
};

export default AddChocolate;
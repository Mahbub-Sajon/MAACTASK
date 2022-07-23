import React from 'react';
import { useForm } from "react-hook-form";
const CreateRegion = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = () => {
        fetch('https://staging-api.erpxbd.com/api/v1/region')
            .then(res => res.json())
            .then(data => {
                if (data?.status === 'success') {
                    alert.success('Region added!!!')
                    reset()
                }
            })
    }
    return (
        <section>
            <div className="w-[475px] bg-base-100 shadow-xl rounded-xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="p-12">
                    <div>
                        <label className="label">
                            <span className="label-text">Add Region</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Type Region" className="outline-none border-[#CED4DA] border-2 rounded-xl p-3 w-full" />
                        {errors.name?.type === 'required' && <small className='block text-red-600'>Fill the box</small>}
                    </div>
                    <div className="flex justify-end">
                        <input type="submit" className="bg-neutral text-white mt-14 py-3 px-5 rounded-xl cursor-pointer" value="Add Region" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateRegion;
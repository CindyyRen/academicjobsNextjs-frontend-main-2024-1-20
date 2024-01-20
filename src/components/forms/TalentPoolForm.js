"use client"
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
const TalentPoolForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/sendemail', data)
    },
  })

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert()
    console.log('data', data)
     mutation.mutate(data)
   
  }

  if (mutation.isLoading) {
 
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
       
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">'Sending Email ...'</div>
          </div>
          
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>;
  }
  if (mutation.isSuccess) {
    return <div>Email Sent!</div>
  }


  return (

    
    <form className="mt-4 " onSubmit={handleSubmit(onSubmit)}>
       <h3 className="underline-full mb-6">Your Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First name */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={1}
              type="text"
              ID="first-name-input"
              field=" 01_First_Name"
              forceClass="px-4 py-3 text-black"
              placeholder="First Name"
              autoComplete="given-name"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Last name */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={2}
              type="text"
              ID="last-name-input"
              field=" 02_Last_Name"
              forceClass="w-full px-4 py-3  rounded-lg text-black"
              placeholder=" Last Name"
              autoComplete="family-name"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Academic Title */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={3}
              type="text"
              ID="name-input"
              field=" 03_Academic_Title"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Academic Title (Role or Position)"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* phone */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={4}
              type="tel"
              ID="phone-input"
              field=" 04_phone"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              autoComplete="tel"
              placeholder="Phone Number"
            // onChange={handleChange}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Email */}
        <div className="col-span-2">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={5}
              type="email"
              ID="email-input"
              field=" 05_Email"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Email"
              autoComplete="email"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
      </div>
      <h3 className="underline-full mt-10 mb-6">What are you interested in?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Seeking Opportunities */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 06_Collaborations_Checkbox")}
     
              className="checkbox checkbox-warning"
     
            />
      
            <span className="label-text ml-2 mr-auto">Collaborations</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 07_Keynote_Checkbox")}

              className="checkbox checkbox-warning"

            />
        
            <span className="label-text ml-2 mr-auto">Keynote Speaking</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 08_Media_Checkbox")}

              className="checkbox checkbox-warning"

            />
       
            <span className="label-text ml-2 mr-auto">Media Visibility</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 09_Career_Job_Opportunities_Checkbox")}

              className="checkbox checkbox-warning"

            />
      
            <span className="label-text ml-2 mr-auto">
              Career Progression (Open to Job Offers)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 10_Seek_IP_Investors_Checkboxx")}

              className="checkbox checkbox-warning"

            />
        
            <span className="label-text ml-2 mr-auto">Seek IP Investors</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(" 11_Partner_with_Industry_Checkbox")}

              className="checkbox checkbox-warning"

            />
         
            <span className="label-text ml-2 mr-auto">
              Partner with Industry
            </span>
          </label>
        </div>
      </div>
      {/* Academic Details Section */}
      <h3 className="underline-full mt-10 mb-6">Academic Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institution */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={12}
              type="text"
              ID="institution-input"
              field=" 12_Institution"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Institution/University (Current, Last or Attended)"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Department/Faculty */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={13}
              type="text"
              ID="department-faculty-input"
              field=" 13_Department_Faculty"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Department/Faculty"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Specialty */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={14}
              type="text"
              ID="specialty-input"
              field=" 14_Specialty"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Specialty"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Location */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2 register={register} errors={errors} 
              tabIndex={15}
              type="text"
              ID="location-input"
              field=" 15_Institution_Location"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Institution Location"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <select
              tabIndex={16}
              {...register('16_Country')}
              id="country-select"
              field=" 16_Country"
              className="w-full px-4 py-3 0 rounded-lg text-black"
              // onChange={handleChange}
              required={true}
            >
              <option value="" disabled selected>
                Select a country...
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <i className="required">*</i>
          </div>
        </div>
        {/* Profile */}
        <div className="col-span-2">
          <div className="relative">
            <textarea
              tabIndex={17}
              id="profile-input"
              field=" 17_Profile"
              className="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
            // onChange={handleChange}
            />
            <i className="required">*</i>
            <label
              htmlFor="profile-input"
              className="absolute left-4 top-2 text-gray-600 transition-all"
            ></label>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative">
          <p>
            Any field with an asterisk (<span className="asterisk">*</span>) is
            a required field!
          </p>
        </div>
      </div>
        <div className="text-right mt-6">
          <button tabIndex={30} type="submit" className="btn btn-aj">
            Join Talent Pool
          </button>
        </div>
    
            </form>
 
  );
};
export default TalentPoolForm;

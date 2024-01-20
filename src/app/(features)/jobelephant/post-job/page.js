"use client"
import InputBlock from '@/components/forms/InputBlock';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jobElephantContacts } from '@/data/jobElephantContacts';
const TalentPoolForm = () => {
  let content
  const router = useRouter();
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
    mutation.mutate({ ...data, "00_formSource": "Message from: Job Elephant Post Form" })
  }
  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">'Sending Jobs ...'</div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>;
  }
  if (mutation.isSuccess) {
    router.push("https://buy.stripe.com/6oE3dSddS3Mc6Ry3ce");
  } else {
    content = (
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 justify-start">
          <h1 className="text-4xl font-bold mb-6">
            JobElephant Post Form
          </h1>
          <div className=" w-full  flex flex-col  items-start">
            <label className="label-text text-xs">Name (Job Elephant)</label>
            <select className="select select-sm select-bordered w-full font-normal bg-white"
              {...register("01_Name_Job_Elephant")}
              onChange={(e) => {
                setValue("02_Email", e.target.value)
              }}
            >
              {jobElephantContacts.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <InputBlock register={register} errors={errors}
            label="Email"
            type="text"
            field="02_Email"
            forceClass=" py-3 text-black"
            placeholder=""
          />
          <InputBlock register={register} errors={errors}
            label="Job Elephant Client (ie: Utah University)"
            type="text"
            field="03_JobElephantClient"
            forceClass=" py-3 text-black"
            placeholder=""
          />
          <InputBlock register={register} errors={errors}
            label="Job Link URL (ie: apptrkr.com/...)"
            type="text"
            field="04_Job_Link_URL"
            forceClass=" py-3 text-black"
            placeholder=""
          />
          <label className="font-semibold text-gray-400" htmlFor="notes">
            Notes
          </label>
          <textarea className="bg-white text-black text-sm" id="notes" placeholder="Type your message here."
            {...register("05_Notes")}
          />
          {/* <QuillEditor
            value={content}
            onChange={(value) => {
              setValue("job_description", value)
            }}
            className="w-full h-[70%] mt-10 bg-white"
          /> */}
          <button className="btn btn-accent mt-4">Submit & PayNow </button>
        </div>
      </form>
    )
  }
  return (
    <div className="max-w-md mx-auto my-10 flex flex-col gap-4 justify-start">
      {content}
    </div>
  );
};
export default TalentPoolForm;

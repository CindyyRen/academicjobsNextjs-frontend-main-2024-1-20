'use client';
import React from 'react';

interface Props {
   title: string; company_name: string; how_to_apply: string
}

const Button = ({ title, company_name, how_to_apply }: Props) => {
  // const { title, company_name, how_to_apply } = params;
  return (
    <button
      // target="_blank"
      className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full"
      data-toggle="modal"
      data-target="#apply-modal"
      data-title={title}
      rel=""
      onClick={() => {
        let subject = `Application for ${title} position at ${company_name} from AcademicJobs.com`;
        if (how_to_apply.includes('@')) {
          window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(
            subject
          )}`;
        } else {
          window.open(how_to_apply, '_blank');
          //window.location.href = how_to_apply;
        }
      }}
    >
      Apply Now
    </button>
  );
};

export default Button;

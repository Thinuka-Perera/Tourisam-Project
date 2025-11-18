import React from 'react'
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const WhyChooseCard = ({image,title}:Props) => {
  return (
    <div className="text-center">
      {/* Image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt={title}
        className="mx-auto"
      />
      
      {/*Content */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  )
}

export default WhyChooseCard

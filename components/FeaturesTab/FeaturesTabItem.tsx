import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-7 dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image 
            src="/images/service-based/Programmer-amico.svg" 
            alt={title} 
            fill 
            className="shadow-solid-l dark:brightness-[0.85] dark:contrast-[1.1]" 
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;

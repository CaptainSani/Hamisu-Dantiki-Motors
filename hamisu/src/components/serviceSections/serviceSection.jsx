import React from "react";
import warehouse from "../../assets/images/warehouse.jpeg";

export default function ServiceSection({
    title,
    description,
    imageSrc,
    imageAlt,
    bgColor,
    textColor = "text-gray-800",
    imageLeft,
  }) {
    return (
    <section className={`py-12 md:py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center ${imageLeft ? "" : "md:flex-row-reverse"}`}
        >
          {imageLeft ? (
            <>
              <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                <img src={imageSrc || warehouse} alt={imageAlt} className="object-cover" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold tracking-tight md:text-3xl mb-4 ${textColor}`}>{title}</h2>
                <p className={`${textColor}`}>{description}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className={`text-2xl font-bold tracking-tight md:text-3xl mb-4 ${textColor}`}>{title}</h2>
                <p className={`${textColor}`}>{description}</p>
              </div>
              <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                <img
                  src={imageSrc || defaultImage}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
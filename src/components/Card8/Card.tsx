import React from "react";
interface Props {
  Name: string;
  imageLink: string;
  description: string;
  firstname?: string;
  lastname?: string;
}
const Card: React.FC<Props> = ({
  Name,
  imageLink,
  description,
  firstname,
  lastname,
}) => {
  if (imageLink == " " || imageLink == null) {
    imageLink =
      "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg";
  }

  return (
    <div className="flex flex-col justify-center text-center lg:justify-start lg:text-left md:justify-start md:text-left  md:flex-row lg:flex-row  space-x-4 py-4 my-2 bg-gray-100 mx-10 hover:bg-gray-400 duration-200 hover:text-white font-serif ">
      <div>
        <img
          className=" flex justify-center mx-auto lg:justify-start lg:mx-5 h-20 w-20 rounded-full lg:mt-6 md:mt-10"
          src={imageLink}
          onError={(reflink: any) => {
            reflink.target.src =
              "https://i.pinimg.com/originals/a4/50/c4/a450c42b4c22c87ac8882ae2312ba7d7.jpg";
          }}
        />
      </div>
      <div className="flex-col space-y-3">
        <h2 className=" text-lg md:text-xl lg:text-2xl font-semibold">
          {Name}
        </h2>
        <p>{description}</p>
        <div>
          <h2 className=" text-lg "> creator </h2>
          <p>
            {firstname} {lastname}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {};

export default Card;
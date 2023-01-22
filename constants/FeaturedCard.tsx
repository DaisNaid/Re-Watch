import { ClassName } from "../utils/types/constantTypes";

const featuredCard:ClassName = {
    containerLight:'my-4 px-4 absolute left-[4rem]',
    containerDark:'my-4 px-4 absolute left-[4rem] mt-16',
    imageLight:'border-2 border-lightanime rounded-[0.95rem]',
    imageDark:'border-2 border-dark_inner rounded-[0.95rem]',
    previewLight:'flex flex-row gap-1 absolute top-[82%] left-6 bg-white text-black rounded-md cursor-pointer opacity-80',
    previewDark:'flex flex-row gap-1 absolute top-[78%] left-6 bg-white text-black rounded-md cursor-pointer opacity-80',
    myListLight:'flex flex-row gap-1 absolute top-[82%] right-6 bg-light_inner rounded-md cursor-pointer opacity-80',
    myListDark:'flex flex-row gap-1 absolute top-[78%] right-6 bg-dark_inner rounded-md cursor-pointer opacity-80'
};

export default featuredCard;

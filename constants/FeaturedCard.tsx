import { ClassName } from "../utils/types/constantTypes";

const featuredCard:ClassName = {
    containerLight:'my-4 px-8 relative max-w-full max-h-full',
    containerDark:'px-8 mt-16 relative max-w-full max-h-full opacity-20',
    imageLight:'border-2 border-lightanime rounded-[0.95rem]',
    imageDark:'border-2 border-dark_inner rounded-[0.95rem] object-cover',
    previewLight:'px-5 flex flex-row gap-3 absolute top-[85%] left-12 bg-white text-black rounded-md cursor-pointer items-center',
    previewDark:'px-5 flex flex-row gap-3 absolute top-[85%] left-12 bg-white text-black rounded-md cursor-pointer items-center',
    myListLight:'px-5 flex flex-row gap-3 absolute top-[85%] right-12 bg-light_inner rounded-md cursor-pointer items-center',
    myListDark:'px-5 flex flex-row gap-3 absolute top-[85%] right-12 bg-dark_inner rounded-md cursor-pointer items-center'
};

export default featuredCard;

import { ClassName } from "../utils/types/constantTypes";

const featuredCard:ClassName = {
    containerLight:'my-4 px-8 relative max-w-full max-h-full',
    containerDark:'px-8 mt-16 relative max-w-full max-h-full',
    imageLight:'border-2 border-lightanime rounded-[0.95rem]',
    imageDark:'border-[0.5px] border-[#e5484d] rounded-[0.95rem]',
    previewLight:'px-5 flex flex-row gap-3 absolute bottom-[8vw] left-4 bg-white text-black rounded-md cursor-pointer items-center',
    previewDark:'px-5 flex flex-row gap-3 absolute bottom-[8vw] left-4 bg-white text-black rounded-md cursor-pointer items-center',
    myListLight:'px-5 flex flex-row gap-3 absolute bottom-[8vw] right-4 bg-light_inner rounded-md cursor-pointer items-center',
    myListDark:'px-5 flex flex-row gap-3 absolute bottom-[8vw] right-4 bg-dark_inner rounded-md cursor-pointer items-center'
};

// Remove relative from FeatureCard component && Replace bottom 'with top-[85%] right-12'

export default featuredCard;

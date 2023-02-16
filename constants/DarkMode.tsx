import { ClassName } from "../utils/types/constantTypes";

const dark:ClassName = {
    main_bg: 'bg-gradient-to-b from-black to-transparent',
    header: 'overflow-hidden sticky top-0 backdrop-blur-md z-[1]',
    headerInMotion: 'overflow-hidden backdrop-blur-md z-[1]',
    title: 'text-center font-bold text-3xl text-zinc shadow-md py-4',
    mode: 'absolute top-5 right-5 text-lg opacity-75',
    slogan: 'text-center text-zinc pt-1 animate-glow_text',
    sloganInMotion: 'text-center text-red-500 py-6 sticky top-0 bg-black',
    contentBg: 'dominantColorBG_dark min-h-screen mt-8',
    stars: 'absolute top-0 left-0 object-cover h-full',
};

export default dark;

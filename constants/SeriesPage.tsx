import icons from "../utils/icons";
import { ClassName } from "../utils/types/constantTypes";

const seriesPage:ClassName = {
    content: 'mx-4',
    contentFull: 'ml-4',
    bgImage: 'w-full shadow-2xl',
    image: `max-w-[40vw] relative top-[-4rem]
        rounded-md shadow-sm shadow-red-500 mix-blend-normal backdrop-blur-sm`,
    circle: 'bg-transparent h-6 w-6 rounded-circle border-2 border-marvelLight',
    notCircle: 'bg-transparent h-6 w-6 rounded-circle border-2 border-marvelBg',
};

const seriesPageStyles = {
    completedSeason: <span className='text-2xl text-marvelLight'>{icons.completed}</span>,
    incompleteSeason: <span className={seriesPage.circle}></span>,
    newSeason: <span className={seriesPage.notCircle}></span>
}

export {
    seriesPage,
    seriesPageStyles
};

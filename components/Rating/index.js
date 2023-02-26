import { useEffect, useState } from "react";
import useRange from "../../hooks/useRange";
import icons from "../../utils/icons";

export default function Rating () {
    const [onEdit, setOnEdit] = useState(false);
    const [rating, setRating] = useState('Unrated');
    const ratings = useRange(1, 10);

    const handleSelect = ({ target }) => {
        setRating(target.value);
        setOnEdit(false);
    }
    
    return <div className='bg-transparent fixed top-10 right-0 px-2 mt-4'>
        <div className='grid grid-flow-col gap-4 my-2'>
            <span>{icons.people}</span>
            <span className='text-gold'>8.5</span>
            <span />
        </div>
        <div className='grid grid-flow-col gap-4 mb-2'>
            <span>{icons.user}</span>
            {onEdit ? 
                <select id='rating' onChange={(e) => handleSelect(e)}>
                {
                    ratings.map((rating) => (
                        <option key={rating} value={rating} className='bg-yellow-500'>{rating}</option>
                    ))
                }
                </select>
            : <span className={rating === 'Unrated' ? 'text-zinc' : 'text-gold'}>{rating}</span>
            }
            <span id='edit' className='text-zinc' onClick={() => setOnEdit(!onEdit)}>{icons.edit}</span>
        </div>
    </div>
}
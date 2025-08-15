import type { Review } from '../../lib/types';
import { Star } from 'lucide-react';

export default function ReviewSlide({ review }: { review: Review }) {
    const renderStars = () => {
        const stars = [];
        const totalStars = 5;
        const filledStars = review.rating;

        for (let i = 0; i < totalStars; i++) {
            let starColor = 'text-red-500';
            let fillColor = '#ef4444';
            if (i >= filledStars) {
                starColor = 'text-gray-300';
                fillColor = '#e5e7eb';
            }
            stars.push(
                <span key={i} aria-hidden='true'>
                    <Star fill={fillColor} className={`h-5 w-5 ${starColor}`} />
                </span>
            );
        }
        return stars;
    };
    return (
        <div className='mx-auto h-64 max-w-md flex flex-col justify-center p-6 bg-slate-50 rounded-xl shadow-lg text-center'>
            <p className='font-bold text-xl'>{review.author}</p>
            <p className='font-semibold'>{review.title}</p>
            <p className='text-sm'>"{review.comment}"</p>
            <div className='flex justify-center mt-2'>{renderStars()}</div>
        </div>
    );
}
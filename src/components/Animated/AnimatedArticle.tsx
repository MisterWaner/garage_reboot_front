import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedArticleProps {
    children: React.ReactNode;
}

const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
        },
    },
};

export default function AnimatedArticle({ children }: AnimatedArticleProps) {
    const control = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
    }, [inView]);

    return (
        <motion.article
            ref={ref}
            initial='hidden'
            animate={control}
            variants={sectionVariant}
            className='my-8'
        >
            {children}
        </motion.article>
    );
}

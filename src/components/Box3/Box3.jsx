import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Box3() {
	const [isAnimating, setIsAnimating] = useState(false);
	const boxVariant = {
		hidden: {
			x: -600,
		},
		visible: {
			x: 0,
			transition: {
				delay: 0.5,
				when: 'beforeChildren',
			},
		},
	};
	const listVariant = {
		hidden: {
			x: -10,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			staggerChildren: 0.2,
		},
	};
	return (
		<div className="box-container" onClick={() => setIsAnimating(!isAnimating)}>
			<motion.div
				className="box"
				variants={boxVariant}
				animate={isAnimating ? 'visible' : 'hidden'}
				initial="visible"
			>
				{[1, 2, 3].map((box) => {
					return (
						<motion.li
							key={box}
							variants={listVariant}
							className="boxItem"
						></motion.li>
					);
				})}
			</motion.div>
		</div>
	);
}

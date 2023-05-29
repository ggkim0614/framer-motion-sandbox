import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Box1() {
	const [isAnimating, setIsAnimating] = useState(false);
	return (
		<div className="box-container">
			<motion.div
				className="box"
				animate={{
					x: isAnimating ? 600 : 0,
					opacity: isAnimating ? 1 : 0.5,
					rotate: isAnimating ? 360 : 0,
				}}
				initial={{
					opacity: 0.5,
				}}
				transition={{
					type: 'spring',
					stiffness: 80,
				}}
				onClick={() => setIsAnimating(!isAnimating)}
			></motion.div>
		</div>
	);
}

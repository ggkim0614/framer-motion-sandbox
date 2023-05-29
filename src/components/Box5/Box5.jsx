import { motion, useAnimation } from 'framer-motion';

export default function Box5() {
	const control = useAnimation();
	return (
		<div className="box-container">
			<button
				onClick={() => {
					control.start({
						x: 250,
					});
				}}
			>
				Move Right
			</button>
			<button
				onClick={() => {
					control.start({
						x: 0,
					});
				}}
			>
				Move Left
			</button>
			<button
				onClick={() => {
					control.start({
						borderRadius: '50%',
					});
				}}
			>
				Circle
			</button>
			<button
				onClick={() => {
					control.start({
						borderRadius: '0%',
					});
				}}
			>
				Square
			</button>
			<motion.div className="box" animate={control}></motion.div>
		</div>
	);
}

import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const steps = data;
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const ClickBackButton = () => {
		setActiveIndex(activeIndex - 1);
	};
	const ClickForwardButton = () => {
		setActiveIndex(activeIndex + 1);
	};
	const ClickStartOverButton = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const inFirstStep = activeIndex === 0;
	const inLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={index}
								className={`${styles['steps-item']} ${index < activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>

					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={ClickBackButton} disabled={inFirstStep}>
							Назад
						</button>
						{!inLastStep ? (
							<button className={styles.button} onClick={ClickForwardButton}>
								Далее
							</button>
						) : (
							<button className={styles.button} onClick={ClickStartOverButton}>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

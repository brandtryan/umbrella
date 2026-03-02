const BASE_WPM = 238;

const COEFF_MEDIUM_DIGITAL = 0.85;

export const COEFF_COMPLEXITY = {
	EASY: 1.1, // Grade 4-6
	STANDARD: 1.0, // Grade 7-9
	HARD: 0.9, // Grade 10-12
};

export interface ReadingState {
	wpm: number;
	wordsPerSecond: number;
}

/******************************************
 * Calculates the Tier 2 Adjusted WPM
 *****************************************/
export function calculateReadingSpeed(
	complexity = COEFF_COMPLEXITY.STANDARD,
	readerSkill = 1.0,
	purpose = 1.0
): ReadingState {
	const adjustedWPM =
		BASE_WPM * complexity * purpose * COEFF_MEDIUM_DIGITAL * readerSkill;

	return {
		wpm: adjustedWPM,
		wordsPerSecond: adjustedWPM / 60,
	};
}

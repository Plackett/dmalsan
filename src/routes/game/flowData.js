export const scenarios = [
	{
		level: 'No Automation',
		animation: './scenario1.png', // Animation key
		decisions: ['Slam on the brakes', 'Swerve into the other lane'],
		reflections: [
			'You slammed on the brakes to avoid hitting the cat, this is the more ethically correct answer due to it minimizing risk for others who are not involved and it avoids needlessly endangering others.',
			'You chose to swerve into the other lane to avoid hitting the cat, this is the less ethically correct answer because it puts others at risk and does not avoid harming others.'
		]
	},
	{
		level: 'Driver Assistance',
		animation: './scenario2.png',
		decisions: ['Let the car stop itself', 'Manually override and stop yourself'],
		reflections: [
			'You trusted the car to stop itself, without knowing how reliable or effective it is. This is less ethical because you are not being accountable and failing to be situationally aware.',
			'Manually overriding the car to slam on the brakes is the more ethical option because you are taking accountability, showing situational awareness, and ensuring the safety of the cat.'
		]
	},
	{
		level: 'Partial Automation',
		animation: './scenario3.png',
		decisions: ['Trust the car to stop', 'Override and stop manually'],
		reflections: [
			'You put your faith in the car systems to stop it before colliding with the cat, this is less ethical because the reliability of the car is not established and you have no reason to believe that it can sense the cat based on the information provided, making it a failure on your part if the car fails to stop in time.',
			"You stopped the car yourself, disregarding the car's supposed ability to handle situations like these on its own, this is more ethical because you can be confident in yourself to have done all you could and is more practical without any information on the car's reliability in situations like this."
		]
	},
	{
		level: 'Conditional Automation',
		animation: './scenario4.png',
		decisions: [
			"Deny the car's request for intervention",
			"Accept the car's request for intervention"
		],
		reflections: [
			"Denying the car's request for intervention is less ethical because the system's request implies that it has an issue processing the current situation and is unsure that it will take the best action.",
			"Accepting the car's request for intervention is more ethical because you fulfill your responsiblity to minimize harm and shows your responsibility and vigilance while driving."
		]
	},
	{
		level: 'High Automation',
		animation: './scenario5.png',
		decisions: ['Take control of the car', 'Trust the system entirely'],
		reflections: ['.', '.']
	},
	{
		level: 'Full Automation',
		animation: './scenario6.png',
		decisions: ['Trust the car to handle everything.', 'Monitor the system’s decisions.'],
		reflections: ['.', '.']
	}
];

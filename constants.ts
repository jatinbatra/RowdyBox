
import { Round, TaskType } from './types';

export const ROUND_DURATION = 30; // in seconds

export const WORKOUT_ROUNDS: Round[] = [
  { roundNumber: 1, taskType: TaskType.Punch, target: 20, taskText: "Warm Up: Jab!" },
  { roundNumber: 2, taskType: TaskType.Run, target: 25, taskText: "High Knees Sprint!" },
  { roundNumber: 3, taskType: TaskType.Lift, target: 10, taskText: "Power Squats!" },
  { roundNumber: 4, taskType: TaskType.Punch, target: 30, taskText: "Speed Punches!" },
  { roundNumber: 5, taskType: TaskType.Run, target: 35, taskText: "Full Out Sprint!" },
  { roundNumber: 6, taskType: TaskType.Lift, target: 15, taskText: "Heavy Deadlifts!" },
  { roundNumber: 7, taskType: TaskType.Punch, target: 40, taskText: "Uppercut Mania!" },
  { roundNumber: 8, taskType: TaskType.Run, target: 45, taskText: "Endurance Run!" },
  { roundNumber: 9, taskType: TaskType.Lift, target: 20, taskText: "Clean & Press!" },
  { roundNumber: 10, taskType: TaskType.Punch, target: 50, taskText: "FINISHER: Burnout Punches!" },
];

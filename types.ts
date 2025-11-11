
export enum GameState {
  NotStarted = 'NOT_STARTED',
  InProgress = 'IN_PROGRESS',
  Finished = 'FINISHED',
}

export enum TaskType {
  Punch = 'PUNCH',
  Lift = 'LIFT',
  Run = 'RUN',
}

export interface Round {
  roundNumber: number;
  taskType: TaskType;
  target: number;
  taskText: string;
}

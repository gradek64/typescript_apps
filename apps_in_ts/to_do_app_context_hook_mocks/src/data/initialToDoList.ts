export type ListInt = {
  todo: string;
  complete: boolean;
  id: string;
};

export const list: ListInt[] = [
  {
    todo: 'walk the dog',
    complete: false,
    id: 'task0',
  },

  {
    todo: 'wash dieshes',
    complete: true,
    id: 'task2',
  },
  {
    todo: 'take time off ',
    complete: false,
    id: 'task3',
  },
];

import { v4 } from 'uuid';

export default function createTask(text) {
  return {
    id: v4(),
    text,
    completed: false,
  };
}

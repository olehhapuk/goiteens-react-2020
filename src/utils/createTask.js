import { LoremIpsum } from 'lorem-ipsum';
import { v4 } from 'uuid';

const lorem = new LoremIpsum();

export default function createTask() {
  return {
    id: v4(),
    text: lorem.generateSentences(5),
    completed: false,
  };
}

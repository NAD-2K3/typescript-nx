import { getRandomAnimal } from '@typescript/animal';
import { formatMessage } from '@typescript/util';

export function zoo(): string {
  const result = getRandomAnimal();
  const message = `${result.name} says ${result.sound}!`;
  return formatMessage('zoo', message);
}
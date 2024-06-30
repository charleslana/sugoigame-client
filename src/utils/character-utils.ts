import images from '@/data/image';

export function getCharacterMini(id: number): string {
  switch (id) {
    case 1:
      return images.imageCharacter1Mini;
    default:
      return '';
  }
}

export function getCharacter(id: number | null): string {
  switch (id) {
    case 1:
      return images.imageCharacter1;
    default:
      return '';
  }
}

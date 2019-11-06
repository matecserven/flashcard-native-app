import { sample } from 'lodash';

export const randomCard = (current, data) => {
  let rolled = current;
  while (rolled === current) {
    rolled = sample(data);
  }
  return rolled;
};

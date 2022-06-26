import { IMAGE_TYPES, SHARK_LIST, CAT_LIST } from "../constants";

/**
 * Shuffles the first toTake items in a list
 * @param {Array} list
 * @param {number} toTake the number of items that will be taken from the list
 * @returns {Array} a shuffled list
 */
export const shuffleList = (list, toTake) => {
  const maxToShuffle = Math.min(list.length - 1, toTake);

  for (let i = 0; i < maxToShuffle; i++) {
    const swapIndex = i + Math.floor(Math.random() * (list.length - i));
    [list[i], list[swapIndex]] = [list[swapIndex], list[i]];
  }

  return list;
};

const getShuffledList = (list, endIndex = 3) => shuffleList(list, endIndex).slice(0, endIndex);

/**
 * Returns an closure for getting an image list based on imageType passed
 * @param {String} imageType
 * @returns {Function} a closure
 */
export const getImageList = (imageType) => ({
  [IMAGE_TYPES.CAT]: (endIndex) => getShuffledList(CAT_LIST, endIndex),
  [IMAGE_TYPES.SHARK]: (endIndex) => getShuffledList(SHARK_LIST, endIndex)
})[imageType];

/**
 * Delays execution for a period of time
 * @param {Number} time in ms
 * @returns {Promise} a promise
 */
export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

import { HTTP_ERRORS } from "../shared/constants";
import { getImageList, shuffleList, delay } from "../shared/helpers";

export const getImages = async (req, res, next) => {
  try {
    const imageList = [];
    const { types } = req.query;

    types.forEach(type => {
      imageList.push(...(getImageList(type))());
    });

    if (types.length > 1) {
      shuffleList(imageList, imageList.length);
    }

    // Delays response in order to render loading state in the frontend.
    await delay(1000);
    res.status(200).json(imageList);
  } catch (e) {
    const httpEr = HTTP_ERRORS.INTERNAL_SERVER_ERROR;
    httpEr.details = e.message;
    next(httpEr);
  }
};

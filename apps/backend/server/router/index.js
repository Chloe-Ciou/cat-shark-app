import { Router } from "express";

import { getImages } from "../middleware/mwServices";
import { validateImagesMetadataRequest } from "../middleware/mwValidators";

const router = Router();

router.get("/images", validateImagesMetadataRequest, getImages);

export default router;

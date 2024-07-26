import { Router } from 'express';
import { getAllArtists, createArtist, updateOneArtist, deleteOneArtist } from '../controllers/artist.controller.js';

const router = Router();

router.route("/artists")
    .get(getAllArtists)
    .post(createArtist);

router.route("/artists/:_id")
    .put(updateOneArtist)
    .delete(deleteOneArtist)
    // .get(getOneArtist);

export default router;
import Artist from "../models/artist.model.js";

// create new
async function createArtist(req, res) {
    try {
        const newArtist = await Artist.create(req.body);
        res.json(newArtist);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// get all
async function getAllArtists(req, res) {
    try {
        const allArtists = await Artist.find(); 
        res.json(allArtists);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}
// get single artist
// async function getOneArtist(req, res) {
//     try {
//         const foundArtist = await Artist.findById(req.params._id);
//         res.json(foundArtist);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// edit artist
async function updateOneArtist(req, res) {
    const options = {
        new: true, //Identifies whether or not we want to return the updated item. False would return the original item
        runValidators: true, 
    };
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params._id, req.body, options);
        res.json(updatedArtist);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


// delete artist
async function deleteOneArtist(req, res) {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params._id);
        res.json(deletedArtist);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export {
    createArtist,
    getAllArtists,
    updateOneArtist,
    deleteOneArtist
};
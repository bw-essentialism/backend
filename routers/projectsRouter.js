const express = require('express');
const router = express.Router();

// model
const Projects = require('../models/projectsModel');

// middleware
// tbd

// helpers
//const responseHandler = require('../../helpers/responseHandler');

// routes

// get all projects
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
      //  responseHandler(res, 500, "error getting all projects");
    });
});

// get project by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.findById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
      //  responseHandler(res, 500, "error getting project id");
    });
});

// add project
router.post('/', (req, res) => {
    const payload = req.body;
    
    Projects.add(payload)
    .then(project => {
        res.status(200).json(payload);
    })
    .catch(err => {
      //  responseHandler(res, 500, "error adding new project");
    });
});


// update project by id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    Projects.update(id, payload)
    .then(project => {
        res.status(200).json(payload);
    })
    .catch(err => {
      //  responseHandler(res, 500, "error updating project");
    });
});


// delete project
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.remove(id)
    .then(deletedProject => {
        json(200).json({ message: "project successfully deleted" });
    })
    .catch(err => {
     //   responseHandler(res, 500, "error deleting project");
    });
});

/* fallback
router.use('/', (req, res) => {
    responseHandler(res, 200, "hi from projectsRouter");
})
*/
// export
module.exports = router;
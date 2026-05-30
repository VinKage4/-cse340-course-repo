import { getAllProjects } from '../models/projects.js';

const showProjectsPage = async (req, res, next) => {
    try {
        const projects =
            await getAllProjects();

        res.render('projects', {
            title: 'Projects',
            projects,
            year: new Date().getFullYear()
        });
    } catch (error) {
        next(error);
    }
};

export { showProjectsPage };
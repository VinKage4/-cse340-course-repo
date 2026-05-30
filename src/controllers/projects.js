import {
    getUpcomingProjects,
    getProjectDetails
} from '../models/projects.js';

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const showProjectsPage = async (req, res, next) => {
    try {
        const projects =
            await getUpcomingProjects(
                NUMBER_OF_UPCOMING_PROJECTS
            );

        res.render('projects', {
            title: 'Upcoming Service Projects',
            projects,
            year: new Date().getFullYear()
        });
    } catch (error) {
        next(error);
    }
};

const showProjectDetailsPage = async (
    req,
    res,
    next
) => {
    try {
        const projectId =
            req.params.id;

        const project =
            await getProjectDetails(
                projectId
            );

        res.render('project', {
            title: 'Project Details',
            project,
            year: new Date().getFullYear()
        });
    } catch (error) {
        next(error);
    }
};

export {
    showProjectsPage,
    showProjectDetailsPage
};
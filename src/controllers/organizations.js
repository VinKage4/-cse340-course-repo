import {
    getAllOrganizations,
    getOrganizationDetails
} from '../models/organizations.js';

import {
    getProjectsByOrganizationId
} from '../models/projects.js';

const showOrganizationsPage = async (req, res) => {
    const organizations =
        await getAllOrganizations();

    const title =
        'Our Partner Organizations';

    res.render('organizations', {
        title,
        organizations,
        year: new Date().getFullYear()
    });
};

const showOrganizationDetailsPage = async (req, res) => {
    const organizationId =
        req.params.id;

    const organizationDetails =
        await getOrganizationDetails(organizationId);

    const projects =
        await getProjectsByOrganizationId(organizationId);

    res.render('organization', {
        title: 'Organization Details',
        organizationDetails,
        projects,
        year: new Date().getFullYear()
    });
};

export {
    showOrganizationsPage,
    showOrganizationDetailsPage
};
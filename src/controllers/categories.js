import { getAllCategories } from '../models/categories.js';

const showCategoriesPage = async (req, res) => {
    const categories =
        await getAllCategories();

    res.render('categories', {
        title: 'Service Project Categories',
        categories,
        year: new Date().getFullYear()
    });
};

export { showCategoriesPage };
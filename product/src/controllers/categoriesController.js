import categories from "../models/Category.js";

class categoriesController {

    static findAllCategories = (_req, res) => {
        categories.find((_err, categories) => res.status(200).json(categories))
    }

    static findCategoryById = (req, res) => {
        const { id } = req.params;
        categories.findById(id, (err, category) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(category);
            }
        })
    }

    static createCategory = (req, res) => {
        const ObjCategory = new categories(req.body);
        ObjCategory.save((err, category) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json(ObjCategory);
            }
        })
    }

    static updateCategory = (req, res) => {
        const { id } = req.params;
        categories.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (err, category) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Category -${category.id}- successfully updated!`});
            }
        })
    }

    static deleteCategory = (req, res) => {
        const { id } = req.params;
        categories.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: "Category successfully deleted." });
            }
        })
    }
}

export default categoriesController;

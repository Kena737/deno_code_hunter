const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    likes: { type: Number, required: true, default: 0 },
    content: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Blog', BlogSchema);

import Blog from '../../models/Blog';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { title, slug, image, description, author, likes, content } = req.body;
        const blog = new Blog({
            title,
            slug,
            image,
            description,
            author,
            likes,
            content
        });
        await blog.save();
        res.status(201).json({
            status: 'success',
            data: {
                blog
            }
        });


    } else {
        res.status(405).json({
            status: 'fail',
            message: 'Method Not Allowed'
        });
    }

}

export default connectDb(handler);

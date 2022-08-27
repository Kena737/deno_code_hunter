import Blog from '../../models/Blog';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res)=>{
    const blog = await Blog.find();
    res.status(200).json({
        status: 'success',
        data: {
            blog
        }
    });

}

export default connectDb(handler);
  
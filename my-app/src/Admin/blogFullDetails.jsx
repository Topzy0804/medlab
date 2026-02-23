import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getRow } from "../utils/db";
import BlogDetails from "./blogDetails";

const BlogFullDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const data = await getRow(
          import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
          id,
        );
        console.log("Fetched single blog data:", data);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching single blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSingleBlog();
  }, [id]);

  if (loading)
    return <div className="p-20 text-center">Loading blog content...</div>;
  if (!blog)
    return (
      <div className="p-20 text-center text-red-500">Blog post not found.</div>
    );

  return (
    <div className="max-w-5xl mx-auto p-10 text-left">
      <Link
        to="/admin/blogs"
        className="flex items-center gap-2 text-green-600 mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blogs
      </Link>

      <h1 className="md:text-4xl text-2xl font-bold mb-4 capitalize font-serif">{blog.title}</h1>

      <div className="flex gap-6 mb-8 text-gray-500 font-sans">
        <p className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {blog.date}
        </p>
        <p className="flex items-center gap-2">
          <User className="w-4 h-4" /> {blog.author}
        </p>
      </div>

      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full md:h-[400px] h-72 object-cover rounded-2xl mb-10"
      />

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans">
        {blog.description}
      </div>
    </div>
  );
};

export default BlogFullDetails;

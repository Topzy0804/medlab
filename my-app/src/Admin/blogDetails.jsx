import React from "react";
import { useState, useEffect } from "react";

import { Calendar, Clock } from "lucide-react";

import { getRows } from "../utils/db";

import { Link } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getRows(
          import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
        );
        const rows = Array.isArray(data)
          ? data
          : data?.rows || data?.documents || [];
        setBlog(rows);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!blog.length) return <div>No blogs found.</div>;

  return (
    <div className="grid grid-cols-4 gap-10 mx-10">
      {blog.map((blog, index) => (
        <Link key={blog.$id || index} to={`/admin/blog-details/${blog.$id}`}>
          <div className="shadow-sm border border-green-200 rounded-xl  relative group w-full h-full">
            <div className="">
              <img
                src={blog.imageUrl || blog.image || "/fallback.png"}
                alt={blog.title}
                className="w-full h-70 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col gap- p-6 text-left font-sans">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.timeToRead}</span>
              </p>
              <h3 className="text-2xl font-bold mt-2 ">{blog.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogDetails;

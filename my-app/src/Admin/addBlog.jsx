import React, { useState, useRef } from "react";
import { uploadFile } from "../utils/storage";
import { createRows } from "../utils/db";

const AddBlog = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const [blogDetails, setBlogDetails] = useState({
    title: "",
    date: "",
    timeToRead: "",
    tag: "",
    description: "",
    imageUrl: "",
    author: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBlogDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!image) {
        alert("Please select an image to upload.");
        return;
      }

      setLoading(true);

      const uploadedImage = await uploadFile(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        image,
      );
      console.log("Image uploaded successfully:", uploadedImage);

      const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
      const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
      const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;
      const fileId = uploadedImage.$id;

      const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;

      const blogToSave = { ...blogDetails, imageUrl };
      console.log("Prepared blog payload:", blogToSave);

      await createRows(
        import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
        blogToSave,
      );
      console.log("Blog saved successfully");

      setBlogDetails({
        title: "",
        date: "",
        timeToRead: "",
        tag: "",
        description: "",
        imageUrl: "",
        author: "",
      });
      setImage(null);
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("Failed to upload image or save blog. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:p-8 p-5 bg-green-50 min-h-screen">
      <h2 className="text-xl font-bold mb-6 border-b pb-4">Add Blog</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
      >
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 text-sm">
            Upload your blog image here, Please click "Upload Image" Button.
          </p>
          <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="h-full object-contain"
              />
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-green-600 text-white px-6 py-2 rounded-md"
              >
                Upload Image
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">
              Blog Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={blogDetails.title}
              onChange={handleOnChange}
              type="text"
              placeholder="Title :"
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              name="author"
              value={blogDetails.author}
              onChange={handleOnChange}
              type="text"
              placeholder="Author :"
              className="w-full border p-2 rounded mt-1"
            />
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium">Date :</label>
              <input
                name="date"
                value={blogDetails.date}
                onChange={handleOnChange}
                type="date"
                className="w-full border p-2 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Time to read :
              </label>
              <input
                name="timeToRead"
                value={blogDetails.timeToRead}
                onChange={handleOnChange}
                type="text"
                placeholder="5 min read"
                className="w-full border p-2 rounded mt-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Tag</label>
            <select
              name="tag"
              value={blogDetails.tag}
              onChange={handleOnChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option value="">Select tag</option>
              <option value="Eye Care">Eye Clinic</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">General Doctor</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label className="block text-sm font-medium">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={blogDetails.description}
            onChange={handleOnChange}
            placeholder="Blog description :"
            className="w-full border p-2 rounded mt-1 h-32"
          ></textarea>
        </div>

        <div className="col-span-full flex justify-end">
          <button
            disabled={loading}
            type="submit"
            className="bg-green-600 text-white px-8 py-2 rounded-md"
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;

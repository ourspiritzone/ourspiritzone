import React from "react";

const InstagramPreview = () => {
  const posts = [
    {
      id: 1,
      image: "/images/ig-post-1.jpg",
      link: "https://www.instagram.com/p/DCAyrfShnZb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 2,
      image: "/images/ig-post-2.jpg",
      link: "https://www.instagram.com/p/DIGjK11qVN-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      image: "/images/ig-post-3.jpg",
      link: "https://www.instagram.com/reel/DC04rMaBsLb/?utm_source=ig_web_copy_link",
    },
    {
      id: 4,
      image: "/images/ig-post-4.jpg",
      link: "https://www.instagram.com/reel/C9nYO8ht7pL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  return (
    <section className="bg-[#fdf8f3] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#2e2e2e]">
          Follow @the.spirit.zone
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-md shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={post.image}
                alt="Instagram preview"
                className="w-full h-40 object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramPreview;

import React from "react";

const InstagramPreview = () => {
  const posts = [
    {
      id: 1,
      image: "https://source.unsplash.com/featured/?nature,calm",
      link: "https://www.instagram.com/p/Csample1/",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/featured/?meditation",
      link: "https://www.instagram.com/p/Csample2/",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/featured/?zen,wellness",
      link: "https://www.instagram.com/p/Csample3/",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/featured/?healing,peace",
      link: "https://www.instagram.com/p/Csample4/",
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

import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./Project_Images/1_sales_volume_by_year-DGfGgZNr.webp";
import img2 from "./Project_Images/2_stacked_sales_by_year_and_region-BSPZNog_.webp";
import img3 from "./Project_Images/3_sales_by_year_and_fuel_type-DY5SqH1n.webp";
import img4 from "./Project_Images/4_sales_by_model_and_transmission-Cvp2-fEd.webp";

const galleryItems = [
  {
    src: img1,
    alt: "Sales Volume Trend (2010-2024)",
    title: (
      <>Sales Volume Trend (2010-2024)</>
    ),
    description: (
      <>
        <strong>Peak Performance in Recent Years:</strong> The sales volume reaches its highest point in the latter half of the period. The years 2022 and 2024 stand out as having the highest sales, with last year at over 17.5 million units.
      </>
    ),
  },

  {
    src: img2,
    alt: "Sales Volume by Year and Region",
    title: "Sales Volume by Year and Region",
    description: (
      <>
      <strong>Overall Sales Growth:</strong> The total height of the stacked bars shows a clear upward trend in sales volume across all regions from 2010 to 2024. This suggests a healthy overall growth trajectory for the company.
      <br />
      <br />
      <strong>Europe is the dominant market:</strong> Throughout the period, Europe consistently contributes the largest share of sales, represented by the deep blue color. This indicates its status as the primary market for BMW.
      </>
    ),
  },
  {
    src: img3,
    alt: "Sales by Year and Fuel Type",
    title: "Sales by Year and Fuel Type",
    description: (
      <>
      <strong>Dominance of Petrol and Diesel:</strong> Throughout the entire period, Petrol and Diesel vehicles consistently account for the vast majority of BMW's sales volume. This indicates that traditional internal combustion engines remain the primary drivers of the company's sales.
      <br />
      <br />
      <strong>Emergence of Hybrid and Electric Vehicles:</strong> The sales volume for Electric and Hybrid vehicles appears to be growing, especially in the later years. This suggests a slow but steady shift towards newer fuel technologies, likely influenced by market demand and environmental regulations.
      </>
    ),
  },
  {
    src: img4,
    alt: "Model and Transmission Type",
    title: "Model and Transmission Type",
    description: (
      <>
      <strong>Different Models Have Different Proportions:</strong> While automatic sales dominate, some models have a slightly more visible manual sales bar than others. This suggests that certain models might be more popular among a smaller segment of enthusiasts who prefer manual transmission, but the overall trend remains clear.
      </>
    ),
  },
];

const Project3Page = () => {
  const navigate = useNavigate();

  return (
    <>
          {/* Navbar with name and Back to Projects button */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D2226] text-white px-4 py-2 md:px-10 md:py-4 flex justify-between items-center navbar">
        <div className="text-2xl font-bold" >
          <a
              href="#home"
              className="hover:text-[#74B49B] transition"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('home');
                if (section) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - navbarHeight,
                    behavior: 'smooth'
                  });
                  setMenuOpen(false); // Close menu on mobile
                }
              }}
            >
              PRAJVAL J
            </a></div>
        <button
          className="inline-block px-4 py-2 bg-[#0D2226] text-white rounded hover:bg-[#1C3343] transition"
          onClick={() => {
            window.close();
          }}
        >
          ❮ Back to Projects
        </button>
      </nav>
      {/* Add top margin to avoid overlap with fixed navbar */}
      <section id="home" className="flex flex-col justify-start min-h-screen w-full px-2 md:px-4 py-4 md:py-8 bg-gray-50" style={{ marginTop: "80px" }}>
        <div className="w-full mb-8 md:mb-12 flex flex-col">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0D2226] text-center">
            Data Analysis of BMW Sales
          </h1>
          <br />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#0D2226] text-left">
            Executive Summary
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            This Python project focuses on a comprehensive analysis of a dataset containing BMW sales information from 2010 to 2024. The goal was to uncover key sales trends, understand the factors influencing car prices and sales volume, and present the findings through a series of clear, informative data visualizations.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            Data Source: Kaggle
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            <a href="https://github.com/iamPrajval/Python---BMW-Sales-Analysis/blob/main/BMW%20Sales%20Analysis.ipynb" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline cursor-pointer hover:text-blue-800">GitHub Link</a>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            <br />
          <strong>Skills & Tools:</strong>
          <br />
          <strong>•Data Manipulation:</strong> Python (Pandas)
          <br />
          <strong>•Data Visualization:</strong> Python (Matplotlib)
          <br />
          <strong>•Analysis Techniques:</strong> Data Grouping, Trend Visualization, and Distribution Analysis
          <br />
          </p>

        </div>
        {/* Gallery Section */}
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden"
            >
              {/* Image on the left, responsive and visible */}
              <div className="md:w-2/3 w-full flex items-center justify-center bg-white aspect-video min-h-[250px] md:min-h-[400px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[350px] md:max-h-[600px] object-contain"
                  style={{ background: "#fff" }}
                />
              </div>
              {/* Description on the right */}
              <div
                className="md:w-1/3 w-full p-4 flex flex-col justify-center items-start description-width"
                >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#1C3343] text-left">{item.title}</h3>
                <p className="text-base sm:text-lg text-[#0D2226] text-justify">{item.description}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project3Page;

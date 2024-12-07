// import React from 'react';
// import ProductCard from './component/product/ProductCard'; // Import the ProductCard component

// const App = () => {
//   const handleBuyNow = (productName) => {
//     alert(`${productName} added to the cart!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 mt-6 ">
//         <ProductCard
//           imageUrl="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
//           title="Product 1"
//           description="A short description of Product 1 that tells you more about its features."
//           price="$199.99"
//           onClick={() => handleBuyNow('Product 1')}
//         />
//         <ProductCard
//           imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
//           title="Product 2"
//           description="A short description of Product 2 that tells you more about its features."
//           price="$249.99"
//           onClick={() => handleBuyNow('Product 2')}
//         />
//         <ProductCard
//           imageUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
//           title="Product 3"
//           description="A short description of Product 3 that tells you more about its features."
//           price="$299.99"
//           onClick={() => handleBuyNow('Product 3')}
//         />

// <ProductCard
//           imageUrl="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
//           title="Product 4"
//           description="A short description of Product 1 that tells you more about its features."
//           price="$199.99"
//           onClick={() => handleBuyNow('Product 4')}
//         />
//         <ProductCard
//           imageUrl="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
//           title="Product 5"
//           description="A short description of Product 2 that tells you more about its features."
//           price="$249.99"
//           onClick={() => handleBuyNow('Product 5')}
//         />
//         <ProductCard
//           imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
//           title="Product 6"
//           description="A short description of Product 3 that tells you more about its features."
//           price="$299.99"
//           onClick={() => handleBuyNow('Product 6')}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import ProductCard from './component/product/ProductCard'; // Import the ProductCard component

const App = () => {
  const handleBuyNow = (productName) => {
    alert(`${productName} added to the cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      {/* Flex Container to center on mobile and grid layout for desktop */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ml-5 max-w-screen-xl">
          {/* Product Cards */}
          <ProductCard
            imageUrl="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            title="Product 1"
            description="A short description of Product 1 that tells you more about its features."
            price="$199.99"
            onClick={() => handleBuyNow('Product 1')}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            title="Product 2"
            description="A short description of Product 2 that tells you more about its features."
            price="$249.99"
            onClick={() => handleBuyNow('Product 2')}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            title="Product 3"
            description="A short description of Product 3 that tells you more about its features."
            price="$299.99"
            onClick={() => handleBuyNow('Product 3')}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            title="Product 4"
            description="A short description of Product 1 that tells you more about its features."
            price="$199.99"
            onClick={() => handleBuyNow('Product 4')}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            title="Product 5"
            description="A short description of Product 2 that tells you more about its features."
            price="$249.99"
            onClick={() => handleBuyNow('Product 5')}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            title="Product 6"
            description="A short description of Product 3 that tells you more about its features."
            price="$299.99"
            onClick={() => handleBuyNow('Product 6')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

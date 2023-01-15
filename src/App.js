const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
    },
  ];

  return (
    <div className="categories-container">
      {
        categories.map(({ id, title, imageUrl, linkUrl }) => (
          <div className="category-container" key={id}>
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Show Now</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;

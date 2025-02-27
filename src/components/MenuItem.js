import React from 'react';
// import menuImages from '../../public/images/gyoza.png'


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ object }) => {
    const images = require.context('../../public/images/') //code taken from here https://melodiessim.netlify.app/Import-images-dynamically-using-require.context/
    const img_node = images(`./${object.imageName}`);
    return (
        <div className="menuEntry">
            
            <img className="menu-img" src={img_node} />
            <div className="menu-content">
                <div className="menu-title">{object.title}</div>
                <div className="menu-desc">{object.description}</div>
                <div className="menu-buy">${object.price}<button className="menu-button">Add to cart</button></div>
            </div>
        </div>
    );
};

export default MenuItem;

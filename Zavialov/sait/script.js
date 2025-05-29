const productBox = document.querySelector('.product-box');

products.forEach(e => {
    const product = document.createElement('div');
    product.classList = 'product';
    productBox.appendChild(product);
    const productPhoto = document.createElement('img');
    productPhoto.classList = 'product__photo';
    productPhoto.setAttribute('src',  e.urlPhoto);
    productPhoto.setAttribute('alt',  'Photo');
    product.appendChild(productPhoto);

    const productText = document.createElement('div');
    productText.classList = 'product__text';
    product.appendChild(productText);

    const productName = document.createElement('h3');
    productName.classList = 'product__name';
    productName.textContent = e.name;
    productText.appendChild(productName);
    const descriptions = document.createElement('ul');
    descriptions.classList = 'product__descriptions';    
    productText.appendChild(descriptions);
    e.description.forEach(element => {
        const point = document.createElement('li');
        point.classList = 'product__descriptions__point';
        point.textContent = element;
        descriptions.appendChild(point);
    });

    const productPrice = document.createElement('p');
    productPrice.classList = 'product__price';
    productPrice.textContent = `Цена: ${e.price} руб.`;
    productText.appendChild(productPrice);
});
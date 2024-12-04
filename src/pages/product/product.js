

import { getPbImageURL } from "@/api/getPbImageURL";


async function renderProduct(){

  const response = await fetch('http://127.0.0.1:8090/api/collections/products/records');
  const data = await response.json();
  const tag = `
    <div class="container">
      <ul>
      ${
        data.items.map((item)=> `
          <li>
            <a href="/">
              <figure>
                <img src="${getPbImageURL(item)}" alt="" />
              </figure>
              <span class="brand">${item.brand}</span>
              <span class="description">${item.description}</span>
              <span class="price">${item.price.toLocaleString()}원</span>
              <div>
                <span class="discount">${item.discount}%</span>
                <span class="real-price">${(item.price - (item.price * item.discount * 0.01)).toLocaleString()}원</span>
              </div>
            </a>
          </li>
        ` ).join('')
      }
      </ul>
    </div>
  `
  document.body.insertAdjacentHTML('beforeend',tag);
}


renderProduct();

















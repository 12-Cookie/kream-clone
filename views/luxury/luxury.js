const ajax = new XMLHttpRequest()

ajax.open('GET', './popluar.json', false)
ajax.send()

const getPopluarData = JSON.parse(ajax.response)

const bestSellItemtListEl = document.querySelector('.best-sell-item .product-list')

for (let i = 0; i < getPopluarData.length; i++) {
    const div = document.createElement('div')
    div.classList.add('product-item')
    let template = `
        <div class="product-item">
            <a href="javascript:void(0)">
            <figure>
                <img type="image"src=${getPopluarData[i].url} alt="" loading="lazy" referrerpolicy="no-referrer">
                <i class="fa-regular fa-bookmark"></i>
                <figcaption>
                    <p class="brand">${getPopluarData[i].brand}</p>
                    <p class="name">${getPopluarData[i].name}</p>
                    ${getPopluarData[i].isFastShipping ? `
                    <div class="badge">
                        <img src="./images/ico_badge.png" alt="">
                        <span>빠른배송</span>
                    </div>   ` : ''}
                    <div class="price">
                        <p class="price-text">${getPopluarData[i].price}원</p>
                        <p class="price-description">즉시 구입가</p>
                    </div>
                </figcaption>
            </figure>
        </a>
        </div>
    `
    div.innerHTML = template   
    bestSellItemtListEl.appendChild(div)
}
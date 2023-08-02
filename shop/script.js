



fetch('https://fakestoreapi.com/products').then(x => x.json())
  .then(y => myfun(y));




let container = document.getElementById('1');
let container2=document.getElementById('2');
let container3=document.getElementById('3');
let container4=document.getElementById('4');
let c = 1

function myfun(y){
for (let i of y) {
  if (i.category == "men's clothing") {
    let temp = `

<div class="items">
  <div class="item">
    <img src="${i.image}" alt="Item" width="320px" height="320px"/>
    <div class="info">
      <div class="row">
        <div class="price" id="p${c}">$ ${i.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row" id="r${c}">Rating:${i.rating.rate}</div>
    </div>
    <button id="b${c}">Add to Cart</button>
  </div>
</div>
`
container.innerHTML+=temp;
  }
  c++;
  
}

c=1;





for (let i of y) {
  if (i.category == "women's clothing") {
    let temp = `

<div class="items">
  <div class="item">
    <img src="${i.image}" alt="Item" width="320px" height="320px"/>
    <div class="info">
      <div class="row">
        <div class="price" id="p${c}">$ ${i.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row" id="r${c}">Rating:${i.rating.rate}</div>
    </div>
    <button id="b${c}">Add to Cart</button>
  </div>
</div>
`
container2.innerHTML+=temp;
  }
  c++;
  
}


c=1;

for (let i of y) {
  if (i.category == "jewelery") {
    let temp = `

<div class="items">
  <div class="item">
    <img src="${i.image}" alt="Item" width="320px" height="320px"/>
    <div class="info">
      <div class="row">
        <div class="price" id="p${c}">$ ${i.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row" id="r${c}">Rating:${i.rating.rate}</div>
    </div>
    <button id="b${c}">Add to Cart</button>
  </div>
</div>
`
container3.innerHTML+=temp;
  }
  c++;
  
}
c=1;





for (let i of y) {
  if (i.category == "electronics") {
    let temp = `

<div class="items">
  <div class="item">
    <img src="${i.image}" alt="Item" width="320px" height="320px"/>
    <div class="info">
      <div class="row">
        <div class="price" id="p${c}">$ ${i.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row" id="r${c}">Rating:${i.rating.rate}</div>
    </div>
    <button id="b${c}">Add to Cart</button>
  </div>
</div>
`
container4.innerHTML+=temp;
  }
  c++;
  
}




}




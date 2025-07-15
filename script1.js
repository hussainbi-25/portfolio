  
    const products=[
      {
        name: "Kimirica Vitamin C Face Wash",
        price: 699,
        image: "https://m.media-amazon.com/images/I/614UcKAEqIL._AC_UF1000,1000_QL80_.jpg",
        ingredients: "Vitamin C, Hyaluronic Acid, Aloe Vera",
        uses: "Brightening, Hydrating, Cleansing",
        rating:4
      },
      {
        name: "Kimirica Moisturizing Lotion",
        price: 499,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNV8E21K5OhGTtjhTOcZOekmytj5LnMD_Kiw&s",
        ingredients: "Aloe Vera, Vitamin E",
        uses: "Hydrates and softens skin",
        rating:4.5
      },
      {
        name: "Kimirica Acne Cleanser",
        price: 599,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdMaieowid-Dhg9SbXegidaswC1CHxfX9aA&s",
        uses: "Cleanses acne-prone skin",
        rating:4.7
      },
      {
        name: "Aquaporin Booster 5% Cleanser",
        price: 300,
        image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/AquaporinNew.png?crop=center&height=630&v=1721398128&width=420",
        uses: "Stimulates hydration & cleans without drying",
        rating:4.0
      },
      {
        name: "Kimirica Body Lotion",
        price: 463,
        image: "https://www.kimirica.shop/cdn/shop/products/five-elements-body-lotionl-with-tangerine-green-tea-kimirica-9.jpg?v=1679479751&width=1080",
        ingredients: "Tangarine green tea",
        uses: "Vegan&paraben free",
        rating:4.3
      },
      {
        name: "Kimirica Periwinkle Creme Bath",
        price: 1300,
        image: "https://pushmycart.com/cdn/shop/products/kimirica-periwinkle-creme-bath_1020x.progressive.jpg?v=1662962507",
        ingredients: "Argan oil&white tea extracts",
        uses: "Delivers natural nutrients to the skin,Deep cleansing and nourishing",
        rating:4.2
      },
      {
        name: "Ignis Shampoo & Conditioner Hair Care Duo",
        price: 999,
        image: "https://www.kimirica.shop/cdn/shop/products/Ignis-shampoo-and-conditioner-2022.jpg?v=1674283682&width=1000",
        ingredients: "Bergamot&tea tree",
        uses: "Improves Hair health",
        rating:4.8
      },
      {
        name: "Niacinamide 5% Face Serum",
        price: 550,
        image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/Niacinamide5_1200-1-min.png?crop=center&height=720&v=1646458955&width=480",
        ingredients: " Niacinamide",
        uses: "Hyperpigmentation, Acne, Sun Damage, Black Heads, Enlarged Pores",
        rating:4.3
      },
      {
        name: "The Gulistan Indulgence Luxury Bath & Body Care Gift Set Box for Birthday & Anniversary",
        price: 1090,
        image: "https://images-static.nykaa.com/media/catalog/product/2/e/2e2cf46KIMIR00000169_5.jpg",
        uses: "Sun protection",
        rating:4
      },
      {
        name: "Dry Skincare Kit",
        price: 1050,
        image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/DrySkinListing.png?crop=center&height=540&v=1721222826&width=360",
        ingredients: "Hyaluronic Acid, Polyglutamic Acid (PGA)",
        uses: " A 3 product routine for dry & dehydrated skin. Dry skin can feel tight, itchy and even painful.",
        rating:4.4
      },
      {
        name: "Pheomel EXF(Ultra Hydrating Daily Microfoliant Face Scrub)",
        price: 599,
        image: "https://images.healthshots.com/healthshots/en/uploads/2023/12/14111302/face-scrub-for-oily-skin.jpg",
        ingredients: "SalSphere + Colloidal Oatmeal + Oryza Sativa (Rice) Bran Extract +Oryza Sativa (Rice) tarch ",
        uses: "Removes dead skin cells, treats melasma, prevents premature aging, rejuvenates the skin, and reduces the signs of pigmentation",
        rating:4
      },
      {
        name: "Pheomel CLX",
        image: "https://www.cosmenova.in/wp-content/uploads/2023/11/Pheomel-CLX-1.jpg",
        ingredients: " NovoRetin and AlgaPur ",
        uses: "Pore Refiner",
        rating:4.5
      },
      {
        name: "Minimalist Maleic Bond Repair Hair Combo",
        price:1000,
        image: "https://images-static.nykaa.com/media/catalog/product/6/1/613df46MINIM00000115.jpg?tr=w-500",
        ingredients: "Minimalist Maleic Bond Repair Complex 5% Hair Treatment Mask With Transglutaminase, Amino Acids",
        uses: "Hair serum that repairs and protects hair bond for soft, healthy hair",
        rating:4
      },
      {
        name: "Minimalist Sunscreen SPF 50 PA++++",
        price: 350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bZbK4kwweXM79qXPddAcDensKzHB2q2lOw&s",
        ingredients: "Zinc Oxide, Niacinamide",
        uses: "Sun protection",
        rating:4.1
      },
      {
        name: "Minimalist 8% L-Ascorbic Acid Lip Treatment Balm",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2XIYObJiKA72P43PtSl4G2IFHrOBVSmmSA&s",
        uses: "Hydrating, Sun Protection, Repairing, Moisturizing, Brightening",
        rating:3.9
      },
      {
        name: "Minimalist Marula Oil 5% Face Moisturizer For Dry Skin",
        price: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1IOT4dt5wWX0C7t1bCr01Iorxxx2mQXNtA&s",
        ingredients: " Marula Oil, Glycerin, Hyaluronic Acid, Saccharide Isomerate, Vitamin F",
        uses: "repairing dry, sensitive, mature, and damaged skin with disturbed lipid barrier",
        rating:4.2
      },
      {
        name: "Minimalist Sunscreen - SPF 50 PA++++ Stick with Adenosine, Rice Bran Oil & Vitamin E, Broad spectrum  (20 g)",
        price: 750,
        image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/sunscreen/q/z/p/20-spf-50-sunscreen-stick-with-adenosine-rice-bran-oil-vitamin-e-original-imagxbywmbgqqgkf.jpeg?q=20&crop=false",
        ingredients: "vitamin E,ageing along with Rice Bran oil ",
        uses: "Sun protection",
        rating:3.5
      },
      {
        name: "Minimalist 10% Vitamin B5 Gel Face Mositurier(50g)",
        price: 700,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDiGjqVirhh1D6zb6kB3oyNhdiiJKY_qIyw&s",
        ingredients: "Vitamin B5",
        uses: "Moisturizes & hydrates skin without the oily feel.",
        rating:4.5
      },
      {
        name: "Dr Dennis Gross Hyaluronic Marine Hydrating Modeling Mask",
        price: 300,
        image: "https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12901760-2095031517982991.jpg&format=webp&auto=avif&width=800&height=800&fit=cover&dpr=2",
        ingredients: "Hyaluronic acid",
        uses: "A hyaluronic acid face mask that delivers intense hydration.",
        rating:4.5
      },
      {
        name: "AHA PHA BHA 32% Face Peel",
        price:400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjz2q8Z7NE8bFGXjC5N8pmZciW7QCn67Lzg&s",
        ingredients: "AHA PHA BHA 32%",
        uses: "Moisturizes & hydrates skin without the oily feel.",
        rating:4.5
      },
      {
        name: "Minimalist Salicylic Acid & LHA 2% Body Wash With Niacinamide (200ml)",
        price: 330,
        image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1121069/VLie7ExLEj-1121069_1.jpg",
        ingredients: "Glycolic Acid",
        uses: "To clear up acne, reduce oiliness, and regulate sebum production.",
        rating:4.8
      },
      {
        name: "lip Scrub",
        price: 450,
        image: "https://www.kimirica.shop/cdn/shop/files/LipScrub_Listing_Images-06.jpg?v=1712214380&width=1080",
        ingredients: "Vitamin E,Shea Butter",
        uses: "For Dry and Sun Parched lips",
        rating:4
      },
      {
        name: "Pheomel CLX Face Cream 50g",
        price: 699,
        image: "https://m.media-amazon.com/images/I/41hMfGp5S0L._AC_UF1000,1000_QL80_.jpg",
        ingredients: "Pheomel CLX 50g",
        uses: "Oil Free",
        rating:4
      },
      {
        name: "kimirica  Skin Radiance Face Serum",
        price: 1100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPy-lxb5gavdPC3NSszTKbuUb0hF1Xz035ZQ&s",
        ingredients: "Turmeric,Oligopeptide-68",
        uses: "improves skin glow",
        rating:4
      }
      // Add more products as needed
    ];
      
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
      function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart.map(({ name, quantity, price }) => ({ name, quantity, price }))));
      }
      function addToCart(product) {
        const item = cart.find(p => p.name === product.name);
        if (item) item.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        saveCart();
        alert(`${product.name} added to cart!`);
      }
      function renderProducts() {
        const container = document.getElementById('productList');
        products.forEach(product => {
          const card = document.createElement('div');
          card.className = "bg-white rounded-2xl p-5 shadow-md card-hover transition fade-in";
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="rounded-xl mb-4 w-full h-48 object-cover">
            <h3 class="text-lg font-semibold text-pink-700 mb-1">${product.name}</h3>
            <div class="text-yellow-500 text-sm mb-2">
    ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(product.rating))}
    <span class="text-gray-500 text-xs ml-2">(${product.rating})</span>
  </div>
            <p class="text-pink-600 font-medium mb-2">₹${product.price}</p>
            <button class="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition w-full">Add to Cart</button>
            <div class="mt-3 text-sm">
              <p><strong>Ingredients:</strong> ${product.ingredients}</p>
              <p class="mt-1"><strong>Uses:</strong> ${product.uses}</p>
            </div>
            <div class="flex mt-4 space-x-2">
              <img src="https://i.pravatar.cc/30?img=1" class="w-8 h-8 rounded-full" />
              <img src="https://i.pravatar.cc/30?img=2" class="w-8 h-8 rounded-full" />
              <img src="https://i.pravatar.cc/30?img=3" class="w-8 h-8 rounded-full" />
            </div>
          `;
          card.querySelector('button').onclick = () => addToCart(product);
          container.appendChild(card);
        });
      }
      

  
      function loadOfferBanner() {
        const offers = [
          "🌸 20% off sitewide! Use code GLOW20",
          "🌼 BOGO on body wash!",
          "💖 Free shipping over ₹999!"
        ];
        document.getElementById('offerBanner').textContent = offers[Math.floor(Math.random() * offers.length)];
      }
      document.getElementById('quizForm').addEventListener('submit', e => {
        e.preventDefault();
        alert("Thanks! We’ll recommend personalized products soon.");
      });
      renderProducts();
      loadOfferBanner();
  


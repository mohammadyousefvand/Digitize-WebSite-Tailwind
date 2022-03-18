let allProducts = [{
        id: 1,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/image 7.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 2,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/apple-watch1.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 3,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/image 7.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 4,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/apple-watch1.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 5,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/image 7.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 7,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/apple-watch1.png',
        price: '۴,۸۲۵۰,۰۰۰'
    },
    {
        id: 8,
        title: 'ساعت هوشمند اپل سری ۶',
        image: './assets/images/image 7.png',
        price: '۴,۸۲۵۰,۰۰۰'
    }
]

let productsElem = document.getElementById('productsElem')

console.log(productsElem)

let prodoctTemplate
allProducts.forEach(item => {
    prodoctTemplate = `<div class="flex flex-col items-center justify-center rounded-xl p-1 shadow-lg bg-white">
    <!-- Image -->
    <div class="w-full bg-slate-200 rounded-xl py-4 flex justify-center items-center relative">
        <img class="w-16 md:w-24" src="${item.image}" alt="Product">
        <span class="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-300 absolute top-2 right-2 cursor-pointer">
            <img class="w-4 h-4 sm:w-6 sm:h-6" src="./assets/images/Icon-Glyph-25-Love.png">
        </span>
    </div>
    <!-- description -->
    <div class="w-full flex justify-between items-center mt-5 px-2">
        <div>
            <span class="text-slate-400 font-medium text-sm sm:text-base">اپل</span>
        </div>
        <!-- Colors -->
        <div class="flex">
            <span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full -mr-1 cursor-pointer bg-red-400 border border-white"></span>
            <span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full -mr-1 cursor-pointer bg-indigo-600 border border-white"></span>
            <span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full -mr-1 cursor-pointer bg-yellow-400 border border-white"></span>
            <span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full -mr-1 cursor-pointer bg-orange-400 border border-white"></span>
            <span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full -mr-1 cursor-pointer bg-stone-50 border border-gray-400"></span>
        </div>
    </div>
    <!-- Name -->
    <div class="w-full pr-1 mt-3">
        <p class="text-xs sm:text-sm md:text-base font-medium text-slate-900">${item.title}</p>
    </div>
    <!-- Price -->
    <div class="w-full mt-2 text-left pl-3">
        <p class="text-xs sm:text-sm md:text-base text-orange-700">${item.price}
            <span>تومان</span>
        </p>
    </div>
    <!-- Button Shop -->
    <div class="w-full flex items-center justify-center my-3 pt-2 border-t">
        <a href="../product-single.html"><button class="text-orange-400 text-sm md:text-base font-bold">مشاهده و سفارش</button></a>
    </div>
</div>`

productsElem.insertAdjacentHTML('beforeend' , prodoctTemplate)
})
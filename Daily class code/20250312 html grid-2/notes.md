grid-gap: 5px

in parent
grid-template-areas:
'navbar navbar navbar navbar'
'aside banner banner ad'
'aside product product ad'
'footer footer footer footer'

in child
grid-area: navbar

grid-area: aside

@media only screen and (min-width:300px) and (max-width:500px){
styling
}

@media (min-width:500px) and (max-width:800px){
styling
}

@media (min-width:800px){
styling
}

//-------------------------------------
/_ ✅ Default styles for Large Screens (Desktops, Laptops, LED/LCD) _/
body {
font-size: 16px;
background-color: white;
}

/_ ✅ Large Screens (Full HD, 2K, 4K, 8K, Wide Screens) _/
@media (min-width: 1920px) {
body {
font-size: 18px;
max-width: 1600px;
margin: auto;
}
}

/_ ✅ Laptops (13" - 15.6", HD Screens) _/
@media (max-width: 1440px) {
body {
font-size: 16px;
max-width: 1200px;
}
}

/_ ✅ Tablets (iPads, Samsung Tabs, 2-in-1 Laptops) _/
@media (max-width: 1024px) {
body {
font-size: 14px;
background-color: lightgray;
}

    .container {
        flex-direction: column;
        padding: 15px;
    }

    .menu {
        display: block;
        text-align: center;
    }

}

/_ ✅ Large Mobile Phones (iPhone Pro Max, Samsung S Ultra, Xiaomi, OnePlus) _/
@media (max-width: 768px) {
body {
font-size: 14px;
background-color: lightblue;
}

    .menu {
        display: none;
    }

    .content {
        padding: 10px;
    }

}

/_ ✅ Small Mobile Phones (Older iPhones, Redmi, Realme, POCO, Vivo, Oppo) _/
@media (max-width: 480px) {
body {
font-size: 12px;
background-color: lightgreen;
}

    .header {
        text-align: center;
    }

    .content {
        padding: 5px;
    }

}

/_ ✅ Extra Small Mobile Phones (Mini iPhones, Old Samsung, Feature Phones) _/
@media (max-width: 320px) {
body {
font-size: 10px;
background-color: lightcoral;
}

    .content {
        font-size: 12px;
    }

}

//- ---------------- with grid responsivenss---
/_ ✅ Default Grid Layout for Large Screens (Desktops, Laptops) _/
.container {
display: grid;
grid-template-areas:
"header header"
"sidebar banner"
"sidebar products"
"sidebar testimonials"
"sitemap contact"
"footer footer";
grid-template-columns: 250px 1fr;
grid-gap: 20px;
max-width: 1200px;
margin: auto;
}

/_ Assign grid areas _/
.header { grid-area: header; background: #222; color: #fff; padding: 20px; text-align: center; }
.sidebar { grid-area: sidebar; background: #f4f4f4; padding: 20px; }
.banner { grid-area: banner; background: #ddd; padding: 50px; text-align: center; }
.products { grid-area: products; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.testimonials { grid-area: testimonials; background: #eee; padding: 20px; }
.sitemap { grid-area: sitemap; background: #ccc; padding: 20px; }
.contact { grid-area: contact; background: #ddd; padding: 20px; }
.footer { grid-area: footer; background: #222; color: #fff; padding: 20px; text-align: center; }

/_ ✅ Responsive for Tablets (1024px and below) _/
@media (max-width: 1024px) {
.container {
grid-template-areas:
"header"
"banner"
"sidebar"
"products"
"testimonials"
"sitemap"
"contact"
"footer";
grid-template-columns: 1fr;
}
.products {
grid-template-columns: repeat(2, 1fr);
}
}

/_ ✅ Responsive for Mobile Phones (768px and below) _/
@media (max-width: 768px) {
.container {
grid-template-areas:
"header"
"banner"
"products"
"sidebar"
"testimonials"
"sitemap"
"contact"
"footer";
}
.products {
grid-template-columns: 1fr;
}
}

/_ ✅ Responsive for Extra Small Phones (480px and below) _/
@media (max-width: 480px) {
.container {
grid-gap: 10px;
}
.header, .footer {
font-size: 14px;
padding: 15px;
}
.products {
grid-template-columns: 1fr;
}
}

---

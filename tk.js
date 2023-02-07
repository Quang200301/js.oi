var man = [
    {
        id:1,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/750x750/ts/product/ef/6e/9c/f6215d3852488af4118d67d993e6f10e.jpg.webp"
    },
    {
        id:2,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/280x280/ts/product/b1/2c/c7/773eec46c5b99ecc78d03509918e139f.jpg.webp"
    },
    {
        id:3,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/280x280/ts/product/4e/88/0b/ce954ff35911f640df4805af3d61e70d.jpg.webp"
    },
    {
        id:4,
        name:"The cosmo (Den) Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/280x280/ts/product/85/26/d7/d94e2b1bb2618df38d7852e8d56bff6a.jpg.webp"
    }
    
    

];
var woment=[
    {
        id:1,
        name:"Áo khoác nữ chất liệu Kaki ",
        code:"TC1025011BA",
        price:"1.250.000",
        Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMcg27DxjjB65Ru9J7SOBS-k3XTI8JY6etBnRiuieqt5xpAxQWca62PnMbWIq-nBdSHjwE0NsyhFZlVzelxonScQZ7CBWEZi-z1lZDn0Px5QPcvt6GS0A9fnk&usqp=CAc"
    },
    {
        id:2,
        name:"Áo Khoác Kaki Hộp Nam Nữ ",
        code:"TC1025011BA",
        price:"1.500.000",
        Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfw1eY7TFXa0a0wSPX2AEXcVQDQ5SCpp7me18QWTZVVXF8psNd_gnqw45ohr05eFX3OcH2J7e36Q&usqp=CAc"
    },
    {
        id:3,
        name:"Áo Khoác Nữ The Cosmo Maddy Parka ",
        code:"TC1025011BA",
        price:"1.500.000",
        Image:"https://product.hstatic.net/1000289385/product/mausac_hongsakura_maddy_343a64921304496ab8333d25ee170b9a_1024x1024.jpg"
    },
    {
        id:4,
        name:"ÁO KHOÁC NỮ FERINA PARKA",
        code:"TC1025011BA",
        price:"2.500.000",
        Image:"https://product.hstatic.net/1000289385/product/mausac_cam_ferina_52b1897b49f144d6a8c3d8b608acf3da_1024x1024.jpg"
    },
];
function listproducts() {
    for (let i=0; i<=man.length-1;i++){
    var demo='<div class=" col-3">';
    demo +='<div class="card" style="width: 18rem;">';
    demo +=' <img  src="'+man[i].Image+'" alt="">';
    demo +='<div class="card-body">'
    demo +='<h5 class="card-title">'+man[i].name+'</h5>';
    demo +='<p class="card-text">'+man[i].price+'</p>';
    demo +=' <a href="#" class="btn btn-primary">mua</a>'
    demo +='</div>';
    demo +='</div>';
    demo +='</div>';
    console.log(demo);
    document.getElementById("men").innerHTML +=demo;
    };
    for (let i=0; i<=woment.length-1;i++){
        var demo='<div class=" col-3">';
        demo +='<div class="card" style="width: 18rem;">';
        demo +=' <img  src="'+woment[i].Image+'" alt="">';
        demo +='<div class="card-body">'
        demo +='<h5 class="card-title">'+woment[i].name+'</h5>';
        demo +='<p class="card-text">'+woment[i].price+'</p>';
        demo +=' <a href="#" class="btn btn-primary">mua</a>'
        demo +='</div>';
        demo +='</div>';
        demo +='</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML +=demo;
        }
}
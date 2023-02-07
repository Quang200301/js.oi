var product=[
    {
        id:1,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/750x750/ts/product/ef/6e/9c/f6215d3852488af4118d67d993e6f10e.jpg.webp"
    },
    {
        id:1,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/750x750/ts/product/ef/6e/9c/f6215d3852488af4118d67d993e6f10e.jpg.webp"
    },
    {
        id:1,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/750x750/ts/product/ef/6e/9c/f6215d3852488af4118d67d993e6f10e.jpg.webp"
    },
    {
        id:1,
        name:"The cosmo  Quan short khaki",
        code:"TC1025011BA",
        price:"250.000",
        Image:"https://salt.tikicdn.com/cache/750x750/ts/product/ef/6e/9c/f6215d3852488af4118d67d993e6f10e.jpg.webp"
    },
    {
        id:2,
        name:"ÁO KHOÁC NỮ FERINA PARKA",
        code:"TC1025011BA",
        price:"2.500.000",
        Image:"https://product.hstatic.net/1000289385/product/mausac_cam_ferina_52b1897b49f144d6a8c3d8b608acf3da_1024x1024.jpg"
    },
    {
        id:2,
        name:"ÁO KHOÁC NỮ FERINA PARKA",
        code:"TC1025011BA",
        price:"2.500.000",
        Image:"https://product.hstatic.net/1000289385/product/mausac_cam_ferina_52b1897b49f144d6a8c3d8b608acf3da_1024x1024.jpg"
    },
    {
        id:2,
        name:"ÁO KHOÁC NỮ FERINA PARKA",
        code:"TC1025011BA",
        price:"2.500.000",
        Image:"https://product.hstatic.net/1000289385/product/mausac_cam_ferina_52b1897b49f144d6a8c3d8b608acf3da_1024x1024.jpg"
    },
];
function listproducts(){
    for (var i=0;i=product.length;i++){
        if (product[i].id==1){
            var demo='<div class=" col-3">';
            demo +='<div class="card" style="width: 18rem;">';
            demo +=' <img  src="'+sp1[i].Image+'" alt="">';
            demo +='<div class="card-body">'
            demo +='<h5 class="card-title">'+sp1[i].name+'</h5>';
            demo +='<p class="card-text">'+sp1[i].price+'</p>';
            demo +=' <a href="#" class="btn btn-primary">mua</a>'
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            console.log(demo);
            document.getElementById("sp1").innerHTML +=demo;
            };
        }




        
    
}
var man = [
   
    {
        
        name:"Bánh Cracker AFC Kinh Đô Vị Phô Mai (8 Gói x 25g)",
        code:"TC1025011BA",
        price:"35.000₫",
        Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
    },
    {
       
        name:"Hộp 10 Gói Bánh Kinh Đô Mini Oreo Vị Chocolate (230g)",
        code:"TC1025011BA",
        price:"54.000₫",
        Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {
        
        name:"Bánh Trứng Tik-Tok Sầu Riêng (120g)",
        code:"TC1025011BA",
        price:"23.000₫",
        Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {
       
        name:"Bánh gấu chùm ngây (nhân kem) Morice - Thơm ngon bổ dưỡng (200g)",
        code:"TC1025011BA",
        price:"32.000₫",
        Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590"
    },
    {
        
        name:"Bánh Bơ Trứng Richy (270g/Hộp)",
        code:"TC1025011BA",
        price:"29.800₫",
        Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/7.png?v=1568944398257"
    }
    
    
    

];
var woment = [
   
{
    
    name:"Bánh Cracker AFC Kinh Đô Vị Phô Mai (8 Gói x 25g)",
    code:"TC1025011BA",
    price:"35.000₫",
    Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
},
{
   
    name:"Hộp 10 Gói Bánh Kinh Đô Mini Oreo Vị Chocolate (230g)",
    code:"TC1025011BA",
    price:"54.000₫",
    Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
},
{
    
    name:"Bánh Trứng Tik-Tok Sầu Riêng (120g)",
    code:"TC1025011BA",
    price:"23.000₫",
    Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
},
{
   
    name:"Bánh gấu chùm ngây (nhân kem) Morice - Thơm ngon bổ dưỡng (200g)",
    code:"TC1025011BA",
    price:"32.000₫",
    Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590"
},
{
    
    name:"Bánh Bơ Trứng Richy (270g/Hộp)",
    code:"TC1025011BA",
    price:"29.800₫",
    Image:"//bizweb.dktcdn.net/thumb/large/100/366/378/products/7.png?v=1568944398257"
}




];


function listproducts() {
    for (let i=0; i<=man.length-1;i++){
    var demo='<div class=" col-2.4">';
    demo +='<div class="card" style="width: 250px;height:550px">';
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
        var demo='<div class=" col-2.4">';
        demo +='<div class="card" style="width: 250px;height:550px">';
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
        };
}
 
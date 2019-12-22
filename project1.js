var slideIndex = 0;
showSlides(0);

function plusSlides() {
    showSlides(1);
}

function minusSlide() {
    showSlides(-1);
}

function goNext() {
    showSlides(1);
}

function showSlides(index) {


    slideIndex += index;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    if (slideIndex >= slides.length) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";


    setTimeout(goNext, 2500); // Change image every 2 seconds


}




function find(cls) {
    return document.getElementsByClassName(cls);
}


window.onresize = () => {

    var images = find("show");

    if (window.innerWidth < 1000) {


        for (i = 0; i < images.length; i++) {
            images[i].style.width = "100%";
        }

        find("prev")[0].setAttribute("style", "top:8%");
        find("next")[0].style.top = "8%";

        find("prev")[0].style.height = images[i].style.height - 80;


    } else {
        for (i = 0; i < images.length; i++) {
            images[i].style.width = "50%";
        }


        find("prev")[0].setAttribute("style", "top:1%");
        find("next")[0].style.top = "1%";

    }

}

window.onresize();



function game(linki, saxeli, weli, ganri, shemqmneli, platforma, agwera, href) {
    this.link = linki;
    this.saxeli = saxeli;
    this.weli = weli;
    this.ganri = ganri;
    this.shemqmneli = shemqmneli;
    this.platforma = platforma;
    this.agwera = agwera;
    this.href = href;
}


var games = [];

games.push(new game("http://www.moviepostersusa.com/media/catalog/product/p/4/p4406.jpg", "Assasin's creed unity", "2014", "Action, 3D, 3rd Person", "Ubisoft", "PC",
    `მოქმედება ვითარდება საფრანგეთში, ქალაქ პარიზში რევოლუციის დროს. ქალაქი გაჟღენთილია შიშითა და 
ქაოსით, ქალაქში სიკვდილი სუფევს. ამ დროს, ახალგაზრდა ასასინი სახელად არნო გაიგებს ამას და 
გადაწყვეტს ბრძოლაში ჩართვას. ამ ბრძოლებით ის გახდება პროფესიონალი ასასინი...`, "t1.html"));


games.push(new game("http://www.picz.ge/img/s2/1506/19/9/91501522817d.jpg", "Call of Duty Gosts", "2013", " Action (Shooter) / 3D / 1st Person", "Infinity Ward / Raven Software", "PC",
    `Call of Duty: Ghosts - კროსპლატფორმული თამაში 3D შუტერის ჟანრში პირველი პირისგან, მეათე 
Call of Duty-ის სერიის თამაშებიდან. შესანიშნავი გრაფიკის და სიუჟეტის გარდა ყურადღებას იქცევს 
ნგრევადი გარემო რუქებზე მულტიპლეერის რეჟიმში თამაშის დროს...`, "t2.html"));


games.push(new game("https://c.radikal.ru/c31/1910/ec/79075ad31a3b.jpg", "Grid", " 2019 წლის 11 ოქტომბერი", "Racing / Simulator / Sport", " Codemasters", "PC",
    `GRID - ეს არის სარბოლო ჟანრის თამაში,რომლის დახმარებითაც მიიღებთ უდიდეს გამოცდილებას ამ 
სფეროში. GRID გთავაზობთ ისეთ გამოცდილებას,სადაც თითოეული რბოლაც კი შენი ახალი გზის დასაწყისია... `, "t3.html"));

games.push(new game("t4.jpg", "Euro truck simulator 2", " 2013", "სიმულატორი", "SCS Software", "PC",
    `Euro Truck Simulator 2 - გაძლევთ ყველაზე მძლავრი და დიდი ავტომობილების ტარების 
გამოცდილებას.თქვენ შეძლებთ გაიაროთ მთელი გზა ავტო პერეგონშიკიდან დაწყებული და 
დამთავრებული საკუთარი იმპერიით... `, "t4.html"));

games.push(new game("t5.jpg", "Forza Horizon 3", " 2016", "რბოლა", "Playground Games", "PC",
    `ეს არის თქვენი დღესასწაული. თამაშში Forza Horizon 3-ში
 თქვენ უნდა უმასპინძლოთ Horizon ფესტივალს, 
 სადაც შეგიძლით შეცვალოთ ყველაფერი საკუთარი გემოვნებით.
  წინ გელოდებათ ყველაზე სანახაობრივი რბოლა: 
  350 მსოფლიოს საუკეთესო მანქანები, უდაბნო. 
  კლდოვანი კანიონები და ტროპიკული ტყეები.`, ""));

function gamotana(array) {


    var output = "";

    for (i = 0; i < array.length; i++) {
        output += `<div class="card" >
       <img src = "./play2.png" class="center hover" width="50" style="display:none;">
       <img class="imge" src=${array[i].link} width="270" height="400" onmouseover="mover(${i})" onclick="gadadi('${array[i].href}')">
       <div class="preview">
       <p style="font-size:1em;">${array[i].saxeli}</p>
       <hr width="90%" />
       <p> გამოშვების წელი: ${array[i].weli}</p>
       <p> ჟანრი: ${array[i].ganri}</p>
       <p> შემქმნელი: ${array[i].shemqmneli}</p>
       <p> პლატფორმა: ${array[i].platforma}</p>
       <p> მოკლე აღწერა </p>
       <p> ${array[i].agwera}</p>
       </div>
       </div>
       `;

    }
    find("game")[0].innerHTML = output;
}

gamotana(games);


function mover(ind) {

    var a = find("hover")[ind];

    a.style.display = "block";



    var b = find("preview")[ind];

    if (window.innerWidth > 900)
        b.style.display = "inline-block";

    addEventListener("mouseout", add);

    function add() {
        a.style.display = "none";
        b.style.display = "none";
        removeEventListener("mousout", add);
    }

}

var images = find("imge");

/*for(i=1;i<=images.length; i++){

  let link  = "t"+i+".html";
  
  images[i-1].onclick = ()=>{
      window.open(link);
  }

}
*/

function shes() {
    window.scrollBy(0, 1000000);
}

function dzebna() {

    let teqsti = find("teqsti")[0].value;
    let texti = teqsti.toLowerCase();

    let arr = [];

    games.map((game) => {
        if (game.saxeli.toLowerCase().indexOf(texti) >= 0) {
            arr.push(game);
        }
    });

    gamotana(arr);

}

document.getElementById("text")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("button").click();
        }
    });

function gadadi(link) {
    window.open(link);
}



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
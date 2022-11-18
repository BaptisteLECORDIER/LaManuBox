// ----------------------------------------------------------------------------
// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './script.js';
import './index.css';
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Rendu de la navbar pricipale
const navbar1 = ReactDOM.createRoot(document.getElementById('navbar1Here'));
const navbar1Inc = (
  <nav class="navbar">
    <div class="navbar__logo">
      <img src="./assets/img/lamanubox.svg" alt=""></img>
    </div>
    <ul class="navbar__links">
      <li>
        <a class="txt-md reset-a-style-bg-w" href="index.html">Accueil</a>
      </li>
      <li>
        <a class="txt-md reset-a-style-bg-w" href="estimation.html">Estimation</a>
      </li>
    </ul>
  </nav>
);

navbar1.render(navbar1Inc);
// ----------------------------------------------------------------------------

var scriptfunction = () => {
  var mininavArrow = 0;
  const mininavArrowBtn = document.getElementById('mininav-arrow');
  const mininav2 = document.getElementById('mininav2');


// ----------------------------------------------------------------------------
  // Tableau contenant l'ensemble des produits
  var listItem = [
      {
          name:'Livre',
          nb:0,
          image:'choice-object-0.svg',
          lenght:11,
          widht:18,
          height:3,
      },
      {
          name:'Carton standard',
          nb:0,
          image:'choice-object-1.svg',
          lenght:55,
          widht:35,
          height:30,
      },
      {
          name:'Télévision',
          nb:0,
          image:'choice-object-2.svg',
          lenght:50,
          widht:90,
          height:5,
      },
      {
          name:'Chaise',
          nb:0,
          image:'choice-object-3.svg',
          lenght:55,
          widht:35,
          height:30,
      },
      {
          name:'Machine à laver',
          nb:0,
          image:'choice-object-4.png',
          lenght:60,
          widht:85,
          height:55,
      },
      {
          name:'Cube 1m de côté',
          nb:0,
          image:'choice-object-5.svg',
          lenght:100,
          widht:100,
          height:100,
      },
      {
          name:'Réfrigérateur',
          nb:0,
          image:'choice-object-6.png',
          lenght:55,
          widht:35,
          height:30,
      },
      {
          name:'Lit simple',
          nb:0,
          image:'choice-object-7.svg',
          lenght:190,
          widht:55,
          height:100,
      },
      {
          name:'Vélo',
          nb:0,
          image:'choice-object-8.svg',
          lenght:185,
          widht:105,
          height:65,
      },
      {
          name:'Table',
          nb:0,
          image:'choice-object-9.png',
          lenght:120,
          widht:75,
          height:150,
      },
      {
          name:'Armoire',
          nb:0,
          image:'choice-object-10.png',
          lenght:110,
          widht:190,
          height:60,
      },
      {
          name:'Bibliothèque',
          nb:0,
          image:'choice-object-11.png',
          lenght:80,
          widht:230,
          height:25,
      },
      {
          name:'Canapé',
          nb:0,
          image:'choice-object-12.png',
          lenght:90,
          widht:90,
          height:165,
      },
      {
          name:'Lit double',
          nb:0,
          image:'choice-object-13.svg',
          lenght:190,
          widht:55,
          height:200,
      },

  ];
// ----------------------------------------------------------------------------
  // Fonction prenant en paramètre un tableau de produits et retournant le volume total
  var getVolume = (listItemTest) => {
          var ItemTestVolumeString = 0;
          for (var ItemTest of listItemTest) {
              ItemTestVolumeString += ItemTest['nb']*ItemTest['lenght']*ItemTest['widht']*ItemTest['height'];
      }
      return ItemTestVolumeString;
  }
// ----------------------------------------------------------------------------
  // Fonction prenant en paramètre un volume et retournant un tableau avec la configuration optimale
  var getDivision = (volumeTest) => {
      var tabToResult = {
          s:0,
          m:0,
          l:0,
          xl:0
      };
      if (volumeTest >= 26000000) {
          tabToResult['xl'] = Math.floor(volumeTest/26000000);
          volumeTest -= Math.floor(volumeTest/26000000) * 26000000; 
      } 
      if (volumeTest < 26000000 && volumeTest > 16000000) {
          tabToResult['xl'] += 1;
          volumeTest = 0;
      } 
      if (volumeTest >= 16000000) {
          tabToResult['l'] = Math.floor(volumeTest/16000000);
          volumeTest -= Math.floor(volumeTest/16000000) * 16000000;
      } 
      if (volumeTest < 16000000 && volumeTest > 9000000) {
          tabToResult['l'] += 1;
          volumeTest = 0;
      } 
      if (volumeTest >= 9000000) {
          tabToResult['m'] = Math.floor(volumeTest/9000000);
          volumeTest -= Math.floor(volumeTest/9000000) * 9000000;
      } 
      if (volumeTest < 9000000 && volumeTest > 5000000) {
          tabToResult['m'] += 1;
          volumeTest = 0;
      } 
      if (volumeTest >= 5000000) {
          tabToResult['s'] = Math.floor(volumeTest/5000000);
          volumeTest -= Math.floor(volumeTest/5000000) * 5000000;
      } 
      if (volumeTest < 5000000 && volumeTest > 0) {
          tabToResult['s'] += 1;
          volumeTest = 0;
      }
      return tabToResult;
  }
// ----------------------------------------------------------------------------
  // Fonction prenant en paramètre un tableau de répartition et retournant l prix
  var getPrice = (tabToResultTest = Array) => {
      return tabToResultTest['xl'] * 200 + tabToResultTest['l'] * 140 + tabToResultTest['m'] * 80 + tabToResultTest['s'] * 50
  }
// ----------------------------------------------------------------------------
  // Actualisation du prix et de la répartition optimale
  setInterval(function() {
      document.getElementById('s-p').textContent = getDivision(getVolume (listItem))['s']+" x Box Small_";
      document.getElementById('m-p').textContent = getDivision(getVolume (listItem))['m']+" x Box Medium";
      document.getElementById('l-p').textContent = getDivision(getVolume (listItem))['l']+" x Box Large_";
      document.getElementById('xl-p').textContent = getDivision(getVolume (listItem))['xl']+" x Box XLarge";

      document.getElementById('result-p').textContent = getPrice (getDivision (getVolume (listItem)))+`.00 euros`;

  }, 100);
// ----------------------------------------------------------------------------
  // Fonction gérant le basculement du mode visible et non-visible de la navbar secondaire
  var miniNavFunction = () => {
      mininavArrowBtn.addEventListener("click", function(){
          if (mininavArrow == 2) {
              mininavArrow = 1;
              mininavArrowBtn.classList.remove('mininav-arrow-not-select');
              mininavArrowBtn.classList.add('mininav-arrow-select');
              mininav2.classList.remove('mininav2-base');
              mininav2.classList.remove('mininav2-close');
              mininav2.classList.add('mininav2-open');
          } else {
              mininavArrow = 2;
              mininavArrowBtn.classList.remove('mininav-arrow-select');
              mininavArrowBtn.classList.add('mininav-arrow-not-select');
              mininav2.classList.remove('mininav2-open');
              mininav2.classList.add('mininav2-close');
          }
      }); 
  };
// ----------------------------------------------------------------------------
  // Fonction de recherche d'objet dans un tableau
  miniNavFunction ();
  var getAllValueWithAstring = (strIfInTab = String, tabTest = Array) => {
      var tabToFill = [];
      for (var itemTabTest of tabTest) {
          var toLowerCase = itemTabTest['name'].toLowerCase()
          if (toLowerCase.includes(strIfInTab.toLowerCase())) {
              tabToFill.push(itemTabTest['name']);
          }
          
      }
      return tabToFill
  } 
// ----------------------------------------------------------------------------
  // Fonction d'affichage des objets avec les bonnes informations
  var putCard = (tabsearch) => {

      const listItemCard = document.querySelector('.list-item-card');
      var listItemCardToFill = "";

      


      for (var i = 0; i < listItem.length; i++) {

          if (tabsearch.includes(listItem[i]['name']) ) {
              var CardItemToAdd = `<div id="${i}" class="card-item"><div class="card-item__image"><img src=""></div><p class="card-item-p txt-md">Nom de l'objet</p><div class="card-item__select align-center"><button id="${i}" class="btn card-item__select--up card-item__select--arrow"><img src="./assets/img/arrow-top-black.svg" alt="" class="card-item-select-arrow-up"></button><p class= "card-item-number">0</p><button id="${i}" class="btn card-item__select--down card-item__select--arrow"><img src="./assets/img/arrow-bottom-black.svg" alt="" class="card-item-select-arrow-down"></button></div></div>`;
              listItemCardToFill += CardItemToAdd;
          }

          
          listItemCard.innerHTML = listItemCardToFill;
      };
  };
  putCard (getAllValueWithAstring('', listItem));
// ----------------------------------------------------------------------------
  // Gerstion des cliques sur les divs objets
  const itemsCard = document.querySelectorAll('.card-item');
  for (var itemCard of itemsCard) {
      itemCard.querySelector('.card-item__select--up').addEventListener("click", function() {

          listItem[this.id]['nb'] += 1;
      })
      itemCard.querySelector('.card-item__select--down').addEventListener("click", function() {
          if (listItem[this.id]['nb'] > 0) {
              listItem[this.id]['nb'] -= 1;
          }
      })
  };
// ----------------------------------------------------------------------------
  // Actualisation des informations sur les produits
  setInterval(function() {
      for (var itemCard of itemsCard) {
          itemCard.querySelector('.card-item-number').textContent = listItem[itemCard.id]['nb'];
      };
  }, 100);
  for (var itemCard of itemsCard) {
      itemCard.querySelector('.card-item-p').textContent = listItem[itemCard.id]['name'];
      itemCard.querySelector('.card-item img').src = `./assets/img/${listItem[itemCard.id]['image']}`;
  };
// ----------------------------------------------------------------------------
}
scriptfunction ()

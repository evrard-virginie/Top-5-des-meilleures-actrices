// Quand le document est prêt
$(function(){
    // capturer tous les éléments du menu (li) dans une variable
    var $mainMenuItems = $("#main-menu ul").children("li"),
        // nombre d'éléments dans le menu
        totalMainMenuItems = $mainMenuItems.length,
        // quand ma page s'ouvre c'est l'élément de l'index 2 qui s'ouvre
        openedIndex = 2,
        
    // fonction d'initialisation    
    init = function(){
        
        bindEvents();
        // Si mon index est valide 
        if(validIndex(openedIndex))
            // alors ouvrir l'item, donc openedIndex = 2 -> jessica alba, vitesse d'ouverture = 700 milisecondes
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        },
        
    bindEvents = function(){
        // lancer l'animation quand je clique sur l'image (la 1ère div qui a la classe image)
        $mainMenuItems.children(".images").click(function(){
            // var défini le nouveau index = connaître (le li) l'index de l'élément/l'image qui est cliqué 
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });
        
        // Animation des boutons
        $(".button").hover(
            // quand la souris passe sur le bouton
            function(){
               $(this).addClass("hovered"); 
            },
            // quand la souris sort du bouton
            function(){
                $(this).removeClass("hovered");
            }
        );
        // quand je clique sur le bouton    
        $(".button").click(function(){
            // donne l'index du bouton
            var newIndex = $(this).index(); 
            // valide l'index et anime le bouton (ouvre et ferme l'index / l'image)
            checkAndAnimateItem(newIndex);
        });
            
        },
        
    validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },
    
    // Gère l'ouverture/fermeture des images/item 
    // (item que je veux animer, toOpen true = ouverture - false = fermeture, speed vitesse de l'animation) 
    animateItem = function($item, toOpen, speed){
            // mettre dans une variable l'image coloré, find -> trouve parmi les descendants l'item qui a la class color
            var $colorImage = $item.find(".color"),
            // les paramètres de l'item, (Syntaxe = Expression ? Valeur1:Valeur2)
            // toOpen ?( est-ce qu'il est true ou false) si true {width: "420px"} si false {width:"140px"}
            itemParam = toOpen ? {width: "420px"}:{width: "140px"},
            // les paramètres de l'image
            // toOpen ? true = image couleur{left:"0px"} : false image black and white{left:"140px"}
            colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};

            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);     
    },
    
    // Gère ouverture et la fermeture des images
    checkAndAnimateItem = function(indexToCheckAndAnimateItem){
        // Si l'index sur laquelle je clique est égale à l'index qui est déjà ouvert
        if(openedIndex === indexToCheckAndAnimateItem){
                animateItem($mainMenuItems.eq(indexToCheckAndAnimateItem), false, 250); 
                // alors fermer cette index (ouvert = 0, fermer = -1)
                openedIndex = -1;
        }
        else{
            // je vérifie si l'index est valide 
            if(validIndex(indexToCheckAndAnimateItem)){
                // fermer l'item ouvert
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                // opendIndex devient le nouveau index
                openedIndex = indexToCheckAndAnimateItem;
                // ouvrir l'item cliqué 
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            } 
        }
  };
   
  // Executer la fonction
  init();
    
});














































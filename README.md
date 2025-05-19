# JQuery-Learning est un projet réalisé en JAVASCRIPT.

Réalisation d'un système dynamique en Javascript pour afficher à partir d'un fichier JSON une liste selon les catégories prédéfinies.

JQuery : JQuery est inclus dans le projet localement à partir des fichiers JS
JSON : les données du projets sont stockées dans le fichier datas.json


## Installation

pour installer le projet, utiliser la commande "git remote..."
pour visualiser le projet dans votre navigateur, il est conseillé d'utiliser l'extension "Live Server" dans votre VisualStudioCode

## Déroulement 

![image](https://github.com/user-attachments/assets/dea5da73-ea77-4919-9703-223797d356e2)


```
$(document).ready(function() {
    $.getJSON("datas.json")
    .done(function (data){
        const container = $(".divcarte");
        const listOfCategory = data.categoryEvenements;

        listOfCategory.forEach(category => {
            const catHTML = `
        <div class="divcarte">
        <div class="carte">
        <h3 class="nomcarte">${category.musique}, ${category.convention}, ${category.tatouage}</h3>
        </div>
        </div>`;
        
        container.append(catHTML)
    })
    });
});
```


Au déclenchement de la fonction "Ready" :
  - Déclenchement de la fonction pour récuperer au format JSON les données
      - Evènement "done": fonction qui prends en paramètre les données JSON
        - déclaration d'une variable qui va stocker le container de la liste des catégories d'évènements
        - déclaration d'une variable qui récupère à partir du JSON la liste des catégories d'évènements
        - utilisation d'un "forEach" pour parcourir la liste des catégories d'évènements et elle prend un paramètre qui est le descendant de la liste (category) et éxécute ensuite une fonction ( => )
          - déclaration d'une constante (catHTML) qui contient une injection HTML qui permet la structure d'une carte de la liste
          - pour intégrer dynamiquement les variables de la carte, utilisation de la fonction intégrée à JQuery ${}
          - ajout de la constante (catHTML) au parent qui contient les cartes (container)

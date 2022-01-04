//links atribuídos
let insta = 'https://www.instagram.com/maykonvinicius.3090/';
let face = 'https://www.facebook.com/profile.php?id=100002527294213';
let git = 'https://github.com/MVinicius3091';

//imagens atribuídas
let imgInstagram = 'imagens/Insta.jpg';
let imgFacebook = 'imagens/face.jpg';
let imgGithub = 'imagens/github.png';

//Selecionando as tags 'a'.
let linksInsta = document.querySelector('.instagram a');
let linksFace = document.querySelector('.facebook a');
let linksGit = document.querySelector('.github a');

//Selecionando as tags 'img'.
let imgInsta = document.querySelector('.instagram img');
let imgFace = document.querySelector('.facebook img');
let imgGit = document.querySelector('.github img');

//links
linksInsta.setAttribute('href', insta);
linksFace.setAttribute('href', face);
linksGit.setAttribute('href', git);

//imagens
imgInsta.setAttribute('src', imgInstagram);
imgFace.setAttribute('src', imgFacebook);
imgGit.setAttribute('src', imgGithub);
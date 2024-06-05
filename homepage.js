// Function to be executed on button click
document.addEventListener('DOMContentLoaded', (event) => {
   // Function to be executed on button click

   function onInstaClick() {
      window.open('https://www.instagram.com/meetakashn/', '_blank');
   }

   function onYouClick() {
      window.open('https://www.youtube.com/@meetakashn/', '_blank');
   }

   function onTwiClick() {
      window.open('https://www.twitter.com/meetakashn/', '_blank');
   }

   function onFaceClick() {
      window.open('https://www.facebook.com/meetakashn24', '_blank');
   }

   function onLinkClick() {
      window.open('https://www.linkedin.com/in/meetakashn/', '_blank');
   }

   function onGithubClick() {
      window.open('https://github.com/meetakashn', '_blank');
   }

   // Attach the click event listener to the button
   document.getElementById('instabutton').addEventListener('click', onInstaClick);
   document.getElementById('youbutton').addEventListener('click', onYouClick);
   document.getElementById('twitterbutton').addEventListener('click', onTwiClick);
   document.getElementById('facebutton').addEventListener('click', onFaceClick);
   document.getElementById('linkidinbutton').addEventListener('click', onLinkClick);
   document.getElementById('githubbutton').addEventListener('click', onGithubClick);
});

$(document).ready(function() {
   // Handle navigation link clicks
   $('nav a').click(function(e) {
       e.preventDefault();
       const target = $(this).attr('href');
       $('#content').load(target + '.html');
   });
});
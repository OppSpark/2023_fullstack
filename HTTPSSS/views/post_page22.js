
/* 

fetch('/post')
    .then((response) => response.json())
    .then((boardData) => {
      // 게시판 데이터를 이용하여 HTML 업데이트
    });




var boardElement = document.getElementById('board');
var postListElement = boardElement.getElementsByTagName('ul')[0];

for (var i = 0; i < boardData.length; i++) {
  var postElement = document.createElement('li');
  postElement.className = 'post';
  
  var titleElement = document.createElement('h2');
  titleElement.className = 'title';
  titleElement.innerHTML = boardData[i].title;
  
  var contentElement = document.createElement('p');
  contentElement.className = 'content';
  contentElement.innerHTML = boardData[i].content;
  
  var authorElement = document.createElement('div');
  authorElement.className = 'author';
  authorElement.innerHTML = boardData[i].author;
  
  postElement.appendChild(titleElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(authorElement);
  
  postListElement.appendChild(postElement);
}
 */

fetch('/post')
.then((response) => response.json())
.then((boardData) => {
  const boardElement = document.getElementById('board');
  for (const postData of boardData) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML =  '<h2>${postData.post_title}</h2> <p>${postData.post_content</p>; '
     
    boardElement.appendChild(postElement);
  }
});
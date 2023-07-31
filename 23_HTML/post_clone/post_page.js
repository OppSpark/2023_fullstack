// JavaScript 코드

const POSTs = [
    {
      title: "세차 초보를 위한 디테일링 가이드! (용어편)",
      contents: "안녕하세요. 세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",
    },
    {
      title: "세차 초2222보를 위한 디테일링 가이드! (용어편)",
      contents: "안녕하세요. 22222222세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",
    },
    {
      title: "세차 초333333332222보를 위한 디테일링 가이드! (용어편)",
      contents: "안녕하세요. 2333333332222222세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",
    },
    {
      title: "2444444444422일링 가이드! (용어편)",
      contents: "44444444444그나 유튜브 등에서 디테일링 고나련 4그나 유튜브 등에서 디테일링 고나련 4그나 유튜브 등에 4그나 유튜브 등에서 디테일링 고나련4그나 유튜브 등에서 디테일링 고나련4그나 유튜브 등에서 디테일링 고나련   디테일링 고나련 4그나 유튜브 등에서 디테일링 고나련",
    }
  ];
  
  // postbox 요소를 가져옵니다.
  const postbox = document.getElementById('postbox');
  
  for (let i = 0; i < POSTs.length; i++) {
    // postbox를 복제하여 post_title과 post_contents에 넣을 요소를 생성합니다.
    const postboxClone = postbox.cloneNode(true);
  
    // post_title, post_contents 영역에 각각 고유한 내용을 추가합니다.
    const postTitle = POSTs[i].title;
    const postContents = POSTs[i].contents;
    postboxClone.querySelector('#post_title').textContent = postTitle;
    postboxClone.querySelector('#post_contents').textContent = postContents;
  
    // 복제된 요소를 문서에 추가합니다.
    document.body.appendChild(postboxClone);
  }
  
  // 첫 번째 postbox는 복제된 것이므로 삭제합니다.
  postbox.remove();
  
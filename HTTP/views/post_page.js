














  /*
  const POSTs = [
    {
    title: "학원 알바 모집",
    contents: "ㅈㅎ시 에서 수학 학원 알바를 모집하고 있습니다! 수학과 우대! 일급 13000원! 하루 6시간 근무, 밥값 없음",
    },
    {
      title: "엄준식",
      contents: "어떠케 사람 이름이 엄준식",
    },
    {
      title: "님들 라면드시지마세요.txt",
      contents: "이온음료,탄산음료"
    },
    {
      title: "세차 초2222보를 위한 디테일링 가이드! (프리워시편)",
      contents: "오늘은 셀프세차, 그리고 디테일링에서 가장 첫번째 과정에 해당하는 프리워시(Pre-Wash)에 대해서 알아보겠습니다.                     '프리워시란' 이란                     프리워시는 본세차에 들어가기 전에 차량에 붙어있는 굵은 오염물질을 제거해서 본세차시 발생할 수 있는 스크레치, 잔기스 그리고 스월마크를 방지해주는 과정입니다.                     프리워시 단계에서는 고압세척기, 프리워시 약제 그리고 스노우폼 세차 등을 이용하여 진행하게 되는 디테일링의 수많은 단계 중에서 가장 첫번째 단계입니다.                      '고압수'                     고압수는 수압이 매우 강해서 고압수만으로도 어느 정도 굵은 오염물질을 제거할 수 있습니다. 일반적으로 고압세척기의 압력이 100bar 이상이면 자동차 세차를 하기에 충분한 압력입니다.                     가정용으로 나오는 고압세척기나 셀프세차장에서 사용하는 압력이 보통 100~110bar 정도입니다. 아래는 셀프세차장, 손세차장에서 사용 중인 일반적인 고압세척기 압력입니다. 참고하시기 바랍니다.",
    },
    {
      title: "독일 고양이",
      contents: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다. 영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...",
    },
    {
      title: "미국 증시와 한국 증시의 조정 그리고 바이든의 방한",
      contents: "첫 번째 미국의 인플레이션은 뭄ㄴ제는 양적완화를 통한 후폭풍으로 해석할 수 있으나, 국제 유가의 고공행진, 러-우 전쟁등의 이슈로 불러온 영향력도 크다.",
    }
  ];

 
    // postbox 틀 가저옴
  const postbox = document.getElementById('postbox_in');
  
  for (let i = 0; i < POSTs.length; i++) {
    // postbox를 복제 후  제목과 내용 넣을 변수 생성
    const postboxClone = postbox.cloneNode(true);
  
    // 제목과 내용 추가하는 알고리즘
    const postTitle = POSTs[i].title;
    const postContents = POSTs[i].contents;
    postboxClone.querySelector('#post_title').textContent = postTitle;
    postboxClone.querySelector('#post_contents').textContent = postContents;
  
    // 내용 과 틀 복사
    document.body.appendChild(postboxClone);
  }
  
  // 첫번 째 포스트 박스 삭제
  postbox.remove();
  
  




  
 

  /*   const bid = document.location.pathname.split('/')[3];
  fetch(`/post/${bid}`)
  .then(res => res.json())
  .then(myJson => {
      const post_title = postboxClone.querySelector('#post_title'); 
      const post_contents =  postboxClone.querySelector('#post_contents');
      
      post_title.textContent = myJson.post_title;
      post_contents.textContent = myJson.post_contents;
    });
 */

  




 
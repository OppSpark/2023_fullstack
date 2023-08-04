function cheeckPW(){
    var email = $(#email).val();
    var password = $(#pw).val();
    var re_password = $(#re_pw).val();
    
    if(pw != re_pw)
        alert("비밀번호가 일치하지 않습니다.");
    else{
        $.ajax({
            url :"/signUP",
            type :"post",
            data :{
                pw :pw,
                id : id,
                email : email
            },
        success : function(data){
            if(data === "중복 ID"){
                alert("이미 존재하는 ID입니다.");

            }
            else if(data === "성공"){
                alert("회원가입 되었습니다.");
            }
        }
        })
    }
    
}
//디비 정보 불러오는 내용
/* 
const db_Config = {
	host: 'localhost', 
	user: 'OppSpark',
	port: 3306,
	password: '1515', 
	database: '23_S', 
  };
  
  // MySQL 데이터베이스 연결 설정
  const connection = mysql.createConnection(dbConfig);
  
  // 데이터베이스 연결 확인
  connection.connect((err) => {
	if (err) {
	  console.error('Error connecting to database: ', err);
	  return;
	}
	console.log('Connected to database!');
  });

 */



module.exports = {
	db : {
	host: 'localhost', 
	user: 'OppSpark',
	port: 3306,
	password: '1515', 
	database: '23_S', 
	}

}
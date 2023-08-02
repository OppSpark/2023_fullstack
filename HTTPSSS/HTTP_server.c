#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>

#include<arpa/inet.h>
#include<sys/socket.h>

int main(){
    int sock = socket(AF_INET, SOCK_STREAM, 0);
        if (sock < 0){
            perror("socket");
            return 1;
        }


    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(80);
    addr.sin_addr.s_addr = inet_addr("0.0.0.0");


    int ret_b = bind(sock, (struct sockaddr *)&addr, sizeof(addr));
    if(ret_b < 0){
        perror("bind");
        return 1;
    }
    int ret_1 = listen(sock, SOMAXCONN);
    if(ret_1 < 0){
        perror("listen");
        return 1;
    }

    while(1){
        int cli_sock = accept(sock, NULL, NULL);
        if(cli_sock < 0){
            perror("accpt");
            return 1;
        }
        
        char buf[1024] = {0};

        int read_size = read(cli_sock, buf, sizeof(buf));
        if(read_size < 0){
            perror("read");
            return 11;
        }

        
        char *res;
        if(strstr(buf, "GET / HTTP/1.1")){
            res = "HTTP/1.1 200 OK\r\nContent-Type: text;  /html\r\n\r\n<html><h1> <meta charset =utf-8> HI </h1></html>\r\n\r\n";

        }
        else if(strstr(buf, "GET /close HTTP/1.1")){
            break;
        }
        else if(strstr(buf, "GET /3Week HTTP/1.1")){
            res = "HTTP/1.1 200 OK\r\nContent-Type: text;  /html\r\n\r\n<html><h1> <meta charset =utf-8>파일 리버싱 -><br> $ 리버싱 분석 방법은 크게 2가지로 나뉜다. 정적 분석과 동적 분석이 있다.<br> 정적 분석 -<br> 파일의 겉 모습을 관찰하여 분석하는 방법이다. 정적 분석 단계에서는 파일을 실행하지 않는다.<br> 파일의 종류 파일의 종류(EXE, DLL, DOC, ZIP 등), 크기, 헤더(PE) 정보, Import/Export API, 내부 문자열, 실행 압축 여부, 등록정보, 디버깅 정보, 디지털 인증서 등의 다양한 내용을 확인하는 것입니다.<br></h1></html>\r\n\r\n";
        }
        else{
            res = "HTTP/1.1 404 Not Found\r\nContent-Type: text/html\r\n\r\n<html><h1>404 Not Found</h1></html>\n\r\n";
            }

        write(cli_sock, res, strlen(res));

        close(cli_sock);
    }    
    close(sock);
    printf("close");
}
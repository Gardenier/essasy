####查看端口占用
* 1. 查看
   * `sudo lsof -i tcp:8888`  8888是查看的端口号
   * 得到结果 COMMAND  PID     USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    2383 gardenia   13u  IPv4 0x40cbab4c18f02ca5      0t0  TCP localhost:ddi-tcp-1 (LISTEN)
* 2. 杀进程
   * `sudo kill -9 2383` 根据PID杀进程
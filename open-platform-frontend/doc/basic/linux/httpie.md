http
usage: http-script.py [--json] [--form] [--pretty {all,colors,format,none}]
                      [--style STYLE] [--print WHAT] [--verbose] [--headers]
                      [--body] [--stream] [--output FILE] [--download]
                      [--continue]
                      [--session SESSION_NAME_OR_PATH | --session-read-only SESSION_NAME_OR_PATH]
                      [--auth USER[:PASS]] [--auth-type {basic,digest}]
                      [--proxy PROTOCOL:PROXY_URL] [--follow]
                      [--verify VERIFY] [--cert CERT] [--cert-key CERT_KEY]
                      [--timeout SECONDS] [--check-status] [--ignore-stdin]
                      [--help] [--version] [--traceback] [--debug]
                      [METHOD] URL [REQUEST_ITEM [REQUEST_ITEM ...]]
http-script.py: error: too few arguments


如果能看到此，就说明ok了
二、基本操作

模拟提交表单
http -f POST yhz.me username=nate

显示详细的请求
http -v yhz.me

只显示Header
http -h yhz.me

只显示Body
http -b yhz.me

下载文件
http -d yhz.me

请求删除的方法
http DELETE yhz.me

传递JSON数据请求(默认就是JSON数据请求)
http PUT yhz.me name=nate password=nate_password
如果JSON数据存在不是字符串则用:=分隔，例如
http PUT yhz.me name=nate password=nate_password age:=28 a:=true streets:='["a", "b"]'

模拟Form的Post请求, Content-Type: application/x-www-form-urlencoded; charset=utf-8
http --form POST yhz.me name='nate'
模拟Form的上传, Content-Type: multipart/form-data
http -f POST example.com/jobs name='John Smith' file@~/test.pdf

修改请求头, 使用:分隔
http yhz.me  User-Agent:Yhz/1.0  'Cookie:a=b;b=c'  Referer:http://yhz.me/

认证
http -a username:password yhz.me
http --auth-type=digest -a username:password yhz.me

使用http代理
http --proxy=http:http://192.168.1.100:8060 yhz.me
http --proxy=http:http://user:pass@192.168.1.100:8060 yhz.me
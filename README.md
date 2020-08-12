для мини деплоя

для создания alias выполнить
vim ~/.zshrc
alias <имя алиаса>=<путь до скрипта>  
`#alias bf='/Users/Eugene/Desktop/scripts/bf'`
  
для создания сертификатов на подключение к серваку можно воспользоваться 
этой ссылкой  
https://www.shellhacks.com/ru/ssh-login-without-password/

ssh-keygen  
ssh-copy-id -i ~/.ssh/id_rsa.pub UserName@RemoteServer  
ssh-add

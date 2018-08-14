<?php
    $url_1 = "https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
    $url_2 = "https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
    $data1= file_get_contents($url_1);
    $data1=json_decode($data1);//接受一个 JSON 格式的字符串并且把它转换为 PHP 变量 
    $data2=file_get_contents($url_2);
    $data2=json_decode($data2);
    $arr=Array($data1,$data2);
    echo json_encode($arr);//把获取的php数据转化成,返回 value 值的 JSON 形式 
  
?>
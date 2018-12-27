<?php 
    $style = "<p style='color:black; text-align: center;
            font-size:100pt;
            font-family: -apple-system, monospace, Helvetica, Arial;
            color:SlateGrey;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); '>"."";

    $title= "<title>";

    echo $style.$_SERVER['REMOTE_ADDR'];
    echo $title.$_SERVER['REMOTE_ADDR'];
?>
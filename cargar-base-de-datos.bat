@echo off
setlocal
cd /d "%~dp0"
set LOG=%~dp0resultado-carga.log
echo Ruta Vital - carga de la base de datos > "%LOG%"
echo %DATE% %TIME% >> "%LOG%"

rem La cadena de conexion se lee de un archivo fuera del repositorio para no subirla a GitHub.
set URIFILE=%~dp0..\mongodb-uri.txt
if not exist "%URIFILE%" (
  echo ERROR: falta el archivo %URIFILE% con la cadena de conexion. >> "%LOG%"
  echo FIN-ERROR >> "%LOG%"
  exit /b 1
)
set /p MONGODB_URI=<"%URIFILE%"

set MSHDIR=%USERPROFILE%\.rutavital\mongosh-2.3.8-win32-x64
if not exist "%MSHDIR%\bin\mongosh.exe" (
  echo Descargando mongosh 2.3.8... >> "%LOG%"
  powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ErrorActionPreference='Stop'; $d=Join-Path $env:USERPROFILE '.rutavital'; New-Item -ItemType Directory -Force -Path $d | Out-Null; $z=Join-Path $d 'mongosh.zip'; Invoke-WebRequest -Uri 'https://downloads.mongodb.com/compass/mongosh-2.3.8-win32-x64.zip' -OutFile $z -UseBasicParsing; Expand-Archive -Path $z -DestinationPath $d -Force; Remove-Item $z" >> "%LOG%" 2>&1
)
set MSH="%MSHDIR%\bin\mongosh.exe"

for %%s in (01-colecciones.js 02-indices.js 03-datos-simulados.js) do (
  echo --- %%s --- >> "%LOG%"
  %MSH% "%MONGODB_URI%" --quiet --file scripts\%%s >> "%LOG%" 2>&1
  if errorlevel 1 goto error
)
echo FIN-OK >> "%LOG%"
exit /b 0

:error
echo FIN-ERROR >> "%LOG%"
exit /b 1

@REM Licensed to the Apache Software Foundation (ASF)...

@if "%DEBUG%" == "" @echo off

@rem Set local scope for variables

setlocal

@rem Default MAVEN_OPTS

if not "%MAVEN_OPTS%" == "" goto endSetOpts

set MAVEN_OPTS=-Xmx1024m

:endSetOpts

@rem Execute mvn or mvnw.bin if available

if exist "%~dp0mvnw.bin" (

    "%~dp0mvnw.bin" %*

) else (

    mvn %*

)

goto end

:end

endlocal

@echo off

cd /d "%~dp0"

wt -w 0 new-tab --profile "Git Bash" ; split-pane --profile "Git Bash" ; split-pane --profile "Git Bash" -H
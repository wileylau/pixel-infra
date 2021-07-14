---
sidebar_position: 1
---

# Getting logs

Logcats are important debugging tools for developers! With logcat, we can clearly see what's happening and what's crashing, therefore having a better idea with fixing the reported bugs.

To grab logcats, I personally recommend ADB logs.

To start, you should have a PC, with [platform_tools](https://developer.android.com/studio/releases/platform-tools) downloaded.

Enable developer options in your phone by tapping "Build number" in About phone for 7 times, and enable `USB Debugging` from Developer options.

Connect your device to your PC by a cable.

Start ADB by using the command `.\adb.exe devices` in powershell. (Linux and Mac users please use `./adb devices`). 

A popup should appear on your device, asking you to whether trust the PC or not. Click `allow`. 

Start grabbing logs by typing in `.\adb.exe logcat -b all >> log.txt` in powershell (Linux and Mac users please use `./adb logcat -b all >> log.txt`) and then recreate the issue you wanna report.

After recreating the issue, hit Ctrl+C on your keyboard so the device stops logging.

`log.txt` will be your logcat. We will find logs useful when reporting a bug.
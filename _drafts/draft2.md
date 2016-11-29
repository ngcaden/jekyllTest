---
layout: post
title how to run raspberry pi virtual machine on raspberru pi
---

Virtual machines allow users to run another operating system on current operating system. This has multiple benefits: Compared to bootcamp, users do not need to reboot everytime they want to access another operating system. This allows power users to multitask and trying out systems concurrently. When trying out new operating system, users can start familiarise with the controls and command. 

In order to configure Raspberry Pi NOOB operating system on MAC, certain hardware limitations have to be accounted for. Firstly, Raspberrian OS runs on ARM. Currently, Mac runs on Intell processors. Thus, it would be unlikely that you can bootcamp NOOB. There are options such as VMWare Fusion which is pre-made virtual machine application. However, VMWare currently do not support ARM. 

The best solution would be to us QEMU on MacOS

Go to http://wiki.qemu.org/Download


And download the latest release, which currently http://wiki.qemu-project.org/download/qemu-2.7.0.tar.bz2

Go to downloaded file and extract (default using Archive Utility on MacOs).


Open Terminal and move to the directory of the extracted file

cd ~/Downloads/qemu-2.7.0

Attempt to configure would returns:

ERROR: glib-2.22 gthread-2.0 is required to compile QEMU

Next step, dependencies have to be installed: glib-2.22. and gthread-2.7.0

Download the necessary files:
https://download.gnome.org/sources/glib/2.22/glib-2.22.5.tar.bz2

Extract glib-2.22.5

cd the folder glib-2.22.5

./configure returns: 

*** You must have either have gettext support in your C library, or use the
*** GNU gettext library. (http://www.gnu.org/software/gettext/gettext.html


Get the lastest gettext release from http://ftp.gnu.org/pub/gnu/gettext/

http://ftp.gnu.org/pub/gnu/gettext/gettext-latest.tar.gz

Extract and cd the for gettext

./configure 

make

make install



Sucess, Go to glib-2.22.5

./configure

make

gconvert.c:55:2: error: GNU libiconv not in use but included iconv.h is from
      libiconv
#error GNU libiconv not in use but included iconv.h is from libiconv
 ^


 open glib folder in Finder,

 open gconvert.c in texteditor

 find this passage
 #if defined(USE_LIBICONV_GNU) && !defined (_LIBICONV_H)
#error GNU libiconv in use but included iconv.h not from libiconv
#endif
#if !defined(USE_LIBICONV_GNU) && defined (_LIBICONV_H)
#error GNU libiconv not in use but included iconv.h is from libiconv
#endif


edit to this 

#if !(defined(__APPLE__) && defined(__LP64__)) && !defined(USE_LIBICONV_GNU) && defined (_LIBICONV_H)

make again

make install




Download gthread-2.0:







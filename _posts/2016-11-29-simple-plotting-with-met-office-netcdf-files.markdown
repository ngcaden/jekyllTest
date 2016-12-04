---
title: Simple Plotting with MET Office netCDF Files
date: 2016-11-29 00:00:00 +00:00
layout: post
author: Quang Nguyen
---

netCDF files are Relational Database files. They are widely used in meteorology. The UK MET Office is no exception. Their open data are often published in format of netCDF. 

There are plenty of libraries for manipulating these files. However, most of them depends on netCDF4 library for unpacking the files. Installation can be done with 

{% highlight bash%}
$ pip install netCDF4
{% endhighlight %}
Moving on to the manipulation of the file, xarray will be utilised. Neverthless, there are alternative programmes for manipulating the files such as pandas, IRIS (provided by the UK MET Office themselves) or numpy. The choice for xarray were due to the fact that it supports indexing by name, very well-documented and supports multi-dimensional arrays. For comparison against pandas and key features of xarray. Installation can again be done with 

{% highlight bash%}
$ pip install xarray
{% endhighlight %}

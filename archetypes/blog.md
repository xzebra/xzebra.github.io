---
title: "[[ .Title ]]" 
description: "[[ .Description ]]"
cover:
  image: "[[ .Banner ]]"
date: [[ .CreationDate.Format "2006-01-02T15:04:05+07:00" ]]
lastmod: [[ .LastModified.Format "2006-01-02T15:04:05+07:00" ]]
author: "[[ .Author ]]"
tags:[[ range .Tags ]]
    - "[[ .Name ]]"[[end]]
categories:[[ range .Categories ]]
    - "[[ .Name ]]"[[end]]
series: [[ range .Properties.Series.MultiSelect ]]
    - "[[ .Name ]]"[[end]]
draft: false
---

[[/* Check machine categories */ -]]
[[$hackTheBox := 0 -]]
[[$active := 0 -]]
[[range .Categories -]]
    [[ if eq .Name "hackthebox" -]]
        [[ $hackTheBox = 1 -]]
    [[ end -]]
    [[ if eq .Name "active" -]]
        [[- $active = 1 -]]
    [[ end -]]
[[end -]]
[[/* Check if it is a hackthebox active machine */ -]]

[[- if (and $hackTheBox $active) -]]
[[/* Check if it is a windows machine */ -]]
[[$windows := 0 -]]
[[range .Tags -]]
    [[ if eq .Name "windows" -]]
        [[ $windows = 1 -]]
    [[ end -]]
[[ end -]]
[[ .Description ]]

{{% center %}}
This machine is currently **active**. Please enter the [[if $windows]]Administrator hash in SAM file[[else]]root hash (or the whole root line if there is no password hash) in `/etc/shadow`[[end]], not the `root.txt` flag.
{{% /center %}}

[[$password := rich .Properties.Password.RichText -]]
[[$censored := printf "%c%s%c" (index $password 0) (repeat "*" (sub (len $password) 1)) (index $password (sub (len $password) 1)) -]]
{{% hugo-encryptor pass="[[$password]]" placeholder="[[$censored]]" %}}
[[.Content]]
{{% /hugo-encryptor %}}
[[ else]]
[[ .Content ]]
[[ end ]]

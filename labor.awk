#!/usr/bin/awk -f

{
  split($3, l, "-")
  for(i = 1; i <= length(l); ++i)
    print l[i]
}

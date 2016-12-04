#!/usr/bin/zsh

echo "Total labors done by $1:"
total=`cat labor.csv | \
  grep $1 | \
  sed 's/2\([a-z]\+\)/\1-\1/g' | \
  awk -F, -f labor.awk`
echo $total | sort | uniq -c
echo "Or `echo $total | wc -l` labors."

echo
echo "Labors per month done by $1:"

months=(`cat labor.csv | \
  tail -n +2 | \
  awk -F, '{ print $1 }' | \
  awk -F"-" '{ print $2}' | \
  sort | \
  uniq | \
  tr '\n ' ' '`)

for month in $months; do
  echo "On `date -d 2016-$month-01 +%B`:"

  labors=`cat labor.csv | \
  grep $1 | \
  grep "2016-$month" | \
  sed 's/2\([a-z]\+\)/\1-\1/g' | \
  awk -F, -f labor.awk`

  echo $labors | sort | uniq -c
  echo "Or `echo $labors | wc -l` labors."
  echo
done

echo
echo "Labors per week done by $1:"

weeks=(`cat labor.csv | \
  tail -n +2 | \
  awk -F, '{ print $1 }' | \
  xargs -n 1 -I {} date -d {} +%W | \
  sort | \
  uniq | \
  tr '\n' ' '`)

for week in $weeks; do
  echo "On week #$week:"

  labors=`cat labor.csv | \
    grep $1 | \
    awk -F, -v week=$week \
      '{ "date -d "$1" +%W" | getline cw; if ( cw == week ) print $0 }' | \
  sed 's/2\([a-z]\+\)/\1-\1/g' | \
  awk -F, -f labor.awk`

  echo $labors | sort | uniq -c
  echo "Or `echo $labors | wc -l` labors."
done

#!/bin/bash

SIZE="250"

WD="$(pwd)"
for dir in $(ls "${WD}/static/product/"); do
    echo $dir
    [[ ! -d "${WD}/static/product/${dir}" ]] && continue
    CD="${WD}/static/product/${dir}"

    if [[ -f "${CD}/${dir}.jpg" ]]; then
        echo ${dir}
        convert "${CD}/${dir}.jpg" -resize "${SIZE}x${SIZE}" -strip "${CD}/thumb.${dir}.jpg"
    fi

    if [[ ! -d "${CD}/photo" ]]; then
        continue
    else
        mkdir -p "${CD}/thumb"
    fi

    for file in $(ls "${CD}/photo"); do
        echo ${file}
        convert "${CD}/photo/${file}" -resize "${SIZE}x${SIZE}" -strip "${CD}/thumb/${file}"
    done
done

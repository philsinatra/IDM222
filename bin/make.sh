#!/bin/bash
cd ${0%/*}

echo "Downloading instructor materials"
curl http://digm.drexel.edu/crs/IDM222/cdn/IDM222-W08.md -o ../instructor_materials/IDM222-W08.md
echo "Done"
echo ""
echo "Downloading image assets"
curl -LOk http://digm.drexel.edu/crs/IDM222/cdn/week4/images.zip
echo "Done"
echo ""
echo "Extracting assets"
mv images.zip ../examples/week4/pictures/.
cd ../examples/week4/pictures/
unzip images.zip
rm images.zip
echo "Done"
cd -
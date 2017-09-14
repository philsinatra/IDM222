#!/bin/bash
cd ${0%/*}

# Retrieve assignment submission JSON data.
cd ../assignments/data/

COUNTER=1
while [ $COUNTER -lt 6 ]; do
  curl -O http://digm.drexel.edu/crs/IDM222/assignments/data/assignment_submission_{$COUNTER}.json
  let COUNTER=COUNTER+1
done

cd -

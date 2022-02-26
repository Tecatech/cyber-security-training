#!/bin/bash

# Please do not change this value, it won't help you to solve the task :/
# It just ensures to restart the server when someone tries to read all zeros from /dev/zero
echo 1000 > /proc/self/oom_score_adj && \
ulimit -v `expr 1024 \* 1024 \* "${NODE_VMEM:-2}"` && \
npm start

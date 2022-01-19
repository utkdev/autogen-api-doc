#!/bin/bash
cd /tmp/

pm2 delete all
pm2 start server.js
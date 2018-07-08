#!/usr/bin/env bash
readonly dir="/git/config/${CONFIG_PATH}"
echo "Customizing the AM web application"
echo ""

echo "Available environment variables:"
echo ""
env
echo ""

# Copy the web.xml file that is in the same directory as this script to the
# webapps/openam/WEB-INF directory
#cp /git/config/${CONFIG_PATH}/web.xml ${CATALINA_HOME}/webapps/openam/WEB-INF

cp -r ${dir}/XUI/* ${CATALINA_HOME}/webapps/openam/XUI/

echo "Finished customizing the AM web application"
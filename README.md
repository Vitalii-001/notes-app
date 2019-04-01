# Mongo server start/stop

- sudo systemctl start/stop mongodb

# ENOSPC error and how to solve
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

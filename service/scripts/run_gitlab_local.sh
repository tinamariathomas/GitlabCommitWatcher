docker run --publish 8443:443 --publish 3002:80 --publish 2222:22 \
--name gitlab-dev --env GITLAB_ROOT_PASSWORD=root1234 gitlab/gitlab-ce
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install dependencies
RUN apt-get update && apt-get install -y curl git libssl-dev libreadline-dev zlib1g-dev

# Install RVM (Ruby Version Manager)
RUN curl -sSL https://get.rvm.io | bash -s stable

# Load RVM into shell and install Ruby 3.2.3
RUN /bin/bash -c "source /etc/profile.d/rvm.sh && rvm install 3.2.3 && rvm use 3.2.3 --default"

# Set shell to always use RVM
ENV PATH="/usr/local/rvm/bin:$PATH"

# Set working directory
WORKDIR /workspace
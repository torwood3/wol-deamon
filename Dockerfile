# Lets not just use any old version but pick one
FROM node:6.9.0

# This is needed for flow, and the weirdos that built it in ocaml:
RUN apt-get update && apt-get install -y libelf1

RUN useradd jenkins --shell /bin/bash --create-home
USER jenkins
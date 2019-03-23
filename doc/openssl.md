# openssl

```bash {.copy-clip}

Last login: Fri Mar 22 19:57:04 on ttys001
Flavs:~ Flavor$ brew install httpie
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 2 taps (homebrew/core and homebrew/cask).
==> Updated Formulae
ffmpeg                                                                                                 jpeg-turbo

==> Installing dependencies for httpie: openssl and sqlite
==> Installing httpie dependency: openssl
==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2r.mojave.bottle.tar.gz
######################################################################## 100.0%
==> Pouring openssl-1.0.2r.mojave.bottle.tar.gz
==> Caveats
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

openssl is keg-only, which means it was not symlinked into /usr/local,
because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have openssl first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl/include"

For pkg-config to find openssl you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl/lib/pkgconfig"

==> Summary
🍺  /usr/local/Cellar/openssl/1.0.2r: 1,795 files, 12.1MB
==> Installing httpie dependency: sqlite
==> Downloading https://homebrew.bintray.com/bottles/sqlite-3.27.2.mojave.bottle.tar.gz
######################################################################## 100.0%
==> Pouring sqlite-3.27.2.mojave.bottle.tar.gz
==> Caveats
sqlite is keg-only, which means it was not symlinked into /usr/local,
because macOS provides an older sqlite3.

If you need to have sqlite first in your PATH run:
  echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.bash_profile

For compilers to find sqlite you may need to set:
  export LDFLAGS="-L/usr/local/opt/sqlite/lib"
  export CPPFLAGS="-I/usr/local/opt/sqlite/include"

For pkg-config to find sqlite you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/sqlite/lib/pkgconfig"

==> Summary
🍺  /usr/local/Cellar/sqlite/3.27.2: 11 files, 3.7MB
==> Installing httpie
==> Downloading https://homebrew.bintray.com/bottles/httpie-1.0.2.mojave.bottle.1.tar.gz
######################################################################## 100.0%
==> Pouring httpie-1.0.2.mojave.bottle.1.tar.gz
🍺  /usr/local/Cellar/httpie/1.0.2: 899 files, 10.5MB
==> Caveats
==> openssl
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

openssl is keg-only, which means it was not symlinked into /usr/local,
because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have openssl first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl/include"

For pkg-config to find openssl you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl/lib/pkgconfig"

==> sqlite
sqlite is keg-only, which means it was not symlinked into /usr/local,
because macOS provides an older sqlite3.

If you need to have sqlite first in your PATH run:
  echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.bash_profile

For compilers to find sqlite you may need to set:
  export LDFLAGS="-L/usr/local/opt/sqlite/lib"
  export CPPFLAGS="-I/usr/local/opt/sqlite/include"

For pkg-config to find sqlite you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/sqlite/lib/pkgconfig"

Flavs:~ Flavor$ 

```
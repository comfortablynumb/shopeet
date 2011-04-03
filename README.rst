Shopeet - Una solución de E-Commerce para Symfony 2
===================================================

Shopeet tiene el mismo objetivo que tuvo Jobeet para Symfony 1.x. Es el resultado final de un tutorial que explica día a día como desarrollar una aplicación web de E-Commerce, mostrando en el camino todos y cada uno de los componentes de Symfony 2. Los temas del tutorial no se limitan solo a Symfony. También tratamos temas de última generación dentro del desarrollo web, incluyendo HTML 5, CSS3, aplicaciones RIA, entre otros.

Para generar una version HTML de la documentación, deberás tener instaladas las siguientes herramientas:

* `Docutils`_
* `Sphinx`_
* `Pygments`_

Una vez que tengas todo instalado, ve al directorio *docs/tutorial/es* y ejecuta el comando:

    make html

La documentación estara disponible en el directorio _build.


Instalación:
------------

Primero debes clonar el proyecto:

.. code-block:: php
    git clone git@github.com:comfortablynumb/shopeet.git

Luego deberás ingresar al directorio que contiene el proyecto y ejecutar el script de instalación de vendors:

.. code-block:: php
    cd shopeet
    
    ./bin/vendors.sh

Una vez instalados los vendors, lo único que te faltará es `descargar el ExtJS 3.3.1`_ y colocar los siguientes archivos en la carpeta *src/ShopeetGroup/BackendBundle/Resources/public/js/vendor/extjs*:

* ext-base-debug.js
* ext-base.js
* ext-all-debug.js
* ext-all.js
* carpeta resources

Este paso será agregado próximamente al script vendors.sh y se realizará automáticamente al momento de su ejecución en el paso anterior.


Librerías y Recursos utilizados:
--------------------

* `ExtJS 3.3.1`_
* Iconos de `FamFamFam`_

.. _Docutils: http://docutils.sourceforge.net/
.. _Sphinx: http://sphinx.pocoo.org/index.html
.. _Pygments: http://pygments.org/docs/installation/
.. _descargar el ExtJS 3.3.1: http://www.sencha.com/products/extjs/download/ext-js-3.3.1/0
.. _FamFamFam: http://www.famfamfam.com/
.. _ExtJS 3.3.1: http://www.sencha.com/products/extjs/

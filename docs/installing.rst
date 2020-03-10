
************
Installation
************

Via Git or Download
===================

Symlink or subtree the ``determined_ai_sphinx_theme`` repository into your documentation at
``docs/_themes/lightning_sphinx_theme`` then add the following two settings to your Sphinx
``conf.py`` file:

.. code:: python

    html_theme = "determined_ai_sphinx_theme"
    html_theme_path = ["_themes", ]


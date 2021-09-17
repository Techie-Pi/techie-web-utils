# Warning! This package has been deprecated
> The repo and package will stay up, but its use is discouraged, no security updates nor features will be added.
> Use at your own risk.

# @techiepi/utils

The utils.js I use in my web apps, which has the following features:
- Simple i18n with a JSON file (``config/translations.json``) and a module with ``getString(stringId, language, renderData)``
- ``console.log`` migration into ``log4js``, replaces the ``console`` object (if imported to do that)
- Basic UI management, create elements in the UI, support for multiple libraries
- Bundling with ``webpack``

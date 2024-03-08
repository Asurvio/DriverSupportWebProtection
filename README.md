Asurvio Page Boost -- AdGuard relabel

"yarn install" to get packages

"yarn filters" to update filters. This does not need to be done with every commit.
IMPORTANT: If you update the filters, make sure to add our whitelisted domains into filter_2.txt so it's part of the base list.
Check the Title at the top of the file to ensure it's the right one in case they change the file name: "Title: AdGuard Base filter"
Our domain whitelist is in Confluence.
Put each domain on its own line in the following format, replacing "example.com" with the domain to whitelist:
@@||example.com^$document
The "@@" make it an exception. I don't know why some questionable-looking sites are included by default as well,
making it look wrong by association, but this makes it exclude our sites from the filter.
After that, run "yarn filters-convert" to convert them to the declarative format the app actually reads, then build the project.

"yarn dev" for dev build

"yarn release" for release build

builds will go in the "build" folder and can be loaded into Chrome through the
extension manager by clicking the "load unpacked" button and selecting the folder

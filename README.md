# whosonfirst-tests

Testing known-knowns and properties in Who's On First records.

_2017-05-12: This document should be considered a work-in-progress_

## Types of tests

### Validating known-knowns in Who's On First

- **test_belongsto.js**: A routine test to verify `wof:belongsto` properties.
  - This test envokes a list of `wof:id` values and the known values in that record's `wof:belongsto` property. This test should be run locally when updating and rebuilding hierarchies to verify that no values are being stripped out of the `wof:belongsto` property.
  
- **test_isparent.js**: A routine test to verify `wof:parent_id` properties.
  - This test envokes a list of `wof:id` values and the known values in that record's `wof:parent_id` property. This test should be run locally when updating records to verify that no records are incorrectly given a new `wof:parent_id` value.

### Testing Who's On First properties

- **test_lang_names.js**: A test to ensure a record or set of records has a `name:eng_x_preferred` property.
  - This test can be used as a one-off to verify a record has a specified property. As it stands, this test checks for the `name:eng_x_preferred` property, but can be configured to check of other properties.
  
- **test_official_lang_names.js**: A test to ensure a record or set of records has a `wof:lang` property, as well as a `name:[lang]_x_preferred` property for the `wof:lang` value.
  - This test checks for two separate things in a Who's On First record:
    - Verifies that a `wof:lang` property exists and returns the value of that property.
    - Verifies that a record also has a `name:[lang]_x_preferred` property, where `[lang]` is equal to the value of the `wof:lang` property.
    
- **test_superseded_by.js**: A test to validate records' `wof:superseded_by` and `wof:superseded` properties, by doing the following:
  - Checks that a record's (record A) `wof:superseded_by` value matches the `wof:id` of an existing record (record B).
  - If so, checks that record B's `wof:supersedes` property value matches record A's `wof:id` value.
  
- **wk_mismatch**: _(in folder)_ A test to validate records' `wk:*` properties, by doing the following:
  - Checks that a record's `wk:latitude` and `wk:longitude` values fall within it's parent's geometry. 
  
## See also

_https://github.com/whosonfirst_

_https://github.com/whosonfirst/whosonfirst-json-schema_

_https://github.com/whosonfirst/py-mapzen-whosonfirst-validator_

_https://github.com/whosonfirst/whosonfirst-www-boundaryissues_

# whosonfirst-tests

_2017-03-10: This document should be considered a work-in-progress_

Let's start with what has happened already, before this part comes in. A JSON Schema has been used to generate a Minimum Viable WOF document:

`$schema_fields = wof_schema_fields($ref);`

Next, values from a GeoJSON record get merged into that schema structure
using an invented (i.e., not-part-of-JSON-schema) hash key "_value".

`$schema_fields = wof_render_insert_values($schema_fields, $values);`

That schema gets handed off to a Smarty template inc_json_schema_field.txt
which decides what kind of thing it's dealing with. In the simplest case
it comes up with a normal `<input>` field. Otherwise it includes one of
inc_json_schema_object.txt or inc_json_schema_array.txt (which in turn
include inc_json_schema_field.txt).

In the case of inc_json_schema_object.txt, a `<table>` with `<tr>` elements
gets generated, each one with possible 'class' attributes defined:

  - property-editable
  - property-visible

By default a property `<tr>` is hidden by CSS, but property-visible
overrides that to make the property visible. Likewise, `<input>'s` include
a `disabled="disabled"` attribute, which gets overridden in JS if the
property includes property-editable.

This is all to say, you can modify the edit behavior for each property
by adjusting the data structure below. The '_default' case is what it
sounds like.

## Test Descriptions

#### Validation Tests

Validation tests are preformed on individual records in Who's On First. These tests are specific in function and validate assumptions to properties in a specific record. A list of existing tests:

**test_belongsto**

This test imports a list of Who's On First record ids (`wof:id`), as well as the ids of features in the record's `wof:hierarchy` property. An example for San Francisco, below:

```
condition(85922583, [102191575, 85633793, 85688637, 102087579])

```

The `wof:id` for San Francisco, `85922583`, is listed along with all correct and known `wof:id` values for all records in San Francisco's `wof:hierarchy` property. Recording known hierarchies and testing against these known values is important to ensuring we don't regress when updating records.
  
**test_isparent**

This test imports a list of Who's On First record ids (`wof:id`), as well as the ids of features in the record's `wof:parent` property. An example for San Francisco, below:

```
isparent(404227491, 'country', 85633237)
```
The `wof:id` for Dél-Dunántúl, `404227491`, is listed along with the correct and known `wof:id` value for Dél-Dunántúl's parent record, the country of Hungary. Recording known parent ids and testing against these known values is important to ensuring we don't regress when updating records.

#### Type Tests

## See also

_https://github.com/whosonfirst/whosonfirst-json-schema_

_https://github.com/whosonfirst/py-mapzen-whosonfirst-validator_

_https://github.com/whosonfirst/whosonfirst-www-boundaryissues_
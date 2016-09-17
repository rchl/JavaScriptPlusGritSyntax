// SYNTAX TEST "Packages/User/JavaScript-grit.sublime-syntax"
// <- source.js.grit

// Disabled block:

new class Foo {};

var i;
// <- storage.type.js
<if expr="False">
// <- keyword.control.preprocessor.disabled
var j;
// <- comment.block
</if>
// <- keyword.control.preprocessor
var j;
// <- storage.type.js

// Enabled block:

<if expr="is_win">
// <- keyword.control.preprocessor
var j;
// <- storage.type.js
</if>
// <- keyword.control.preprocessor
var h;
// <- storage.type.js

// Disabled block nested inside enabled:

<if expr="is_win">
// <- keyword.control.preprocessor
var h;
// <- storage.type.js
<if expr="False">
// <- keyword.control.preprocessor.disabled
var h;
// <- comment.block
</if>
// <- keyword.control.preprocessor
var h;
// <- storage.type.js
</if>
// <- keyword.control.preprocessor
var h;
// <- storage.type.js

// Enabled block nested inside disabled:

<if expr="False">
// <- keyword.control.preprocessor.disabled
var h;
// <- comment.block
<if expr="is_mac">
// <- comment.block
var h;
// <- comment.block
</if>
// <- comment.block
var h;
// <- comment.block
</if>
// <- keyword.control.preprocessor
var h;
// <- storage.type.js

// Triple-nested block:

<if expr="False">
// <- keyword.control.preprocessor
<if expr="is_mac">
// <- comment.block
<if expr="is_mac">
// <- comment.block
</if>
// <- comment.block
</if>
// <- comment.block
</if>
// <- keyword.control.preprocessor


// Disabled block inside function block:

function() {
<if expr="False">
// <- keyword.control.preprocessor.disabled
</if>
// <- keyword.control.preprocessor.disabled
  var h;
//^^^ storage.type.js
}

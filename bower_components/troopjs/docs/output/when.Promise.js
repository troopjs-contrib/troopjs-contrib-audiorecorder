Ext.data.JsonP.when_Promise({"tagname":"class","name":"when.Promise","autodetected":{},"files":[{"filename":"Promise.js","href":"Promise.html#when-Promise"}],"alternateClassNames":["Promise"],"author":[{"tagname":"author","name":"Brian Cavalier","email":null}],"members":[{"name":"catch","tagname":"method","owner":"when.Promise","id":"method-catch","meta":{}},{"name":"delay","tagname":"method","owner":"when.Promise","id":"method-delay","meta":{}},{"name":"done","tagname":"method","owner":"when.Promise","id":"method-done","meta":{}},{"name":"else","tagname":"method","owner":"when.Promise","id":"method-else","meta":{}},{"name":"finally","tagname":"method","owner":"when.Promise","id":"method-finally","meta":{}},{"name":"inspect","tagname":"method","owner":"when.Promise","id":"method-inspect","meta":{}},{"name":"never","tagname":"method","owner":"when.Promise","id":"method-never","meta":{}},{"name":"progress","tagname":"method","owner":"when.Promise","id":"method-progress","meta":{}},{"name":"spread","tagname":"method","owner":"when.Promise","id":"method-spread","meta":{}},{"name":"tap","tagname":"method","owner":"when.Promise","id":"method-tap","meta":{}},{"name":"then","tagname":"method","owner":"when.Promise","id":"method-then","meta":{}},{"name":"timeout","tagname":"method","owner":"when.Promise","id":"method-timeout","meta":{}},{"name":"with","tagname":"method","owner":"when.Promise","id":"method-with","meta":{}},{"name":"yield","tagname":"method","owner":"when.Promise","id":"method-yield","meta":{}}],"aliases":{},"id":"class-when.Promise","short_doc":"A Promise represents the pending result of a computation that may not have completed yet. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"implementedBy":[],"mixins":[],"implements":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Promise</div><h4>Files</h4><div class='dependency'><a href='source/Promise.html#when-Promise' target='_blank'>Promise.js</a></div></pre><div class='doc-contents'><p>A Promise represents the pending result of a computation that may not have completed yet.</p>\n\n<h2>Promise states</h2>\n\n<p>A Promise starts in an <em>unresolved</em> or <em>pending</em> state.  For example, the Promise for a computation\nthat hasn't yet completed is in the <em>pending</em> state. At some point the computation will either complete\nsuccessfully, thus producing a result, or fail, either generating some sort of error or <em>reason</em> why\nit could not complete.</p>\n\n<p>If the computation completes successfully, its Promise will transition to the <em>fulfilled</em> state, and\nall consumers (see below) will be notified of the actual result. In other words, their callback will\nbe invoked and passed the result.</p>\n\n<p>If the computation fails, its Promise will transition to the <em>rejected</em> state, and all consumers will\nbe notified of the error or reason for the failure.  In other words, their <code>errorback</code> will be invoked\nand passed the result.</p>\n\n<p>Once in the fulfilled or rejected state, a Promise become <em>immutable</em>--neither its state nor its result\n(or error/reason) can be modified.</p>\n\n<h2>Consumers</h2>\n\n<p>A Promise can be safely given to any number of consumers, who can register to observe the result\n(or error/reason) of the promise using <a href=\"#!/api/when-method-constructor\" rel=\"when-method-constructor\" class=\"docClass\">when.constructor</a>, or the promise's <a href=\"#!/api/when.Promise-method-then\" rel=\"when.Promise-method-then\" class=\"docClass\">then</a>.</p>\n\n<pre><code>when(promise,\n  function(result) {\n    console.log(\"success: \" + result);\n  },\n  function(reason) {\n    console.log(\"failed: \" + reason);\n  }\n);\n</code></pre>\n\n<p>or similarly with <a href=\"#!/api/when.Promise-method-then\" rel=\"when.Promise-method-then\" class=\"docClass\">then</a></p>\n\n<pre><code>promise.then(\n  function(result) {\n    console.log(\"success: \" + result);\n  },\n  function(reason) {\n    console.log(\"failed: \" + reason);\n  }\n);\n</code></pre>\n\n<div class=\"notice\">\nDocumentation for this class comes from <a href=\"https://github.com/cujojs/when/blob/master/docs/api.md\">when.js</a>\nand is available under <a href=\"ttp://www.opensource.org/licenses/mit-license.php\">MIT license</a>.\n</div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-catch' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-catch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-catch' class='name expandable'>catch</a>( <span class='pre'>onRejected</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Arranges to call onRejected on the promise's rejection reason if it is rejected. ...</div><div class='long'><p>Arranges to call <code>onRejected</code> on the promise's rejection reason if it is rejected.</p>\n\n<pre><code>promise.catch(onRejected);\n// or\npromise.otherwise(onRejected);\n</code></pre>\n\n<p> It's a shortcut for:</p>\n\n<pre><code>promise.then(undefined, onRejected);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onRejected</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-delay' class='name expandable'>delay</a>( <span class='pre'>milliseconds</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new promise that will, after milliseconds delay, fulfill with the same value as promise. ...</div><div class='long'><p>Create a new promise that will, after <code>milliseconds</code> delay, fulfill with the same value as promise.</p>\n\n<pre><code>var delayedPromise = promise.delay(milliseconds);\n</code></pre>\n\n<p>If <code>promise</code> rejects, <code>delayedPromise</code> will be rejected immediately.</p>\n\n<pre><code>var delayed;\n\n// delayed is a pending promise that will become fulfilled\n// in 1 second with the value \"hello\"\ndelayed = when('hello').delay(1000);\n\n// delayed is a pending promise that will become fulfilled\n// 1 second after anotherPromise resolves, or will become rejected\n// *immediately* after anotherPromise rejects.\ndelayed = promise.delay(1000);\n\n// Do something 1 second after promise resolves\npromise.delay(1000).then(doSomething).catch(handleRejection);\n</code></pre>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>milliseconds</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Milliseconds to delay before resolving</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-done' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-done' class='name expandable'>done</a>( <span class='pre'>handleValue, [handlerError]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Consumes a promise as the final handler in a thenable chain. ...</div><div class='long'><p>Consumes a promise as the final handler in a thenable chain.</p>\n\n<pre><code>promise.done(handleValue, handleError);\n</code></pre>\n\n<p>One golden rule of promise error handling is:</p>\n\n<p>Either <code>return</code> the promise, thereby <em>passing the error-handling buck</em> to the caller, or call <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a> and <em>assuming\nresponsibility for errors</em>.</p>\n\n<p>While <a href=\"#!/api/when.Promise-method-then\" rel=\"when.Promise-method-then\" class=\"docClass\">then</a> is the primary API for transforming a promise's value and producing a new promise for the transformed\nvalue, <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a> is used to terminate a promise chain, and extract the final value or error. It signals that you\nare taking responsibility for the final outcome. If the chain was ultimately successful, <code>handleValue</code> will be\ncalled with the final value. If the chain was not successful and an error propagated to the end, <code>handleError</code> will be\ncalled with that error.</p>\n\n<p>Any error, either a returned rejection or a thrown exception, that propagates out of <code>handleValue</code> or <code>handleError</code>\nwill be rethrown to the host environment, thereby generating a loud stack trace (and in some cases, such as Node,\nhalting the VM). This provides immediate feedback for development time errors and mistakes, and greatly reduces\nthe chance of an unhandled promise rejection going silent.</p>\n\n<p>Note that there are still cases that <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a> simply cannot catch, such as the case of <em>forgetting to call\n<a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a>!</em> Thus, <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a> and the unhandled rejection monitor are complimentary in many ways. In fact,\nwhen the monitor is enabled, any error that escapes <code>handleValue</code> or <code>handleError</code> will also trigger the monitor.</p>\n\n<p>Since <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a>'s purpose is consumption rather than transformation, <a href=\"#!/api/when.Promise-method-done\" rel=\"when.Promise-method-done\" class=\"docClass\">done</a> always returns <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handleValue</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li><li><span class='pre'>handlerError</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-else' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-else' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-else' class='name expandable'>else</a>( <span class='pre'>defaultValue</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>If a promise is rejected, else catches the rejection and resolves the returned promise with a default value. ...</div><div class='long'><p>If a promise is rejected, <a href=\"#!/api/when.Promise-method-else\" rel=\"when.Promise-method-else\" class=\"docClass\">else</a> catches the rejection and resolves the returned promise with a default value.\nThis is a shortcut for manually <a href=\"#!/api/when.Promise-method-catch\" rel=\"when.Promise-method-catch\" class=\"docClass\">catch</a>ing a promise and returning a different value, as such:</p>\n\n<pre><code>var p1 = doAyncOperationThatMightFail();\nreturn p1.catch(function() {\n    return defaultValue;\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaultValue</span> : *<div class='sub-desc'><p>Default value to resolve with</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-finally' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-finally' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-finally' class='name expandable'>finally</a>( <span class='pre'>onFulfilledOrRejected</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Finally allows you to execute \"cleanup\" type tasks in a promise chain. ...</div><div class='long'><p>Finally allows you to execute \"cleanup\" type tasks in a promise chain.</p>\n\n<pre><code>promise.finally(onFulfilledOrRejected);\n// or\npromise.ensure(onFulfilledOrRejected);\n</code></pre>\n\n<p>It arranges for <code>onFulfilledOrRejected</code> to be called, <em>with no arguments</em>, when promise is either fulfilled or rejected.\n<code>onFulfilledOrRejected</code> cannot modify promise's fulfillment value, but may signal a new or additional error by\nthrowing an exception or returning a rejected promise.</p>\n\n<p><a href=\"#!/api/when.Promise-method-finally\" rel=\"when.Promise-method-finally\" class=\"docClass\">finally</a> should be used instead of <code>promise.always.</code> It is safer in that it <em>cannot</em> transform a failure\ninto a success by accident (which <code>always</code> could do simply by returning successfully!).</p>\n\n<p>When combined with <a href=\"#!/api/when.Promise-method-catch\" rel=\"when.Promise-method-catch\" class=\"docClass\">catch</a>, <a href=\"#!/api/when.Promise-method-finally\" rel=\"when.Promise-method-finally\" class=\"docClass\">finally</a> allows you to write code that is similar to the familiar\nsynchronous <code>catch/finally</code> pair. Consider the following synchronous code:</p>\n\n<pre><code>try {\n    return doSomething(x);\n} catch(e) {\n    return handleError(e);\n} finally {\n    cleanup();\n}\n</code></pre>\n\n<p>Using <a href=\"#!/api/when.Promise-method-finally\" rel=\"when.Promise-method-finally\" class=\"docClass\">finally</a>, similar asynchronous code (with <code>doSomething()</code> that returns a promise) can be written:</p>\n\n<pre><code>return doSomething()\n    .catch(handleError)\n    .finally(cleanup);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFulfilledOrRejected</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-inspect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-inspect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-inspect' class='name expandable'>inspect</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a snapshot descriptor of the current state of promise. ...</div><div class='long'><p>Returns a snapshot descriptor of the current state of <code>promise</code>.</p>\n\n<pre><code>var status = promise.inspect();\n</code></pre>\n\n<p>This descriptor is <em>not live</em> and will not update when <code>promise</code>'s state changes.\nThe descriptor is an object with the following properties. When promise is:</p>\n\n<ul>\n<li>pending: <code>{ state: 'pending' }</code></li>\n<li>fulfilled: <code>{ state: 'fulfilled', value: &lt;promise's fulfillment value&gt; }</code></li>\n<li>rejected: <code>{ state: 'rejected', reason: &lt;promise's rejection reason&gt; }</code></li>\n</ul>\n\n\n<p>While there are use cases where synchronously inspecting a promise's state can be helpful, the use of <a href=\"#!/api/when.Promise-method-inspect\" rel=\"when.Promise-method-inspect\" class=\"docClass\">inspect</a>\nis discouraged. It is almost always preferable to simply use <code>when()</code> or <a href=\"#!/api/when.Promise-method-then\" rel=\"when.Promise-method-then\" class=\"docClass\">then</a> to be notified when the\npromise fulfills or rejects.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Status object</p>\n<ul><li><span class='pre'>state</span> : \"pending\"|\"fulfilled\"|\"rejected\"<div class='sub-desc'><p>Promises current state</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>Promises fulfillment value</p>\n</div></li><li><span class='pre'>reason</span> : *<div class='sub-desc'><p>Promises rejection reason</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-never' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-never' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-never' class='name expandable'>never</a>( <span class='pre'></span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return a promise that remains pending forever ...</div><div class='long'><p>Return a promise that remains pending forever</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'><p>forever-pending promise.</p>\n</div></li></ul></div></div></div><div id='method-progress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-progress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-progress' class='name expandable'>progress</a>( <span class='pre'>onProgress</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers a handler for progress updates from promise. ...</div><div class='long'><p>Registers a handler for progress updates from <code>promise</code>. It is a shortcut for:</p>\n\n<pre><code>promise.then(void 0, void 0, onProgress);\n</code></pre>\n\n<p><strong>Notes on Progress events</strong></p>\n\n<p>Progress events are not specified in Promises/A+ and are optional in Promises/A.\nThey have proven to be useful in practice, but unfortunately, they are also underspecified,\nand there is no current <em>de facto</em> or agreed-upon behavior in the promise implementor community.</p>\n\n<p>In when.js, progress events will be propagated through a promise chain:</p>\n\n<ol>\n<li><p>In the same way as resolution and rejection handlers, your progress handler <em>MUST</em> return\na progress event to be propagated to the next link in the chain. If you return nothing, <code>undefined</code>\nwill be propagated.</p></li>\n<li><p>Also in the same way as resolutions and rejections, if you don't register a progress handler\n(e.g. .<code>then(handleResolve, handleReject &lt;no-progress-handler&gt;))</code>, the update will be propagated through.</p></li>\n<li><p><strong>This behavior will likely change in future releases</strong>: If your progress handler throws an exception,\nthe exception will be propagated to the next link in the chain.\nThe best thing to do is to ensure your progress handlers do not throw exceptions.</p>\n\n<blockquote><p><strong>Known Issue</strong>: If you allow an exception to propagate and there are no more progress\nhandlers in the chain, the exception will be silently ignored. We're working on a solution to this.</p></blockquote></li>\n</ol>\n\n\n<p>This gives you the opportunity to <em>transform</em> progress events at each step in the chain so that they\nare meaningful to the next step. It also allows you to choose <em>not</em> to transform them,\nand simply let them propagate untransformed, by not registering a progress handler.</p>\n\n<p>Here is an example:</p>\n\n<pre><code>function myProgressHandler(update) {\n    logProgress(update);\n    // Return a transformed progress update that is\n    // useful for progress handlers of the next promise!\n    return update + 1;\n}\n\nfunction myOtherProgressHandler(update) {\n    logProgress(update);\n}\n\nvar d = <a href=\"#!/api/when-method-defer\" rel=\"when-method-defer\" class=\"docClass\">when.defer</a>();\nd.promise.then(undefined, undefined, myProgressHandler);\n\nvar chainedPromise = d.promise.then(doStuff);\nchainedPromise.then(undefined, undefined, myOtherProgressHandler);\n\nvar update = 1;\nd.notify(update);\n\n// Results in:\n// logProgress(1);\n// logProgress(2);\n</code></pre>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onProgress</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-spread' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-spread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-spread' class='name expandable'>spread</a>( <span class='pre'>variadicOnFulfilled</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Arranges to call variadicOnFulfilled with promise's values, which is assumed to be an array, as its argument list,\ne.g. ...</div><div class='long'><p>Arranges to call <code>variadicOnFulfilled</code> with promise's values, which is assumed to be an array, as its argument list,\ne.g. <code>variadicOnFulfilled.spread(undefined, array)</code>.</p>\n\n<pre><code>promise.spread(variadicOnFulfilled);\n</code></pre>\n\n<p>It's a shortcut for either of the following:</p>\n\n<pre><code>// Wrapping variadicOnFulfilled\npromise.then(function(array) {\n    return variadicOnFulfilled.apply(undefined, array);\n});\n\n// Or using `when.apply`\npromise.then(when.apply(variadicOnFulfilled));\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>variadicOnFulfilled</span> : (<a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a>|*)[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-tap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-tap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-tap' class='name expandable'>tap</a>( <span class='pre'>onFulfilledSideEffect</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Executes a function as a side effect when promise fulfills. ...</div><div class='long'><p>Executes a function as a side effect when <code>promise</code> fulfills.</p>\n\n<pre><code>promise.tap(onFulfilledSideEffect);\n</code></pre>\n\n<p>Returns a new promise:</p>\n\n<ul>\n<li>If <code>promise</code> fulfills, <code>onFulfilledSideEffect</code> is executed:\n\n<ul>\n<li>If <code>onFulfilledSideEffect</code> returns successfully, the promise returned by <a href=\"#!/api/when.Promise-method-tap\" rel=\"when.Promise-method-tap\" class=\"docClass\">tap</a> fulfills with <code>promise</code>'s\noriginal fulfillment value. That is, <code>onfulfilledSideEffect</code>'s result is discarded.</li>\n<li>If <code>onFulfilledSideEffect</code> throws or returns a rejected promise, the promise returned by <a href=\"#!/api/when.Promise-method-tap\" rel=\"when.Promise-method-tap\" class=\"docClass\">tap</a> rejects with\nthe same reason.</li>\n</ul>\n</li>\n<li>If <code>promise</code> rejects, <code>onFulfilledSideEffect</code> is <em>not</em> executed, and the promise returned by <a href=\"#!/api/when.Promise-method-tap\" rel=\"when.Promise-method-tap\" class=\"docClass\">tap</a> rejects\nwith <code>promise</code>'s rejection reason.</li>\n</ul>\n\n\n<p>These are equivalent:</p>\n\n<pre><code>// Using only .then()\npromise.then(function(x) {\n    doSideEffectsHere(x);\n    return x;\n});\n\n// Using .tap()\npromise.tap(doSideEffectsHere);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFulfilledSideEffect</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-then' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-then' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-then' class='name expandable'>then</a>( <span class='pre'>onFulfilled, [onRejected], [onProgress]</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The primary API for transforming a promise's value and producing a new promise for the transformed result,\nor for han...</div><div class='long'><p>The primary API for transforming a promise's value and producing a new promise for the transformed result,\nor for handling and recovering from intermediate errors in a promise chain.</p>\n\n<pre><code>// Main promise API\nvar newPromise = promise.then(onFulfilled, onRejected, onProgress);\n</code></pre>\n\n<p>It arranges for:</p>\n\n<ul>\n<li><code>onFulfilled</code> to be called with the value after promise is fulfilled, or</li>\n<li><code>onRejected</code> to be called with the rejection reason after promise is rejected.</li>\n<li><code>onProgress</code> to be called with any progress updates issued by promise.</li>\n</ul>\n\n\n<p>Returns a trusted promise that will fulfill with the return value of either <code>onFulfilled</code> or <code>onRejected</code>,\nwhichever is called, or will reject with the thrown exception if either throws.</p>\n\n<p>A promise makes the following guarantees about handlers registered in the same call to <code>.then()</code>:</p>\n\n<ul>\n<li>Only one of <code>onFulfilled</code> or <code>onRejected</code> will be called, never both.</li>\n<li><code>onFulfilled</code> and <code>onRejected</code> will never be called more than once.</li>\n<li><code>onProgress</code> may be called multiple times.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFulfilled</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li><li><span class='pre'>onRejected</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>onProgress</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-timeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-timeout' class='name expandable'>timeout</a>( <span class='pre'>milliseconds, [reason]</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new promise that will reject after a timeout if promise does not fulfill or reject beforehand. ...</div><div class='long'><p>Create a new promise that will reject after a timeout if <code>promise</code> does not fulfill or reject beforehand.</p>\n\n<pre><code>var node = require('when/node');\n\n// Lift fs.readFile so it returns promises\nvar readFile = node.lift(fs.readFile);\n\n// Try to read the file, but timeout if it takes too long\nfunction readWithTimeout(path) {\n    return readFile(path).timeout(500);\n}\n</code></pre>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>milliseconds</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Milliseconds to wait before timeout</p>\n</div></li><li><span class='pre'>reason</span> : * (optional)<div class='sub-desc'><p>Custom reason for the timeout rejection</p>\n<p>Defaults to: <code>Error</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-with' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-with' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-with' class='name expandable'>with</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new promise that follows promise, but which will invoke its handlers with their this set to object. ...</div><div class='long'><p>Creates a new promise that follows <code>promise</code>, but which will invoke its handlers with their <code>this</code> set to object.\nNormally, promise handlers are invoked with no specific <code>thisArg</code>, so with can be very useful when bridging\npromises to object-oriented patterns and libraries.</p>\n\n<blockquote><p><strong>Note</strong>: Promises returned from <code>with/withThis</code> are NOT Promises/A+ compliant,\nspecifically violating <a href=\"http://promisesaplus.com/#point-41\">2.2.5</a></p></blockquote>\n\n<p>For example:</p>\n\n<pre><code>function Thing(value, message) {\n    this.value = value;\n    this.message = message;\n}\n\nThing.prototype.doSomething = function(x) {\n    var promise = doAsyncStuff(x);\n    return promise.with(this) // Set thisArg to this thing instance\n        .then(this.addValue)  // Works since addValue will have correct thisArg\n        .then(this.format);   // all subsequent promises retain thisArg\n};\n\nThing.prototype.addValue = function(y) {\n    return this.value + y;\n};\n\nThing.prototype.format = function(result) {\n    return this.message + result;\n};\n\n// Using it\nvar thing = new Thing(41, 'The answer is ');\n\nthing.doSomething(1)\n    .with(console) // Re-bind thisArg now to console\n    .then(console.log); // Logs 'The answer is 42'\n</code></pre>\n\n<p>All promises created from <code>boundPromise</code> will also be bound to the same thisArg until <a href=\"#!/api/when.Promise-method-with\" rel=\"when.Promise-method-with\" class=\"docClass\">with</a> is used\nto re-bind or unbind it. In the previous example, the promise returned from <code>thing.doSomething</code> still has\nits thisArg bound to <code>thing</code>. That may not be what you want, so you can unbind it just before returning:</p>\n\n<pre><code>Thing.prototype.doSomething = function(x) {\n    var promise = doAsyncStuff(x);\n    return promise.with(this)\n        .then(this.addValue)\n        .then(this.format)\n        .with(); // Unbind thisArg\n};\n</code></pre>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-yield' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='when.Promise'>when.Promise</span><br/><a href='source/Promise.html#when-Promise-method-yield' target='_blank' class='view-source'>view source</a></div><a href='#!/api/when.Promise-method-yield' class='name expandable'>yield</a>( <span class='pre'>promiseOrValue</span> ) : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a yielded promise\n\noriginalPromise.yield(promiseOrValue);\n\n\n\nIf originalPromise is rejected, the returned pro...</div><div class='long'><p>Returns a yielded promise</p>\n\n<pre><code>originalPromise.yield(promiseOrValue);\n</code></pre>\n\n<ul>\n<li>If <code>originalPromise</code> is rejected, the returned promise will be rejected with the same reason</li>\n<li>If <code>originalPromise</code> is fulfilled, then it \"yields\" the resolution of the returned promise to <code>promiseOrValue</code>, namely:\n\n<ul>\n<li>If <code>promiseOrValue</code> is a value, the returned promise will be fulfilled with <code>promiseOrValue</code></li>\n<li>If <code>promiseOrValue</code> is a <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">promise</a>, the returned promise will be:\n\n<ul>\n<li>fulfilled with the fulfillment value of <code>promiseOrValue</code>, or</li>\n<li>rejected with the rejection reason of <code>promiseOrValue</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n\n\n<p>In other words, it's much like:</p>\n\n<pre><code>originalPromise.then(function() {\n    return promiseOrValue;\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promiseOrValue</span> : <a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a>|*<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/when.Promise\" rel=\"when.Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
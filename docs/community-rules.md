# Community Embed Rules

All rules are sorted alphabetically.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Twitter](#twitter)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Twitter

Watch

```js
(?:<a.*?)?(?:https?:\\/\\/)?(?:twitter\\.com)\\/([^\\/\"\\s]*)\\/statuse?s?\\/([^\\/\"\\s]*)(\\/photo\\/\\d|)\".*?>.+?<\\/a>
```

Replace

```html
<div class='embed-wrapper'><blockquote class='twitter-tweet' data-lang='en'><a href='https://twitter.com/$1/status/$2'></a></blockquote><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script></div>
```

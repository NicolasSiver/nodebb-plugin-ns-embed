# Community Embed Rules

All rules are sorted alphabetically.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Blender Tube](#blender-tube)
- [Dailymotion](#dailymotion)
- [FramaTube](#framatube)
- [Twitter](#twitter)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Blender Tube

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?video\\.blender\\.org\\/videos\\/watch\\/([a-zA-Z0-9_-]{4,36})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe  src='//video.blender.org/videos/embed/$1' frameborder='0' allowfullscreen></iframe></div></div>
```

### Dailymotion

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?dailymotion\\.com\\/video\\/([a-zA-Z0-9_-]{4,11})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe  src='//www.dailymotion.com/embed/video/$1' frameborder='0' allowfullscreen></iframe></div></div>
```

### FramaTube

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?framatube\\.org\\/videos\\/watch\\/([a-zA-Z0-9_-]{4,36})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe  src='//framatube.org/videos/embed/$1' frameborder='0' allowfullscreen></iframe></div></div>
```

### Twitter

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:twitter\\.com)\\/([^\\/\"\\s]*)\\/statuse?s?\\/([^\\/\"\\s]*)(\\/photo\\/\\d|)\".*?>.+?<\\/a>
```

Replace

```html
<div class='embed-wrapper'><blockquote class='twitter-tweet' data-lang='en'><a href='https://twitter.com/$1/status/$2'></a></blockquote><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script></div>
```

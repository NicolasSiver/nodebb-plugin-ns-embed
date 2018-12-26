# Community Embed Rules

All rules are sorted alphabetically.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Blender Tube](#blender-tube)
- [Dailymotion](#dailymotion)
- [FramaTube](#framatube)
- [MixCloud](#mixcloud)
- [SoundCloud](#soundcloud)
- [Spotify](#spotify)
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

### MixCloud

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?mixcloud\\.com\\/([a-zA-Z0-9_-]{4,36})\\/([a-zA-Z0-9_-]{4,136})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe src='https://www.mixcloud.com/widget/iframe/?light=1&hide_artwork=1&feed=%2F$1%2F$2%2F' frameborder='0'></iframe></div></div>
```

### SoundCloud

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?soundcloud\\.com\\/([a-zA-Z0-9_^/-]{4,250})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https://soundcloud.com/$1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe></div></div>
```

### Spotify

Watch

```regex
(?:<a.*?)?(?:https?:\\/\\/)?(?:www\\.)?open\\.spotify\\.com\\/album\\/([a-zA-Z0-9_-]{4,36})(?:.*?\\/a>)?
```

Replace

```html
<div class='embed-wrapper'><div class='embed-container'><iframe src='https://open.spotify.com/embed/album/$1' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe></div></div>
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
